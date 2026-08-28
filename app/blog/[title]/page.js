"use client";
import dynamic from "next/dynamic";

const Page = dynamic(() => import("../../../components/Blogs/BlogContent"), { ssr: false });

export default function BlogPage() {
  return <Page />;
}
