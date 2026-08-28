"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Team/Team"), { ssr: false });
export default function TeamPage() { return <Page />; }