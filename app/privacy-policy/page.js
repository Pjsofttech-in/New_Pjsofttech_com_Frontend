"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Footer/Privacy"), { ssr: false });
export default function PrivacyPolicyPage() { return <Page />; }