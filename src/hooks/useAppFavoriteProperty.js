import { useCallback } from "react"; // Importing React hooks
import { useSelector, useDispatch } from "react-redux"; // Importing Redux hooks
import { favoritesActions } from "../redux/favorite/slice"; // Importing actions for favorite properties

export const useAppFavoriteProperty = () => {
    const dispatch = useDispatch(); // Getting dispatch function from Redux

    const toggleFavorite = useCallback((propertyId) => { // Function to toggle favorite status
        dispatch(favoritesActions.toggle(propertyId)); // Dispatching action to toggle favorite
    }, [dispatch]);

    const favorites = useSelector(state => state.favorites); // Selecting favorites from Redux state

    return { ...favorites, toggleFavorite }; // Returning favorites and toggle function
}
