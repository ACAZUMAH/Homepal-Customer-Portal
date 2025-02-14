import { useFormik } from "formik"
import * as yup from "yup"
import { usePhoneNumberValidator } from "../../../hooks/usePhoneNumberValidation"
const { title, message, validatePhoneNumber } = usePhoneNumberValidator()

const validationSchema = yup.object().shape({
    phoneNumber: yup.string().test(title, message, validatePhoneNumber).required("")
})

export const usePhoneNumberForm = () =>{
    const form = useFormik({
        initialValues: {
            phoneNumber: ""
        },
        validationSchema,
        validateOnMount: true,
        onSubmit: () => {}
    })

    return { ...form }
}
