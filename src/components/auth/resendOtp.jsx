import { Anchor, Box, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Conditional } from "../conditional";

export const ResendOtp = ({ onShowOTP, onResendOTP, initialCount = 60 }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return clearTimeout(count);
    }
  }, [count]);

  const handleResend = () => {
    onResendOTP()
    setCount(initialCount)
  }

  return (
    <>
      <Box>
        <Text size="sm" ta="center">
          Didn't receive the OTP?&nbsp;
          <Conditional condition={count > 0}>
            Resend in
            <Text c="#00c898">{count}s</Text>
          </Conditional>
          <Conditional condition={count <= 0}>
            <Anchor c="#00c898" underline="always" onClick={handleResend}>
              Resend OTP
            </Anchor>
          </Conditional>
        </Text>
        <Conditional condition={count <= 0}>
          <Text size="sm" ta="center">
            <Anchor
              c="#00c898"
              underline="always"
              onClick={() => onShowOTP(false)}
            >
              Change Number
            </Anchor>
          </Text>
        </Conditional>
      </Box>
    </>
  );
};
