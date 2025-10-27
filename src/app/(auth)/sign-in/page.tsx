import { SignInGate } from "@/modules/auth/ui/views/sign-in-gate";
import { Suspense } from "react";

const SignInPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInGate />
    </Suspense>
  );
};

export default SignInPage;
