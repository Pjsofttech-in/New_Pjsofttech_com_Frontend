"use client";
import dynamic from "next/dynamic";

const Page = dynamic(() => import("../components/Home/Home"), { ssr: false });

export default function Home() {
  return <Page />;
}
