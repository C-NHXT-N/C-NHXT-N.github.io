# 郭艾咏 · Robotics Portfolio

面向导师、科研团队与机器人同行的双语个人主页，使用 Astro 与 TypeScript 构建并发布到 GitHub Pages。

- 中文入口：`/`
- English: `/en/`
- 内容：个人简介、四个工程案例、技能树、科研与竞赛成果
- 特性：深浅色主题、响应式导航、双语 SEO、结构化数据与站点地图

## 本地开发

```bash
pnpm install
pnpm dev
```

生产验收：

```bash
pnpm check
pnpm build
```

## 隐私说明

原始简历、项目传单与肖像文件仅保留在本地并由 `.gitignore` 精确排除。仓库只包含公开版内容及经过重命名、裁切和压缩的派生图片。

## 部署

推送到 `main` 后，GitHub Actions 会构建静态站点并部署到 [c-nhxt-n.github.io](https://c-nhxt-n.github.io/)。
