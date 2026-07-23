import Link from "next/link";

const navItems = [
  { href: "/", label: "⌂ 首页" },
  { href: "/posts", label: "▤ 文章" },
  { href: "/categories", label: "▦ 分类" },
  { href: "/tags", label: "# 标签" },
  { href: "/about", label: "♙ 关于" },
];

export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`topbar ${overlay ? "" : "inner-topbar"}`}>
      <Link className="logo" href="/">hJ13ro Blog</Link>
      <nav aria-label="主导航">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
