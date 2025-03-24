import { useFormik } from "formik";
import { useMemo } from "react";
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required("Property Name is required"),
  description: yup.string(),
  address: yup.string().required("Property Address is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Property price is required"),
  bathrooms: yup
    .number()
    .typeError("Bathrooms must be a number")
    .min(1, "Property must have at least one bathroom")
    .required("Property must have atleast one bathroom"),
  bedrooms: yup
    .number()
    .typeError("Bedrooms must be a number")
    .min(1, "Property must have at least one bedroom")
    .required("Property must have atleast one bathroom"),
  type: yup.string().required("Property type is required"),
  mode: yup.string().required("Listing mode is required"),
  amenities: yup.array(),
});

export const useUpdateListingForm = (listing) => {
  const initialValues = useMemo(
    () => ({
      id: listing._id || "",
      name: listing.name || "",
      type: listing.type || "",
      mode: listing.mode || "",
      price: listing.price || "",
      bathrooms: listing.bathrooms || "",
      bedrooms: listing.bedrooms || "",
      description: listing.description || "",
      address: listing.address || "",
      amenities: listing.amenities || [],
      imageUrls: listing.imageUrls || []
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
