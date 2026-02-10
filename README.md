# bladeodyssey.github.io

极简黑白风格的学术/作品集个人主页（纯 HTML/CSS/JS，无外部依赖）。

## 结构说明

- `index.html`：页面结构与内容（Home / Research / Publications / Code / Contact）
- `styles.css`：全局样式、排版变量、响应式与轻微动效
- `script.js`：标题年份、导航平滑滚动、Publications 展开/收起、Copy email

## 如何编辑内容

### 1) Research interests
在 `index.html` 的 `#research` 区块中，按如下结构增删条目：

- `<span class="chip">方向名称</span>`：方向标签
- `<p>一句话说明</p>`：1 行简介

### 2) Publications
在 `index.html` 的 `#publications` 区块中编辑：

- 用 `<div class="pub-group" data-year="YYYY">` 做年份分组
- 每条论文使用 `<li class="publication-item">`
- 条目包含：作者、`<strong>标题</strong>`、`<span class="venue">会议/期刊</span>`、`PDF/arXiv/DOI` 链接

> 默认仅显示前 3 条；点击 “Show all / Show selected” 由 `script.js` 控制。

### 3) Code links
在 `index.html` 的 `#code` 区块中编辑 `<article class="code-card">`：

- 项目名（`<h3>`）
- 一句话描述（`<p>`）
- GitHub 链接按钮（`<a>`）

## 本地预览

```bash
python3 -m http.server 8000
```

打开 `http://localhost:8000` 查看。
