"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/IncomeExpensesManagementSystem"), { ssr: false });
export default function IncomeExpensesManagementSystemPage() { return <Page />; }