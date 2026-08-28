"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/ContactUs/ContactUs"), { ssr: false });
export default function ContactUsPage() { return <Page />; }