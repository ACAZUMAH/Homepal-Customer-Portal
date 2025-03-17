import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useAppNavigation = (route, from) => {
    const navigate = useNavigate();
    return useCallback(() => navigate(route, { state: { from } }), [navigate, route])
};

