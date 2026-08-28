"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/ContactPage/ContactPage"), { ssr: false });
export default function ContactPage() { return <Page />; }