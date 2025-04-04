import { Image, Modal } from "@mantine/core";
import React from "react";
import styles from "./styles.module.css";

export const LightBox = ({ url, opened, onClose }) => {
  return (
    <Modal
      className={styles.modal}
      opened={opened}
      onClose={onClose}
      size="70%"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Image src={url} />
    </Modal>
  );
};
