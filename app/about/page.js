"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/About/About"), { ssr: false });
export default function AboutPage() { return <Page />; }