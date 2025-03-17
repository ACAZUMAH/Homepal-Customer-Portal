import * as yup from "yup";
import { useFormik } from "formik";
import { useMemo } from "react";
import { usePhoneNumberValidator } from "../../hooks";

const { title, message, validatePhoneNumber } = usePhoneNumberValidator();

const validationSchema = yup.object().shape({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  email: yup.string().email().optional(),
  phoneNumber: yup
    .string()
    .test(title, message, validatePhoneNumber)
    .required("Phone number is required"),
});

export const useUpdateUserForm = (currentUser) => {
  const initialValues = useMemo(
    () => ({
      id: currentUser?.id || "",
      firstName: currentUser?.firstName || "",
      lastName: currentUser?.lastName || "",
      email: currentUser?.email || "",
      phoneNumber: currentUser?.phoneNumber || "",
    }),
    [currentUser]
  );

  const form = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  return { ...form };
};
