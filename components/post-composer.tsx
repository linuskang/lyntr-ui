"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AvatarComponent } from "@/components/avatar-component";
import { ImagePlus } from "lucide-react";

interface PostComposerProps {
  username?: string;
  avatarUrl?: string;
  onPost?: (content: string) => void;
}

export function PostComposer({ 
  username = "User", 
  avatarUrl,
  onPost 
}: PostComposerProps) {
  const [content, setContent] = React.useState("");
  const maxLength = 280;

  const handlePost = () => {
    if (content.trim() && onPost) {
      onPost(content);
      setContent("");
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <AvatarComponent 
            src={avatarUrl} 
            alt={username}
            fallback={username.charAt(0).toUpperCase()}
          />
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={maxLength}
              className="min-h-[100px] resize-none border-0 p-0 focus-visible:ring-0"
            />
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon">
                <ImagePlus className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <span className={`text-sm ${content.length > maxLength * 0.9 ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {content.length} / {maxLength}
                </span>
                <Button 
                  onClick={handlePost}
                  disabled={!content.trim() || content.length > maxLength}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
