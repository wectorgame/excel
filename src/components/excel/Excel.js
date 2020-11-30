import {$} from "@core/dom";
/**
 *
 */ export class Excel {
  /**
   *
   * @param {*} selector
   * @param {*} options
   */
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
  /**
   * @return {*} root
   */
  getRoot() {
    const $root = $.create("div", "excel");
    this.components.forEach((Component) => {
      /*
      const $el = document.createElement("div");
      $el.classList.add(Component.className); */
      const $el = $.create("div", Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });
    return $root;
  }
  /**
   *
   */
  render() {
    this.$el.append(this.getRoot());
  }
}