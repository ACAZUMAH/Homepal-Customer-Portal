import { Modal } from "@mantine/core";
import { RequestModalForm } from "./modals/requestModalForm";
import useAppAuthentication from "../../hooks/useAppAuthentication";
import { useState } from "react";

export const RequestModal = ({ property, opened, onClose }) => {
  const [mode, setMode] = useState("In person tour");

  const [callMode, setCallMode] = useState("google meet");

  const [scheduleDate, setScheduleDate] = useState('')

  const [contactDetails, setContactDetails] = useState('')

  const { user } = useAppAuthentication();

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
        />
      </Modal>
    </>
  );
};
