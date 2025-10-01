const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const sitemapPath = join(__dirname, '../docs/.vitepress/dist/sitemap.xml')

try {
  let sitemap = readFileSync(sitemapPath, 'utf-8')

  // 添加 XSL 样式引用和格式化
  sitemap = sitemap.replace(
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
  )

  // 格式化 XML（添加换行和缩进）
  sitemap = sitemap
    .replace(/<url>/g, '\n  <url>')
    .replace(/<\/url>/g, '\n  </url>')
    .replace(/<loc>/g, '\n    <loc>')
    .replace(/<\/loc>/g, '</loc>')
    .replace(/<lastmod>/g, '\n    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>')
    .replace(/<xhtml:link/g, '\n    <xhtml:link')
    .replace(/<\/urlset>/, '\n</urlset>')

  writeFileSync(sitemapPath, sitemap)
  console.log('✓ Sitemap formatted successfully')
} catch (err) {
  console.error('Error formatting sitemap:', err)
}
