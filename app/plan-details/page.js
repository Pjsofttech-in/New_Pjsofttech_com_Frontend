"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/CreateAccountPlans/PlanInfo"), { ssr: false });
export default function PlanDetailsPage() { return <Page />; }