import type { Metadata } from "next";
import InnerPage from "../components/InnerPage";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "关于｜hJ13ro Blog",
  description: "了解 hJ13ro Blog 与这份公开研究手记。",
};

export default function AboutPage() {
  return (
    <InnerPage eyebrow="ABOUT ME" title="关于" description="保持好奇，持续记录">
      <div className="about-card">
        <div className="about-profile">
          <img src={`${basePath}/avatar-chibi.png`} alt="hJ13ro 的 Q 版动漫头像" />
          <div>
            <p className="about-kicker">你好，我是</p>
            <h2>hJ13ro</h2>
            <p>一名持续学习与写作的研究者，关注论文阅读、人工智能与个人知识管理。</p>
          </div>
        </div>
        <div className="about-copy">
          <h3>关于这个博客</h3>
          <p>hJ13ro Blog 是我的公开研究手记。这里用于沉淀论文中的关键观点、学习过程中的知识点，以及值得长期保留的个人文章。</p>
          <p>我希望写作不只是结果展示，也能成为整理思路、建立联系和持续成长的一部分。</p>
          <div className="about-principles">
            <span><b>01</b> 保持好奇</span>
            <span><b>02</b> 深入理解</span>
            <span><b>03</b> 持续输出</span>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}
