"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Login/Login"), { ssr: false });
export default function LoginPage() { return <Page />; }