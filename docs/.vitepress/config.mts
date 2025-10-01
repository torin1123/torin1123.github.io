import { defineConfig } from "vitepress";

// .viewpress/config.mts
export default defineConfig({
  title: "白菜网项目机器人",
  description: "SnowAdmin官方文档",
  base: '/', // 使用根路径，因为是用户页面仓库
  sitemap: {
    hostname: 'https://bcwbot.top',
    transformItems: (items) => {
      return items.map((item) => ({
        ...item,
        lastmod: new Date().toISOString()
      }))
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/bot.svg' }]
  ],
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        // 中文界面文本
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '深色模式',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'BPW Robot',
      description: 'BPW Project Robot Documentation',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/' },
          { text: 'Config', link: '/en/markdown-examples' },
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' },
            ],
          },
        ],
      }
    }
  },
  // 项目配置
  themeConfig: {
    // 本地搜索
    search: {
      provider: 'local'
    },
    logo: "/bot.svg", // 项目的logo
    // 顶部按钮配置
    nav: [
      { text: "指南", link: "/" },
      { text: "同款机器人", link: "/" },
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
        text: "机器人操作指南",
        items: [
          { text: "使用教程", link: "/tgbcwbot-tutorial" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Tlegram电报相关",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    // 顶部最右侧github图标
    socialLinks: [
      { icon: "telegram", link: "" },
    ],
    // 项目首页的footer
    footer: {
      message: "",
      copyright: "版权所有 © 2024-2029 白菜网项目机器人",
    },
  },
});
