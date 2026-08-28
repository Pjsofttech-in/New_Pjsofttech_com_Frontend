"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/ProjectManagementSystem"), { ssr: false });
export default function ProjectManagementSystemPage() { return <Page />; }