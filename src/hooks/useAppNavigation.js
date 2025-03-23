import { useCallback } from "react"; // Importing React hooks
import { useNavigate } from "react-router-dom"; // Importing useNavigate from React Router

export const useAppNavigation = (route, from) => {
    const navigate = useNavigate(); // Getting navigate function from React Router
    return useCallback(() => navigate(route, { state: { from } }), [navigate, route]); // Returning a callback to navigate
};
