import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "../blog-data";
import InnerPage from "../components/InnerPage";

export const metadata: Metadata = {
  title: "分类｜hJ13ro Blog",
  description: "按主题浏览 hJ13ro Blog 的研究手记。",
};

export default function CategoriesPage() {
  return (
    <InnerPage eyebrow="CATEGORIES" title="分类" description="沿着主题脉络整理持续积累的知识">
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link className="category-card" href="/posts" key={category.name}>
            <span className={`category-symbol symbol-${index + 1}`}>0{index + 1}</span>
            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <b>{category.count} 篇文章 →</b>
          </Link>
        ))}
      </div>
    </InnerPage>
  );
}
