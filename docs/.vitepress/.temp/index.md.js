import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"BCW-BOT","text":"全网白菜网项目机器人","tagline":"专注、免费、通知、福利、","image":{"src":"/bot.svg","alt":"SnowAdmin"},"actions":[{"theme":"brand","text":"开始使用","link":"/api-examples"},{"theme":"alt","text":"机器人指南","target":"_blank","link":"你的链接"},{"theme":"alt","text":"Telegram群组","target":"_blank","link":"你的链接"}]},"features":[{"icon":"🔎","title":"项目搜索","details":"汇集全网优质白菜网站，智能机器人助您轻松寻找合适项目。"},{"icon":"🔔","title":"更新订阅","details":"订阅通知，及时了解项目首发动态，避免错过易黄项目更新。"},{"icon":"🔥","title":"今日热搜","details":"收集常用的高频搜索关键词，密切跟踪项目名称在当下的热度表现。"},{"icon":"🆓","title":"永久免费","details":"机器人免费开放使用，供大家娱乐体验。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
