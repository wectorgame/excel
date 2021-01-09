import { ExcelComponent } from "@core/ExcelComponent";
<<<<<<< Updated upstream
import { $ } from "../../core/dom";
import { shouldResize } from "./table.functions";
import { resizeHandler } from "./table.resizer";
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      name: "Table",
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
   * resize таблицы
   * @param {*} event
   * @return {@}
   */
  onMousedown(event) {
    if (shouldResize(event)) {
      return resizeHandler(event, $, this.$root);
=======
   *
   */
  onMousedown() {
    if (event.target.dataset.resize) {
      console.log("Start resizing", event.target.dataset.resize);
>>>>>>> Stashed changes
    }
  }
}
