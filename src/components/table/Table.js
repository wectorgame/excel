import { ExcelComponent } from "@core/ExcelComponent";
import { $ } from "../../core/dom";
import { shouldResize } from "./table.functions";
import { resizeHandler } from "./table.resizer";
import { createTable } from "./table.template";
/**
 *
 */
export class Table extends ExcelComponent {
  static className = "excel__table";
  /**
   *
   * @param {*} $root
   */
  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ["mousedown"],
    });
  }
  /**
   * @return {@}
   */
  toHTML() {
    return createTable(20);
  }
  /**
   * resize таблицы
   * @param {*} event
   * @return {@}
   */
  onMousedown(event) {
    if (shouldResize(event)) {
      return resizeHandler(event, $, this.$root);
    }
  }
}
