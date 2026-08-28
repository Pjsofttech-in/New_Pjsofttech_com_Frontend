"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/CareerPost/CareerPost"), { ssr: false });
export default function CareerPostPage() { return <Page />; }