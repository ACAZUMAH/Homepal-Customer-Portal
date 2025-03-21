import { Container, Stepper, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { ListingForm } from "./listingForm";
import { ImageDropZone } from "./dropZone";
import { usefilesForm, useNewListingform } from "../../hooks";
import { Summary } from "./summary.jsx";
import { useUploadImages } from "../../../hooks/useUploadImages.js";
import { useCreateListing } from "../../hooks/useCreateListingMutation.js";
import { Success } from "./Success.jsx";

export const NewListing = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [uploadLoading, setUploadLoading] = useState(false);
  const filesForm = usefilesForm();
  const listingForm = useNewListingform();
  const { uploadImage } = useUploadImages();

  const { submitListing, ...result } = useCreateListing();

  const handleSubmit = async () => {
    setUploadLoading(true);
    const imageUrls = await Promise.all(
      filesForm.values.files.map((file) => uploadImage(file))
    );
    if (imageUrls) {
      setUploadLoading(false);
      await submitListing({
        imageUrls: imageUrls,
        name: listingForm.values.name,
        description: listingForm.values.description,
        address: listingForm.values.address,
        price: Number(listingForm.values.price),
        bathrooms: Number(listingForm.values.bathrooms),
        bedrooms: Number(listingForm.values.bedrooms),
        type: listingForm.values.type,
        mode: listingForm.values.mode,
        amenities: listingForm.values.amenities,
      });
    }
  };

  useEffect(() => {
    if (result.data?.createListing._id) {
      setActiveStep(3)
      filesForm.resetForm();
      listingForm.resetForm()
    }
  }, [result.data]);

  return (
    <Container size="md" py="lg">
      <Title order={2} c="#00c898">
        Add New Listing
      </Title>
      <Stepper active={activeStep} color="#00c898" my="xl">

        <Stepper.Step label="Upload Image(s)">
          <ImageDropZone form={filesForm} handleNext={() => setActiveStep(1)} />
        </Stepper.Step>

        <Stepper.Step label="Listing Information">
          <Text size="sm">Enter the listing information</Text>
          <ListingForm
            form={listingForm}
            handleBack={() => setActiveStep(0)}
            handleNext={() => setActiveStep(2)}
          />
        </Stepper.Step>

        <Stepper.Step label="Summary">
          <Summary
            listingForm={listingForm}
            filesForm={filesForm}
            loading={uploadLoading || result.loading}
            handleBack={() => setActiveStep(1)}
            handleSubmit={handleSubmit}
          />
        </Stepper.Step>

        <Stepper.Completed>
          <Success />
        </Stepper.Completed>
        
      </Stepper>
    </Container>
  );
};
