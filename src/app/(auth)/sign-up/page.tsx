import { SignUpGate } from "@/modules/auth/ui/views/sign-up-gate";
import { Suspense } from "react";

const SignUpPage = () => {
  return (
    <Suspense>
      <SignUpGate />
    </Suspense>
  );
};

export default SignUpPage;
