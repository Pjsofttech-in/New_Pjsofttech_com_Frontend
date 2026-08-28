"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/LoginPage/LoginPage"), { ssr: false });
export default function LoginPage() { return <Page />; }