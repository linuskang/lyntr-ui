"use client";

import { PostComposer } from "@/components/post-composer";
import { Lynt } from "@/components/lynt";
import { Navigation } from "@/components/navigation";
import { Separator } from "@/components/ui/separator";

const sampleLynts = [
  {
    id: "1",
    username: "John Doe",
    handle: "johndoe",
    content: "Just deployed my new Next.js app! 🚀 The performance is incredible and the developer experience is top-notch. #NextJS #WebDev",
    timestamp: "2h ago",
    verified: true,
    iq: 130,
    likes: 42,
    comments: 8,
    reposts: 15,
    views: 1234,
    liked: false,
    reposted: false,
  },
  {
    id: "2",
    username: "Jane Smith",
    handle: "janesmith",
    content: "TypeScript + React = ❤️\n\nThe type safety and autocomplete make development so much smoother. Never going back to plain JavaScript!",
    timestamp: "5h ago",
    verified: true,
    iq: 125,
    likes: 156,
    comments: 23,
    reposts: 45,
    views: 3421,
    liked: true,
    reposted: false,
  },
  {
    id: "3",
    username: "Dev Community",
    handle: "devcommunity",
    content: "What's your favorite UI library? Drop your picks below! 👇",
    timestamp: "1d ago",
    verified: false,
    iq: 110,
    likes: 89,
    comments: 67,
    reposts: 12,
    views: 5678,
    liked: false,
    reposted: true,
  },
];

export default function Home() {
  const handlePost = (content: string) => {
    console.log("New post:", content);
    // Here you would typically send the post to your API
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="sticky top-0 hidden h-screen w-64 border-r md:block">
        <Navigation currentPage="home" />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="p-4">
              <h1 className="text-xl font-bold">Home</h1>
            </div>
          </div>

          {/* Post Composer */}
          <div className="border-b p-4">
            <PostComposer 
              username="Current User"
              onPost={handlePost}
            />
          </div>

          {/* Feed */}
          <div className="divide-y">
            {sampleLynts.map((lynt) => (
              <div key={lynt.id} className="p-4">
                <Lynt {...lynt} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar - Trending/Suggestions (Optional) */}
      <aside className="sticky top-0 hidden h-screen w-80 border-l p-4 xl:block">
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="mb-3 text-lg font-bold">Trending Topics</h2>
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-accent/50 rounded p-2">
                <p className="text-sm font-semibold">#WebDevelopment</p>
                <p className="text-xs text-muted-foreground">12.3K posts</p>
              </div>
              <div className="cursor-pointer hover:bg-accent/50 rounded p-2">
                <p className="text-sm font-semibold">#NextJS</p>
                <p className="text-xs text-muted-foreground">8.7K posts</p>
              </div>
              <div className="cursor-pointer hover:bg-accent/50 rounded p-2">
                <p className="text-sm font-semibold">#TypeScript</p>
                <p className="text-xs text-muted-foreground">15.2K posts</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
