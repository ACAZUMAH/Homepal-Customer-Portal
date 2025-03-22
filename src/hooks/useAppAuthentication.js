import { useCallback } from "react"; // Importing React hooks
import { useDispatch, useSelector } from "react-redux"; // Importing Redux hooks
import { authenticationActions } from "../redux/authentication/slice"; // Importing actions for authentication management

const useAppAuthentication = () => {
    const dispatch = useDispatch(); // Getting dispatch function from Redux

    const loginUser = useCallback((data) => { // Function to log in user
        dispatch(authenticationActions.update({ // Dispatching action to update authentication state
            isAuthenticated: true,
            user: data?.user,
            token: data?.token
        }));
    }, [dispatch]);

    const logoutUser = useCallback(() => { // Function to log out user
        dispatch(authenticationActions.reset()); // Dispatching action to reset authentication state
    }, [dispatch]);

    const updateUser = useCallback((user) => { // Function to update user information
        dispatch(authenticationActions.update({ user })); // Dispatching action to update user
    }, [dispatch]);

    const authentication = useSelector(state => state.authentication); // Selecting authentication state from Redux

    return { ...authentication, loginUser, logoutUser, updateUser }; // Returning authentication state and functions
}

export default useAppAuthentication; // Exporting the custom hook
