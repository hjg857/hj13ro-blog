export const posts = [
  {
    category: "论文阅读",
    date: "2026-07-18",
    title: "从扩散模型理解生成式学习",
    excerpt: "梳理前向加噪、反向去噪与得分匹配之间的联系，记录论文中的关键推导与直觉。",
    tags: ["Diffusion", "Generative AI"],
    cover: "mountain",
  },
  {
    category: "知识笔记",
    date: "2026-07-12",
    title: "Transformer 注意力机制笔记",
    excerpt: "从矩阵运算出发，重新理解 Query、Key、Value 以及多头注意力的设计动机。",
    tags: ["Transformer", "Deep Learning"],
    cover: "aurora",
  },
  {
    category: "个人文章",
    date: "2026-07-05",
    title: "如何建立个人知识系统",
    excerpt: "让阅读、思考与写作形成闭环，把零散信息逐渐整理成可复用的知识。",
    tags: ["Learning", "Writing"],
    cover: "sunset",
  },
] as const;

export const categories = [
  { name: "论文阅读", count: 1, description: "论文精读、方法梳理与关键推导" },
  { name: "知识笔记", count: 1, description: "学习过程中的概念、工具与实践记录" },
  { name: "个人文章", count: 1, description: "关于成长、写作与知识管理的思考" },
] as const;

export const tags = [
  "Diffusion",
  "Generative AI",
  "Transformer",
  "Deep Learning",
  "Learning",
  "Writing",
] as const;
