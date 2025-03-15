import { Modal } from "@mantine/core";
import { RequestModalForm } from "./modals/requestModalForm";
import { useState } from "react";

export const RequestModal = ({ property, opened, onClose }) => {
  const [mode, setMode] = useState("In person tour");

  const [callMode, setCallMode] = useState("google meet");

  const [scheduledDate, setScheduledDate] = useState('')

  const [contactDetails, setContactDetails] = useState('')

  return (
    <>
      <Modal
        title="Plan Your Property Tour"
        opened={opened}
        onClose={onClose}
        size="lg"
      >
        <RequestModalForm
          onClose={onClose}
          mode={mode}
          setMode={setMode}
          callMode={callMode}
          setCallMode={setCallMode}
          scheduledDate={scheduledDate}
          setScheduledDate={setScheduledDate}
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          property={property}
        />
      </Modal>
    </>
  );
};
