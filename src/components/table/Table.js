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
      let valueHeight;
      let valueWidth;
      $resizer.css({ opacity: 1, bottom: "-5000px" });
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
        const delta = e.pageX - coords.right;
        const gamma = e.pageY - coords.bottom;
        /* currentCells.forEach((elem)=>
          elem.style.width = coords.width + delta + "px"); */
        valueWidth = coords.width + delta;
        valueHeight = coords.height + gamma;
        $resizer.css({ right: -delta + "px" });
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        if ($resizer.data.resize == "row") {
          $parent.css({ height: valueHeight + "px" });
        }
        $parent.css({ width: valueWidth + "px" });
        cellsWidth.forEach((el) => {
          el.style.width = valueWidth + "px";
        });
        $resizer.css({ opacity: 0, bottom: 0, right: 0 });
      };
    }
  }
}
