"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Next.js + NestJS в одном репозитории 12</h1>
      <Link href={"/account"}>account</Link>
      <br />
      <Link href={"/user"}>user</Link>
    </div>
  );
}
