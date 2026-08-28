"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Solutions/Solutions"), { ssr: false });
export default function SolutionsPage() { return <Page />; }