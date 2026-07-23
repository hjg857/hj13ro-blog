import type { Metadata } from "next";
import Link from "next/link";
import { tags } from "../blog-data";
import InnerPage from "../components/InnerPage";

export const metadata: Metadata = {
  title: "标签｜hJ13ro Blog",
  description: "通过关键词发现 hJ13ro Blog 的文章。",
};

export default function TagsPage() {
  return (
    <InnerPage eyebrow="TAGS" title="标签" description="用关键词连接不同领域的知识碎片">
      <div className="tag-page-card">
        <p className="tag-summary">目前共有 <strong>{tags.length}</strong> 个标签</p>
        <div className="tag-wall">
          {tags.map((tag, index) => (
            <Link href="/posts" key={tag} style={{ fontSize: `${17 + (index % 3) * 4}px` }}>
              <span>#</span>{tag}<b>1</b>
            </Link>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
