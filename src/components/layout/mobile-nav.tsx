"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, MessageCircle, Smile, BookOpen, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/chat", icon: MessageCircle, label: "Chat" },
  { href: "/mood", icon: Smile, label: "Mood" },
  { href: "/dashboard/journal", icon: BookOpen, label: "Journal" },
  { href: "/dashboard/profile", icon: User, label: "Profile" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="glass-strong mx-4 mb-4 rounded-2xl px-2 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300",
                  isActive ? "bg-sage/40 text-ocean" : "text-ocean/40"
                )}
              >
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-mint"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
