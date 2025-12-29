"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AvatarComponent } from "@/components/avatar-component";
import { Heart, MessageCircle, Repeat2, Share2, Eye } from "lucide-react";

interface LyntProps {
  id: string;
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  avatarUrl?: string;
  verified?: boolean;
  iq?: number;
  likes?: number;
  comments?: number;
  reposts?: number;
  views?: number;
  liked?: boolean;
  reposted?: boolean;
}

export function Lynt({
  username,
  handle,
  content,
  timestamp,
  avatarUrl,
  verified = false,
  iq = 90,
  likes = 0,
  comments = 0,
  reposts = 0,
  views = 0,
  liked = false,
  reposted = false,
}: LyntProps) {
  const [isLiked, setIsLiked] = React.useState(liked);
  const [isReposted, setIsReposted] = React.useState(reposted);
  const [likeCount, setLikeCount] = React.useState(likes);
  const [repostCount, setRepostCount] = React.useState(reposts);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleRepost = () => {
    setIsReposted(!isReposted);
    setRepostCount(isReposted ? repostCount - 1 : repostCount + 1);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  };

  return (
    <Card className="overflow-hidden transition-all hover:bg-accent/50">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <AvatarComponent 
            src={avatarUrl} 
            alt={username}
            fallback={username.charAt(0).toUpperCase()}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold">{username}</span>
              {verified && (
                <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                  ✓
                </Badge>
              )}
              <span className="text-sm text-muted-foreground">@{handle}</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{timestamp}</span>
              <Badge variant="outline" className="ml-auto">
                IQ {iq}
              </Badge>
            </div>
            <div className="mt-2 overflow-wrap-anywhere">
              <p className="text-sm">{content}</p>
            </div>
            <div className="mt-3 flex items-center justify-between text-muted-foreground">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">{formatNumber(comments)}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 hover:text-green-500 ${isReposted ? "text-green-500" : ""}`}
                onClick={handleRepost}
              >
                <Repeat2 className="h-4 w-4" />
                <span className="text-xs">{formatNumber(repostCount)}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 hover:text-red-500 ${isLiked ? "text-red-500" : ""}`}
                onClick={handleLike}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                <span className="text-xs">{formatNumber(likeCount)}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 hover:text-primary"
              >
                <Eye className="h-4 w-4" />
                <span className="text-xs">{formatNumber(views)}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 hover:text-primary"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
