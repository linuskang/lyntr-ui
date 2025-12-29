"use client";

import * as React from "react";
import { Navigation } from "@/components/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarComponent } from "@/components/avatar-component";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

const searchResults = [
  {
    id: "1",
    username: "Tech Guru",
    handle: "techguru",
    bio: "Software architect and technology enthusiast. Building the future one line of code at a time.",
    verified: true,
    followers: 12500,
    iq: 140,
  },
  {
    id: "2",
    username: "Design Master",
    handle: "designmaster",
    bio: "UI/UX designer creating beautiful and functional interfaces.",
    verified: true,
    followers: 8900,
    iq: 125,
  },
  {
    id: "3",
    username: "Code Wizard",
    handle: "codewizard",
    bio: "Full-stack developer | Open source contributor | Coffee addict ☕",
    verified: false,
    followers: 5600,
    iq: 130,
  },
];

const trendingTopics = [
  { tag: "WebDevelopment", posts: "12.3K" },
  { tag: "NextJS", posts: "8.7K" },
  { tag: "TypeScript", posts: "15.2K" },
  { tag: "ReactJS", posts: "22.1K" },
  { tag: "TailwindCSS", posts: "9.4K" },
];

export default function SearchPage() {
  const [query, setQuery] = React.useState("");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="sticky top-0 hidden h-screen w-64 border-r md:block">
        <Navigation currentPage="search" />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="p-4">
              <h1 className="mb-3 text-xl font-bold">Search</h1>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search Lyntr..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Trending Topics */}
          <div className="border-b p-4">
            <h2 className="mb-3 text-lg font-bold">Trending Topics</h2>
            <div className="space-y-2">
              {trendingTopics.map((topic) => (
                <Card key={topic.tag} className="cursor-pointer transition-all hover:bg-accent/50">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">#{topic.tag}</p>
                        <p className="text-xs text-muted-foreground">
                          {topic.posts} posts
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Suggested Users */}
          <div className="p-4">
            <h2 className="mb-3 text-lg font-bold">Suggested Users</h2>
            <div className="space-y-3">
              {searchResults.map((user) => (
                <Card key={user.id} className="transition-all hover:bg-accent/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AvatarComponent
                        fallback={user.username.charAt(0).toUpperCase()}
                        className="h-12 w-12"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{user.username}</span>
                          {user.verified && (
                            <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                              ✓
                            </Badge>
                          )}
                          <Badge variant="outline" className="ml-auto">
                            IQ {user.iq}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          @{user.handle}
                        </p>
                        <p className="mt-1 text-sm">{user.bio}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {user.followers.toLocaleString()} followers
                        </p>
                      </div>
                      <Button size="sm">Follow</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
