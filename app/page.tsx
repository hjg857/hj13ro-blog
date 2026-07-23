import Link from "next/link";
import { posts } from "./blog-data";
import SiteHeader from "./components/SiteHeader";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main id="top">
      <section
        className="hero"
        style={{ backgroundImage: `url("${basePath}/hero-everest.png")` }}
      >
        <SiteHeader overlay />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">WELCOME TO MY DIGITAL GARDEN</p>
          <h1>hJ13ro Blog</h1>
          <p>记录研究、学习与持续思考</p>
          <a className="scroll-down" href="#posts" aria-label="向下浏览">⌄</a>
        </div>
      </section>

      <div className="page-shell" id="posts">
        <section className="feed" aria-label="最新文章">
          <div className="welcome-card">
            <span className="welcome-icon">✦</span>
            <div><strong>你好，欢迎来到 hJ13ro Blog</strong><p>这里记录论文阅读、知识笔记，以及那些值得慢慢写下来的想法。</p></div>
          </div>

          {posts.map((post, index) => (
            <article className={`post-card ${index % 2 ? "reverse" : ""}`} key={post.title}>
              <div
                className={`post-cover ${post.cover}`}
                style={
                  post.cover === "mountain"
                    ? { backgroundImage: `url("${basePath}/hero-mountain.jpg")` }
                    : undefined
                }
                role="img"
                aria-label={`${post.title}的文章封面`}
              >
                <span>{post.category}</span>
              </div>
              <div className="post-content">
                <div className="post-meta"><span>◷ {post.date}</span><span>▣ {post.category}</span></div>
                <h2><Link href="/posts">{post.title}</Link></h2>
                <p>{post.excerpt}</p>
                <div className="tag-row">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
                <Link className="read-more" href="/posts">阅读全文 →</Link>
              </div>
            </article>
          ))}
        </section>

        <aside className="sidebar" aria-label="博客侧栏">
          <section className="side-card profile-card" id="about">
            <img className="avatar" src={`${basePath}/avatar-chibi.png`} alt="hJ13ro 的 Q 版动漫头像" />
            <h2>hJ13ro</h2>
            <p>保持好奇，持续记录。</p>
            <div className="stats">
              <Link href="/posts"><strong>3</strong><span>文章</span></Link>
              <Link href="/categories"><strong>3</strong><span>分类</span></Link>
              <Link href="/tags"><strong>6</strong><span>标签</span></Link>
            </div>
            <a className="follow" href="mailto:hello@example.com">联系我</a>
            <div className="socials"><a href="#" aria-label="GitHub">GH</a><a href="#" aria-label="RSS">RSS</a><a href="#" aria-label="电子邮件">@</a></div>
          </section>

          <section className="side-card notice-card">
            <h3><span>☀</span> 公告</h3>
            <p>博客仍在持续建设中。文章会随着学习进度陆续更新，感谢你的到访。</p>
          </section>

          <section className="side-card" id="categories">
            <h3><span>▦</span> 分类</h3>
            <Link className="category" href="/categories"><span>论文阅读</span><b>1</b></Link>
            <Link className="category" href="/categories"><span>知识笔记</span><b>1</b></Link>
            <Link className="category" href="/categories"><span>个人文章</span><b>1</b></Link>
          </section>

          <section className="side-card" id="tags">
            <h3><span>#</span> 标签</h3>
            <div className="tag-cloud"><Link href="/tags">Diffusion</Link><Link href="/tags">Transformer</Link><Link href="/tags">Deep Learning</Link><Link href="/tags">Learning</Link><Link href="/tags">Writing</Link><Link href="/tags">Generative AI</Link></div>
          </section>
        </aside>
      </div>

      <footer>
        <p>© 2026 hJ13ro Blog · 记录每一次认真的思考</p>
        <p>Inspired by the joyful spirit of Butterfly</p>
      </footer>
      <a className="back-top" href="#top" aria-label="回到顶部">↑</a>
    </main>
  );
}
