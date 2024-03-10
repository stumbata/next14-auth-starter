"use client";

import { SessionProvider } from "next-auth/react";

type propTypes = {
  children: React.ReactElement;
};

const AuthProvider = ({ children }: propTypes) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
