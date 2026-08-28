"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Modules/Modules"), { ssr: false });
export default function ModulesPage() { return <Page />; }