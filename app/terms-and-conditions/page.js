"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Footer/Terms"), { ssr: false });
export default function TermsPage() { return <Page />; }