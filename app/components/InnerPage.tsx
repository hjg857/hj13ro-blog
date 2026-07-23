import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";

export default function InnerPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{description}</span>
      </section>
      <section className="inner-content">{children}</section>
      <footer>
        <p>© 2026 hJ13ro Blog · 记录每一次认真的思考</p>
        <p>Inspired by the joyful spirit of Butterfly</p>
      </footer>
      <a className="back-top" href="#top" aria-label="回到顶部">↑</a>
    </main>
  );
}
