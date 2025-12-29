"use client";

import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarComponent } from "@/components/avatar-component";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Repeat2, UserPlus } from "lucide-react";

const notifications = [
  {
    id: "1",
    type: "like",
    user: "Jane Smith",
    handle: "janesmith",
    content: "liked your post",
    postPreview: "Just deployed my new Next.js app! 🚀",
    timestamp: "2m ago",
    read: false,
  },
  {
    id: "2",
    type: "comment",
    user: "John Doe",
    handle: "johndoe",
    content: "commented on your post",
    comment: "This is amazing! Great work 🎉",
    timestamp: "15m ago",
    read: false,
  },
  {
    id: "3",
    type: "repost",
    user: "Dev Community",
    handle: "devcommunity",
    content: "reposted your post",
    postPreview: "Building amazing things with Next.js and TypeScript!",
    timestamp: "1h ago",
    read: false,
  },
  {
    id: "4",
    type: "follow",
    user: "Tech Guru",
    handle: "techguru",
    content: "started following you",
    timestamp: "2h ago",
    read: true,
  },
  {
    id: "5",
    type: "like",
    user: "Code Wizard",
    handle: "codewizard",
    content: "liked your post",
    postPreview: "The future of web development is here.",
    timestamp: "3h ago",
    read: true,
  },
];

function getNotificationIcon(type: string) {
  switch (type) {
    case "like":
      return <Heart className="h-5 w-5 fill-red-500 text-red-500" />;
    case "comment":
      return <MessageCircle className="h-5 w-5 text-blue-500" />;
    case "repost":
      return <Repeat2 className="h-5 w-5 text-green-500" />;
    case "follow":
      return <UserPlus className="h-5 w-5 text-primary" />;
    default:
      return null;
  }
}

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="sticky top-0 hidden h-screen w-64 border-r md:block">
        <Navigation currentPage="notifications" />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Notifications</h1>
                {unreadCount > 0 && (
                  <Badge variant="destructive">{unreadCount} new</Badge>
                )}
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="divide-y">
            {notifications.map((notification) => (
              <div key={notification.id}>
                <Card
                  className={`rounded-none border-0 border-l-4 transition-all ${
                    notification.read
                      ? "border-l-transparent"
                      : "border-l-primary bg-accent/30"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="pt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <AvatarComponent
                            fallback={notification.user.charAt(0).toUpperCase()}
                            className="h-10 w-10"
                          />
                          <div className="flex-1">
                            <div className="mb-1">
                              <span className="font-bold">
                                {notification.user}
                              </span>{" "}
                              <span className="text-muted-foreground">
                                @{notification.handle}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {notification.content}
                            </p>
                            {notification.postPreview && (
                              <div className="mt-2 rounded-md border bg-muted/50 p-2">
                                <p className="text-sm">
                                  {notification.postPreview}
                                </p>
                              </div>
                            )}
                            {notification.comment && (
                              <div className="mt-2 rounded-md border bg-muted/50 p-2">
                                <p className="text-sm">{notification.comment}</p>
                              </div>
                            )}
                            <p className="mt-1 text-xs text-muted-foreground">
                              {notification.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
