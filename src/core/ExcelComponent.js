import {DomListener} from "@core/DomListener";
/**
 *
 */
export class ExcelComponent extends DomListener {
  /**
   *
   * @param {*} $root
   * @param {*} options
   */
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
  }
  /**
   * @return {string}
   */
  toHTML() {
    return "";
  }
  /**
   *
   */
  init() {
    this.initDomListeners();
  }
  /**
   *
   */
  destroy() {
    this.removeDomListeners();
  }
}
