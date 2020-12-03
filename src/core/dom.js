/**
 *
 */
export class Dom {
  /**
   *
   * @param {*} selector
   */
  constructor(selector) {
    // #app
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }
  /**
   * @return {@}
   * @param {*} html
   */
  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }
  /**
   * @return {@}
   */
  clear() {
    this.html("");
    return this;
  }
  /**
   *
   * @param {@} node
   * @return {@}
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
}
$("div").html("<h1>test</h1>").clear();
/**
 * event.target
 * @param {*} selector
 * @return {@}
 */
export function $(selector) {
  return new Dom(selector);
}
$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
