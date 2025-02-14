import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoritesActions } from "../redux/favorite/slice";

export const useAppFavoriteProperty = () => {
    const dispatch = useDispatch()

    const toggleFavorite = useCallback((propertyId) => {
        dispatch(favoritesActions.toggle(propertyId))
    }, [dispatch])

    const favorites = useSelector(state => state.favorites)

    return { ...favorites, toggleFavorite }
}