import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticationActions } from "../redux/authentication/slice";


const useAppAuthentication = () => {

    const dispatch = useDispatch()

    const loginUser = useCallback((data) => {
        dispatch(authenticationActions.update({
            isAuthenticated: true,
            user: data?.user,
            token: data?.token
        }))
    }, [dispatch])

    const logoutUser = useCallback(() => {
        dispatch(authenticationActions.reset())
    }, [dispatch])

    const updateUser = useCallback((user) => {
        dispatch(authenticationActions.update({ user }))
    }, [dispatch])

    const authentication = useSelector(state => state.authentication)

    return { ...authentication, loginUser, logoutUser, updateUser }
}

export default useAppAuthentication