import {
  Box,
  Button,
  PinInput,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Conditional } from "../conditional";
import { usePhoneNumberForm } from "./Hooks/usePhoneNumberForm";
import { useOtpForm } from "./Hooks/useOtpForm";
import { IconDeviceMobileMessage } from "@tabler/icons-react";
import {
  getPhoneNumberWithCode,
  getPhoneNumberWithZero,
} from "../../helpers/phone-numbers";
import { useSendOTPMutation } from "./Hooks/useLoginMutation";
import { useVerifyOTPMutation } from "./Hooks/useVerifyOtpMutation";
import useAppAuthentication from "../../hooks/useAppAuthentication";
import { ResendOtp } from "./resendOtp";

export const Auth = ({ phoneNumber, onChangePhoneNumber, onSuccess }) => {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const otpForm = useOtpForm();
  const phoneNumberForm = usePhoneNumberForm();
  const { sendOTPHandler, loading: sendLoading } = useSendOTPMutation();
  const { handleVerifyOTPMutation, loading: verifyLoading } = useVerifyOTPMutation();
  const { loginUser } = useAppAuthentication()
  
  useEffect(() => { handleInitialAction() }, [])

  const handleInitialAction = async () => {
    if(phoneNumber){
      phoneNumberForm.setFieldValue("phoneNumber", phoneNumber)
      const phoneNumberWithCode = getPhoneNumberWithCode(phoneNumber)
      if(await sendOTPHandler(phoneNumberWithCode)){
        otpForm.resetForm()
        setShowOtpForm(true)
      }
    }
  }

  const handlePhoneNumberChange = (e) => {
    onChangePhoneNumber(e.target.value);
    phoneNumberForm.setFieldValue("phoneNumber", e.target.value);
  };

  const handleSendOTP = async () => {
    const phoneNumberWithCode = getPhoneNumberWithCode(
      phoneNumberForm.values.phoneNumber
    );

    if (await sendOTPHandler(phoneNumberWithCode)) {
      setShowOtpForm(true);
    }
  };

  const handleResendOTP = async () => {
    await sendOTPHandler(getPhoneNumberWithCode(phoneNumber))
  }

  const handleVerifyOtp = async () => {
    const verifyOTP = await handleVerifyOTPMutation(otpForm.values.otp)
    if(verifyOTP){
      onSuccess()
      loginUser(verifyOTP)
    }
  }

  return (
    <>
      <Box>
        <Conditional condition={!showOtpForm}>
          <Stack gap="md">
            <Text ta="center"> Enter your phone number </Text>
            <TextInput
              name="phoneNumber"
              size="md"
              placeholder="enter phone number"
              onChange={handlePhoneNumberChange}
              value={phoneNumberForm.values.phoneNumber}
              error={phoneNumberForm.errors.phoneNumber}
            />
            <Button
              size="md"
              color="#00c898"
              disabled={
                !phoneNumberForm.values.phoneNumber || !phoneNumberForm.isValid
              }
              loading={sendLoading}
              onClick={handleSendOTP}
            >
              continue
            </Button>
          </Stack>
        </Conditional>
        <Conditional condition={showOtpForm}>
          <Stack align="center" gap="md">
            <Text>
              Enter the OTP sent to&nbsp;{" "}
              <b>{getPhoneNumberWithZero(phoneNumber)}</b>
            </Text>
            <ThemeIcon c="#00c898" bg="transparent" size={80}>
              <IconDeviceMobileMessage size={80} stroke={1.5} />
            </ThemeIcon>
            <PinInput
              name="otp"
              size="md"
              length={5}
              type="number"
              onChange={(value) => otpForm.setFieldValue("otp", value)}
              value={otpForm.values.otp}
            />
            <Button
              size="md"
              fullWidth
              color="#00c898"
              disabled={!otpForm.values.otp || !otpForm.isValid}
              loading={verifyLoading}
              onClick={handleVerifyOtp}
            >
              verify
            </Button>
          <ResendOtp onShowOTP={setShowOtpForm} onResendOTP={handleResendOTP} initialCount={50}/>
          </Stack>
        </Conditional>
      </Box>
    </>
  );
};
