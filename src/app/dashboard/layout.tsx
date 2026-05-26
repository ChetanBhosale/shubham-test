"use client";

import { MobileNav } from "@/components/layout/mobile-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {children}
      <MobileNav />
    </div>
  );
}
