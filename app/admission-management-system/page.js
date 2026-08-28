"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/AdmissionManagementSystem"), { ssr: false });
export default function AdmissionManagementSystemPage() { return <Page />; }