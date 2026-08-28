"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Organization/Organization"), { ssr: false });
export default function OrganizationPage() { return <Page />; }