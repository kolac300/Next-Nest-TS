"use client"
import UserInfo from "../components/userInfo";
import { SessionProvider } from "next-auth/react";

function Account() {
  return (
    <SessionProvider>
      <UserInfo />
    </SessionProvider>
  );
}

export default Account;
