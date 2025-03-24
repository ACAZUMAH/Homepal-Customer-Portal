import { useFormik } from "formik";
import * as yup from "yup";
import { IMAGE_MIME_TYPE } from "@mantine/dropzone";

const filesValidatinSchema = yup.object().shape({
  files: yup.array().of(
    yup.mixed().test("fileTyps", "Invalid file type", (value) => {
      return [...IMAGE_MIME_TYPE].includes(value?.type);
    })
  ),
});

const listingDetailsSchema = yup.object().shape({
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

export const usefilesForm = () => {
  const form = useFormik({
    initialValues: {
      files: [],
    },
    validateOnMount: true,
    validationSchema: filesValidatinSchema,
    onSubmit: () => {},
  });

  const handleFilesDrop = (acceptedFiles) => {
    const uniqueFiles = acceptedFiles.filter(
      (file) => !form.values.files.some((f) => f.path === file.path)
    );
    form.setFieldValue("files", [...form.values.files, ...uniqueFiles]);
  };

  const handleRemoveFile = (file) => {
    form.setFieldValue(
      "files",
      form.values.files.filter((f) => f.path !== file.path)
    );
  };

  return { ...form, handleFilesDrop, handleRemoveFile };
};

export const useNewListingform = () => {
  const form = useFormik({
    initialValues: {
      name: "",
      description: "",
      address: "",
      price: "",
      bathrooms: "",
      bedrooms: "",
      type: "",
      mode: "",
      amenities: [],
    },
    validateOnMount: true,
    validationSchema: listingDetailsSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  return { ...form };
};
