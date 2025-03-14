import * as yup from 'yup'
import { useFormik } from 'formik'

const validationSchema = yup.object().shape({
    scheduleDate: yup.date().required("Schedule date is required"),
    gmail: yup.string().required('Gmail is required'),
    whatsAppNumber: yup.string().required('Whatsapp number is required'),
    phoneNumber: yup.string().required('Phone number is required')
})

export const useRequestTourForm = () => {
    const form = useFormik({
        initialValues: {
            tourMode: '',
            scheduleDate: '',
            videoCallMode: '',
            gmail: '',
            whatsAppNumber: '',
            phoneNumber: '',
        },
        validationSchema,
        validateOnMount: false,
        validateOnBlur: true,
        onSubmit: () => {}
    })

    return { ...form }
}
