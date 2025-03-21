import { routesEndPoints } from "../../constants"

export const getListingtUrl = (id) => {
    return routesEndPoints.UPDATE.replace(":id", id)
}