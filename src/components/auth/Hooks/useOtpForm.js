import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  otp: yup.string().min(4).required("Enter a valid otp code"),
});

export const useOtpForm = () => {
  const form = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  return { ...form };
};
