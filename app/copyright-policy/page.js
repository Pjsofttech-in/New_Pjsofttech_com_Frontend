"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Footer/Copyright"), { ssr: false });
export default function CopyrightPolicyPage() { return <Page />; }