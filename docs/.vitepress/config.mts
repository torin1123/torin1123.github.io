import { defineConfig } from "vitepress";

// .viewpress/config.mts
export default defineConfig({
  title: "白菜网项目机器人",
  description: "SnowAdmin官方文档",
  base: '/', // 使用根路径，因为是用户页面仓库
  head: [
    ['link', { rel: 'icon', href: '/bot.svg' }]
  ],
  // 项目配置
  themeConfig: {
    logo: "/bot.svg", // 项目的logo
    // 顶部按钮配置
    nav: [
      { text: "指南", link: "/" },
      { text: "配置", link: "/markdown-examples" },
      {
        text: "链接",
        // 内部配置items则该按钮是下拉，link则是跳转链接
        items: [
          {
            text: "在线预览",
            link: "http://101.126.93.137/#/login",
          },
          {
            text: "Gitee仓库",
            link: "https://gitee.com/wang_fan_w/SnowAdmin",
          },
          {
            text: "GitHub仓库",
            link: "https://github.com/WANG-Fan0912/SnowAdmin",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    // 顶部最右侧github图标
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 项目首页的footer
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-2029 白菜网项目机器人",
    },
  },
});
