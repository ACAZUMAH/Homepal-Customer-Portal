import { Modal } from "@mantine/core";
import { MakeOfferModalForm } from "./modals/makeOfferModalForm";
import { useState } from "react";

export const MakeOfferModal = ({ opened, onClose, location, price }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [offerAmount, setOfferAmount] = useState("");

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title="Submit Your Offer"
        size="xl"
      >
        <MakeOfferModalForm
          location={location}
          price={price}
          onClose={onClose}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          offerAmount={offerAmount}
          setOfferAmount={setOfferAmount}
        />
      </Modal>
    </>
  );
};
