<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          #content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          h1 {
            font-size: 28px;
            font-weight: 600;
            margin: 0 0 20px;
            color: #1a1a1a;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background-color: #4ba3c3;
            color: white;
            font-weight: 600;
            padding: 12px;
            text-align: left;
            font-size: 13px;
            text-transform: uppercase;
          }
          tr:nth-child(odd) {
            background-color: #f9f9f9;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #e5e5e5;
          }
          td a {
            color: #4ba3c3;
            text-decoration: none;
          }
          td a:hover {
            text-decoration: underline;
          }
          .intro {
            background-color: #e0f4ff;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            line-height: 1.6;
          }
          .stats {
            margin: 20px 0;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div id="content">
          <h1>XML Sitemap</h1>
          <div class="intro">
            <p>这是 XML Sitemap，用于帮助搜索引擎更好地索引网站内容。</p>
            <p>This is an XML Sitemap to help search engines better index the website.</p>
          </div>
          <div class="stats">
            <strong>总 URL 数 (Total URLs): </strong>
            <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
          </div>
          <table>
            <tr>
              <th>URL</th>
              <th>最后更新 (Last Modified)</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <xsl:variable name="itemURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <a href="{$itemURL}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
