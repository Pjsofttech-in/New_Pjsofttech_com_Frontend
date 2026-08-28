"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/SecondContact/SecondContact"), { ssr: false });
export default function SecondContactPage() { return <Page />; }