"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Blogs/Blogs"), { ssr: false });
export default function BlogsPage() { return <Page />; }