module.exports = {
  title: "test",
  dest: './dist/docs',
  description: "组件库文档",
  themeConfig: {
    logo: "/logo.png",
    sidebar: ["/", "/button/",'/dialog/'],
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "配置", link: "/config/" },
      { text: "示例", link: "https://www.baidu.com" },
    ],
  },
};
