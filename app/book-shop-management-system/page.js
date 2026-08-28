"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/BookShopManagementSystem"), { ssr: false });
export default function BookShopManagementSystemPage() { return <Page />; }