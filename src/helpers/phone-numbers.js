import { parsePhoneNumber } from "awesome-phonenumber";

export const getPhoneNumberWithCode = (phone) => {

    const parsedPhoneNumber = parsePhoneNumber(phone, {
        regionCode: "GH"
    }).number?.e164

    return parsedPhoneNumber || ""
}

export const getPhoneNumberWithZero = (phone) => {
    
    const parsedPhoneNumber = parsePhoneNumber(phone, { 
        regionCode: "GH" 
    }).number?.significant;

    return parsedPhoneNumber ? `0${parsedPhoneNumber}` : ""
}