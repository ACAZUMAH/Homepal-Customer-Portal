import { useDispatch, useSelector } from "react-redux";


const useAppAuthentication = () => {

    const dispatch = useDispatch()

    const authentication = useSelector(state => state.authentication)

    return { ...authentication, }
}

export default useAppAuthentication