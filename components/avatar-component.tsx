"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarComponentProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

export function AvatarComponent({ 
  src, 
  alt = "Avatar", 
  fallback = "U",
  className 
}: AvatarComponentProps) {
  return (
    <Avatar className={cn("h-12 w-12", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
