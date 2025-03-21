import { useFormik } from "formik";
import { useMemo } from "react";
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required("Property name is required"),
  type: yup.string().required("Property type required"),
  price: yup.string().required("Property price is required")
});

export const useUpdateListingForm = (listing) => {
  const initialValues = useMemo(
    () => ({
      name: listing.name || "",
      type: listing.type || "",
      mode: listing.mode || "",
      price: listing.price || "",
      bathrooms: listing.bathrooms || "",
      bedrooms: listing.bedrooms || "",
      description: listing.description || "",
      address: listing.address || "",
      amenities: listing.amenities || [],
    }),
    [listing]
  );

  const form = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: () => {}
  });

  return { ...form };
};
