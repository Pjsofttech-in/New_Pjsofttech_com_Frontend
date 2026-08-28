"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Clients/Clients"), { ssr: false });
export default function ClientsPage() { return <Page />; }