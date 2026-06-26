"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname === "/contact";

  return (
    <>
      {!bare && <Navbar />}
      {children}
      {!bare && <Footer />}
    </>
  );
}
