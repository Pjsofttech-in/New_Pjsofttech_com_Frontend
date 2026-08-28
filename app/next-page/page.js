"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/CreateAccountPlans/CreateAccountForm"), { ssr: false });
export default function NextPage() { return <Page />; }