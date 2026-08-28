"use client";
import dynamic from "next/dynamic";

const Page = dynamic(() => import("../../../components/Solutions/AppDetail"), { ssr: false });

export default function AppDetailsPage() {
  return <Page />;
}
