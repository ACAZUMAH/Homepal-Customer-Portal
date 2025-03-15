import { useFormik } from "formik";
import * as yup from "yup";
import useAppAuthentication from "../../hooks/useAppAuthentication";
import { usePhoneNumberValidator } from "../../hooks";

const { title, message, validatePhoneNumber } = usePhoneNumberValidator();

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string(),
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup
    .string()
    .test(title, message, validatePhoneNumber)
    .required("Phone number is required"),
  offerAmount: yup.string().required("Offer amount is required"),
  message: yup.string(),
});

export const useMakeOfferForm = () => {
  const { user } = useAppAuthentication();

  const form = useFormik({
    initialValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      offerAmount: "",
      message: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: () => {}
  });

  return { ...form }
};
