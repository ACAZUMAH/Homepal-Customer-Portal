import { modals } from "@mantine/modals";
import { ModalForm } from "./components/modalForm";
import { Property } from "../property/property";

export const RequestTour = () =>
  modals.openConfirmModal({
    title: "Plan Your Property Tour",
    size: "lg",
    children: (
      <Property>
        <ModalForm />
      </Property>
    ),
    labels: { confirm: "Comfirm Booking", cancel: "Cancel" },
    confirmProps: { color: "#00c898" },
    onCancel: modals.close,
    onConfirm: () => {},
  });

