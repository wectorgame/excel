import { ExcelComponent } from "@core/ExcelComponent";
import { $ } from "../../core/dom";
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
   */
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      /* const $parent = $resizer.parentNode // bad */
      /*  const $parent = $resizer.closest('.column') // still bad */
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      const type = $resizer.data.resize;
      const sideProp = type === "col" ? "bottom" : "right";
      let value;
      $resizer.css({ opacity: 1, [sideProp]: "-5000px" });
      // моя реализация
      /*  const rowData = $resizer.closest(".row-data").$el;
      const currentCol = Array.from(rowData.childNodes).indexOf($parent.$el);
      const cells = Array.from(
          document.querySelectorAll(`[data-type="cells"]`)
      );
      const currentCells = cells
          .map((elem, index) =>Array.from(cells[index].childNodes).filter(
              (elem) => elem.nodeName != "#text"))
          .map((elem) =>elem.filter((filterElem, index) => index==currentCol))
          .map((elem)=> elem[0]); */
      const cellsWidth = this.$root.findAll(`[data-col="${$parent.data.col}"]`);
      document.onmousemove = (e) => {
        if (type === "row") {
          const delta = e.pageY - coords.bottom;
          value = coords.height + delta;
          $resizer.css({ bottom: -delta + "px" });
        } else {
          const delta = e.pageX - coords.right;
          value = coords.width + delta;
          $resizer.css({ right: -delta + "px" });
        }
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        if (type === "row") {
          $parent.css({ height: value + "px" });
        } else {
          $parent.css({ width: value + "px" });
          cellsWidth.forEach((el) => {
            el.style.width = value + "px";
          });
        }
        $resizer.css({ opacity: 0, bottom: 0, right: 0 });
      };
    }
  }
}
