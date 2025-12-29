"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home, Search, Bell, User, Moon, Sun, LogOut } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage = "home" }: NavigationProps) {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Search", icon: Search, href: "/search" },
    { name: "Notifications", icon: Bell, href: "/notifications" },
    { name: "Profile", icon: User, href: "/profile" },
  ];

  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="space-y-2">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Lyntr</h1>
        </div>
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant={currentPage === item.name.toLowerCase() ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-lg">{item.name}</span>
            </Button>
          </Link>
        ))}
      </div>
      <div className="space-y-2">
        <Separator />
        <Button
          variant="ghost"
          className="w-full justify-start gap-3"
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span>Theme</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
}
