"use client";

import { Navigation } from "@/components/navigation";
import { AvatarComponent } from "@/components/avatar-component";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lynt } from "@/components/lynt";
import { Calendar, MapPin, Link as LinkIcon } from "lucide-react";

const userPosts = [
  {
    id: "1",
    username: "Current User",
    handle: "currentuser",
    content: "Building amazing things with Next.js and TypeScript! The future of web development is here. 🚀",
    timestamp: "1h ago",
    verified: true,
    iq: 135,
    likes: 89,
    comments: 12,
    reposts: 23,
    views: 2341,
    liked: false,
    reposted: false,
  },
  {
    id: "2",
    username: "Current User",
    handle: "currentuser",
    content: "Just finished implementing dark mode support. The UI looks stunning in both themes!",
    timestamp: "3h ago",
    verified: true,
    iq: 135,
    likes: 67,
    comments: 8,
    reposts: 15,
    views: 1876,
    liked: true,
    reposted: false,
  },
];

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="sticky top-0 hidden h-screen w-64 border-r md:block">
        <Navigation currentPage="profile" />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="p-4">
              <h1 className="text-xl font-bold">Profile</h1>
            </div>
          </div>

          {/* Profile Header */}
          <div className="border-b">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20" />

            {/* Profile Info */}
            <div className="p-4">
              <div className="relative -mt-16 mb-4">
                <AvatarComponent 
                  className="h-32 w-32 border-4 border-background"
                  fallback="CU"
                />
              </div>

              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">Current User</h2>
                    <Badge variant="secondary">✓</Badge>
                  </div>
                  <p className="text-muted-foreground">@currentuser</p>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>

              <p className="mb-4">
                Software engineer passionate about web development, open source, and
                building great user experiences. 💻
              </p>

              <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="h-4 w-4" />
                  <a href="https://example.com" className="hover:underline">
                    example.com
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined March 2024</span>
                </div>
              </div>

              <div className="flex gap-4 text-sm">
                <div>
                  <span className="font-bold">256</span>{" "}
                  <span className="text-muted-foreground">Following</span>
                </div>
                <div>
                  <span className="font-bold">1.2K</span>{" "}
                  <span className="text-muted-foreground">Followers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="border-b p-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-2xl font-bold">142</p>
                    <p className="text-sm text-muted-foreground">Posts</p>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <p className="text-2xl font-bold">4.2K</p>
                    <p className="text-sm text-muted-foreground">Likes</p>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">135</p>
                    <p className="text-sm text-muted-foreground">IQ Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posts */}
          <div className="divide-y">
            {userPosts.map((post) => (
              <div key={post.id} className="p-4">
                <Lynt {...post} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
