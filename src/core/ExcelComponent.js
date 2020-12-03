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
  constructor($root, options={}) {
    super($root, options.listeners);
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
}
