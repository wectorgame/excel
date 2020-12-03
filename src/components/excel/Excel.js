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
    this.$el = $(selector);
    this.components = options.components || [];
  }
  /**
   * @return {*} root
   */
  getRoot() {
    const $root = $.create("div", "excel");
    this.components=this.components.map((Component) => {
      const $el = $.create("div", Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }
  /**
   *
   */
  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
