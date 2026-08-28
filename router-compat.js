"use client";

import Link from "next/link";
import { useParams as useNextParams, usePathname, useRouter } from "next/navigation";

export { Link };

export function useNavigate() {
  const router = useRouter();
  return (href) => router.push(href);
}

export function useLocation() {
  return { pathname: usePathname() };
}

export function useParams() {
  return useNextParams();
}