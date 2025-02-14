"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";

const AuthButtons = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <GoogleButton onClick={() => signIn("google")} />
        <button className="p-2 bg-slate-100 text-black" onClick={() => signIn("github")}>Sign in with github</button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {session?.user?.name}</p>
      <p>Your email, {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default AuthButtons;
