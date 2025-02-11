import { parsePhoneNumber } from "awesome-phonenumber";

export const usePhoneNumberValidator = () => {
    const title = "phone-number"
    const message = "Use a valid phone number. Example: 0541626365";
    const validatePhoneNumber = (number) => { 
        return parsePhoneNumber(number, { regionCode: "GH"}).valid
    }

    return { title, message, validatePhoneNumber }
}