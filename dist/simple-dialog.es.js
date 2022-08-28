import { computed as d, watch as p, unref as a, openBlock as _, createElementBlock as u, createElementVNode as t, normalizeStyle as v, renderSlot as r, createTextVNode as f, toDisplayString as m, createCommentVNode as h } from "vue";
const y = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [i, c] of s)
    e[i] = c;
  return e;
}, b = { class: "wrap" }, g = { class: "head" }, w = { class: "title" }, k = { class: "content" }, x = {
  __name: "HelloWorld",
  props: {
    width: {
      type: Number,
      default: 330
    },
    title: {
      type: String,
      default: "\u5C5E\u6027\u6807\u9898"
    },
    visible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "open", "close"],
  setup(o, { emit: s }) {
    const e = o, i = d(() => e.visible), c = d(() => typeof e.width == "number" ? e.width + "px" : e.width), n = () => {
      s("update:visible", !1), s("close");
    };
    return p(() => e.visible, (l) => {
      l && s("open");
    }), (l, N) => a(i) ? (_(), u("div", {
      key: 0,
      class: "modal",
      onClick: n
    }, [
      t("div", b, [
        t("div", {
          class: "dialog",
          style: v({ width: a(c) })
        }, [
          t("div", g, [
            t("div", w, [
              r(l.$slots, "title", {}, () => [
                f(m(o.title), 1)
              ], !0)
            ]),
            t("div", {
              class: "closeicon",
              onClick: n
            }, "x")
          ]),
          t("div", k, [
            r(l.$slots, "default", {}, void 0, !0)
          ])
        ], 4)
      ])
    ])) : h("", !0);
  }
}, S = /* @__PURE__ */ y(x, [["__scopeId", "data-v-e1849cda"]]), B = {
  SimpleDialog: S
};
export {
  B as simpledialog
};
