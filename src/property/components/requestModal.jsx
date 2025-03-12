import { Modal } from "@mantine/core";
import { RequestModalForm } from "./modals/requestModalForm";

export const RequestModal = ({opened, onClose}) => {
  return (
    <>
      <Modal
        title="Plan Your Property Tour"
        opened={opened}
        onClose={onClose}
        size="lg"
      >
        <RequestModalForm onClose={onClose}/>
      </Modal>
    </>
  );
};
