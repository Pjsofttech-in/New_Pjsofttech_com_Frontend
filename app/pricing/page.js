"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Pricing/Pricing"), { ssr: false });
export default function PricingPage() { return <Page />; }