"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<unknown>(null);;

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Next.js + NestJS в одном репозитории</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
