import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../blog-data";
import InnerPage from "../components/InnerPage";

export const metadata: Metadata = {
  title: "文章｜hJ13ro Blog",
  description: "按时间浏览 hJ13ro Blog 的全部研究与学习文章。",
};

export default function PostsPage() {
  return (
    <InnerPage eyebrow="ARCHIVE" title="文章" description="研究、学习与思考的时间线">
      <div className="archive-card">
        <div className="archive-year">2026 <span>{posts.length} 篇</span></div>
        <div className="timeline">
          {posts.map((post) => (
            <article className="timeline-item" key={post.title}>
              <time>{post.date.slice(5).replace("-", " / ")}</time>
              <div>
                <p>{post.category}</p>
                <h2><Link href="/posts">{post.title}</Link></h2>
                <span>{post.excerpt}</span>
                <div className="tag-row">
                  {post.tags.map((tag) => <b key={tag}>#{tag}</b>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
