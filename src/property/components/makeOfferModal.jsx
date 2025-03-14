import { Modal } from "@mantine/core";
import { MakeOfferModalForm } from "./modals/makeOfferModalForm";

export const MakeOfferModal = ({opened, onClose, location, price }) => {
  return (
    <>
      <Modal opened={opened} onClose={onClose} title="Submit Your Offer" size="xl">
        <MakeOfferModalForm location={location} price={price}/>
      </Modal>
    </>
  );
};
