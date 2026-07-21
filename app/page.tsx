const posts = [
  {
    index: "01",
    type: "论文阅读",
    date: "2026.07.18",
    title: "从扩散模型理解生成式学习",
    excerpt: "梳理前向加噪、反向去噪与得分匹配之间的联系，记录论文中的关键推导与直觉。",
    tags: ["Diffusion", "Generative AI"],
  },
  {
    index: "02",
    type: "知识笔记",
    date: "2026.07.12",
    title: "Transformer 注意力机制笔记",
    excerpt: "从矩阵运算出发，重新理解 Query、Key、Value 以及多头注意力的设计动机。",
    tags: ["Transformer", "Deep Learning"],
  },
  {
    index: "03",
    type: "个人文章",
    date: "2026.07.05",
    title: "如何建立个人知识系统",
    excerpt: "让阅读、思考与写作形成闭环，把零散信息逐渐整理成可复用的知识。",
    tags: ["Learning", "Writing"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="hJ13ro Blog 首页">
          <span>hJ13ro</span>
          <small>Blog</small>
        </a>
        <nav aria-label="主导航">
          <a className="active" href="#top">首页</a>
          <a href="#papers">论文</a>
          <a href="#notes">知识笔记</a>
          <a href="#articles">文章</a>
          <a href="#about">关于</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <aside className="margin-note" aria-label="博客索引">
          <span>FIELD NOTES</span>
          <strong>NO. 001</strong>
          <p>研究 · 学习 · 写作</p>
        </aside>

        <div className="hero-copy">
          <p className="eyebrow">A PERSONAL RESEARCH NOTEBOOK</p>
          <h1>记录研究、学习<br />与持续思考。</h1>
          <p className="intro">
            这里收录我现阶段阅读的论文、整理的知识点，以及在学习和生活中逐渐形成的文章。
          </p>
          <a className="text-link" href="#latest">阅读最新记录 <span aria-hidden="true">↘</span></a>
        </div>

        <aside className="index-card">
          <p className="index-title">INDEX / 目录</p>
          <a href="#papers"><span>01</span><strong>论文阅读</strong><small>Paper notes</small></a>
          <a href="#notes"><span>02</span><strong>知识笔记</strong><small>Study notes</small></a>
          <a href="#articles"><span>03</span><strong>个人文章</strong><small>Essays</small></a>
        </aside>
      </section>

      <section className="latest shell" id="latest">
        <div className="section-heading">
          <p>RECENT ENTRIES</p>
          <h2>最近记录</h2>
          <span>持续更新中</span>
        </div>

        <div className="post-list">
          {posts.map((post, i) => (
            <article className="post" id={i === 0 ? "papers" : i === 1 ? "notes" : "articles"} key={post.index}>
              <span className="post-index">{post.index}</span>
              <div className="post-body">
                <div className="post-meta"><span>{post.type}</span><time>{post.date}</time></div>
                <h3><a href="#">{post.title}</a></h3>
                <p>{post.excerpt}</p>
                <div className="tags">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
              </div>
              <a className="post-arrow" href="#" aria-label={`阅读：${post.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="about-label">ABOUT THIS BLOG</p>
        <blockquote>“写下来，是为了看见思考留下的路径。”</blockquote>
        <div className="about-copy">
          <p>hJ13ro Blog 是一份公开的个人研究手记。内容不追求即时完整，而记录理解如何一步步发生。</p>
          <a className="text-link" href="mailto:hello@example.com">与我联系 <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="shell">
        <p>© 2026 hJ13ro Blog</p>
        <p>Built for slow thinking.</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
