"use client";
import dynamic from "next/dynamic";

const Page = dynamic(() => import("../../../components/Solutions/SoftwareDetails"), { ssr: false });

export default function SoftwareDetailsPage() {
  return <Page />;
}
