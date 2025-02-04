import { routesEndPoints } from "../../constants"

export const getPropertytUrl = (id) => {
    return routesEndPoints.PROPERTY.replace(":id", id)
}