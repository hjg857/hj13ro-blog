import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og-v4.png`;

  return {
    title: "hJ13ro Blog｜研究、学习与持续思考",
    description: "记录论文阅读、知识笔记与个人文章的公开研究手记。",
    openGraph: {
      title: "hJ13ro Blog",
      description: "记录研究、学习与持续思考",
      type: "website",
      images: [{ url: imageUrl, width: 1736, height: 908, alt: "hJ13ro Blog" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "hJ13ro Blog",
      description: "记录研究、学习与持续思考",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
