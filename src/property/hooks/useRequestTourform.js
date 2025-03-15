import * as yup from "yup";
import { useFormik } from "formik";
import { usePhoneNumberValidator } from "../../hooks";

const { title, message, validatePhoneNumber } = usePhoneNumberValidator();

const validationSchema = yup.object().shape({
  scheduledDate: yup.date().required("Schedule date is required"),
  gmail: yup.string().required("Gmail is required"),
  whatsAppNumber: yup
    .string()
    .test(title, message, validatePhoneNumber)
    .required("Whatsapp number is required"),
  phoneNumber: yup
    .string()
    .test(title, message, validatePhoneNumber)
    .required("Phone number is required"),
});

export const useRequestTourForm = () => {
  const form = useFormik({
    initialValues: {
      tourMode: "",
      scheduledDate: "",
      videoCallMode: "",
      gmail: "",
      whatsAppNumber: "",
      phoneNumber: "",
    },
    validationSchema,
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => {},
  });

  return { ...form };
};
