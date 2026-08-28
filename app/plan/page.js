"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Plan/Plan"), { ssr: false });
export default function PlanPage() { return <Page />; }