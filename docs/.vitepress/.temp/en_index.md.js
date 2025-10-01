import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"BPW Robot","text":"Clean and Elegant Admin Template","tagline":"Focus, Free, Open Source, Maintained","image":{"src":"/bot.svg","alt":"BPW Robot"},"actions":[{"theme":"brand","text":"Get Started","link":"/en/api-examples"},{"theme":"alt","text":"Online Preview","target":"_blank","link":"your-link"},{"theme":"alt","text":"View on Gitee","target":"_blank","link":"your-link"}]},"features":[{"icon":"📒","title":"Fully Commented Code","details":"Vue3, Vite5, TypeScript and Arco-Design, all code methods are commented for easy understanding and learning."},{"icon":"❄","title":"Clear Project Structure","details":"Using pnpm, the structure is clear and elegant, easy to maintain. Code is highly standardized."},{"icon":"🎉","title":"Community Support","details":"Join the group to discuss and answer various development questions. Group 1 is under construction."}]},"headers":[],"relativePath":"en/index.md","filePath":"en/index.md"}');
const _sfc_main = { name: "en/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
