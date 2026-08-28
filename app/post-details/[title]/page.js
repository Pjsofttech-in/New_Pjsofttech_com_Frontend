"use client";
import dynamic from "next/dynamic";

const Page = dynamic(() => import("../../../components/Solutions/PostDetails"), { ssr: false });

export default function PostDetailsPage() {
  return <Page />;
}
