import React, { useCallback } from "react";
import { SettingsForm } from "./components/settingsForm";
import { useUpdateUserForm } from "./hooks/updateUserForm";
import useAppAuthentication from "../hooks/useAppAuthentication";
import { useUpdateUserMutation } from "./hooks/useUpdateUseMutation";
import { getPhoneNumberWithCode } from "../helpers/phone-numbers";
import { Container } from "@mantine/core";


export const Settings = () => {
  const { user, updateUser: updateAppUser } = useAppAuthentication();

  const form = useUpdateUserForm(user);

  const { handleUpdateUser, loading } = useUpdateUserMutation();

  const handleSubmit = useCallback(async () => {
    const data = {
      ...form.values,
      phoneNumber: getPhoneNumberWithCode(form.values.phoneNumber),
    };

    if (!data.email) data.email = null;

    const user = await handleUpdateUser(data);

    if (user) {
      updateAppUser(user);
      form.resetForm();
    }
  }, [form.values, handleUpdateUser]);

  return (
    <>
      <Container size="xl">
        <SettingsForm
          form={form}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
};
