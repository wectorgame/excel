const CODES = {
  A: 65,
  Z: 90,
};
/**
 * @return {string} создание клеток
 */
function toCell() {
  return `
    <div class="cell" contenteditable=""></div>
    `;
}
/**
 * @param {*} col
 * @return {string} создание колонок
 */
function toColumn(col) {
  return `<div class=column>
    ${col}</div>`;
}
/**
 * @param {*} content
 * @param {*} index
 * @return {string} создание рядов
 */
function createRow(content, index) {
  return `<div class="row">
    <div class="row-info">${index ? index: ''}</div>
    <div class="row-data">${content}</div>
          </div>`;
}
/**
 *
 * @param {*} _
 * @param {*} index
 * @return {*}
 */
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
/**
 * @param {*} rowsCount
 * @return {@} вернет дианмически созданую таблицу
 */
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill("")
      .map(toChar)
      .map(toColumn)
      .join('');
  const cells = new Array(colsCount)
      .fill("")
      .map(toCell)
      .join('');
  /* const cols = [];
  for (let i = 0; i < colsCount; i++) {
    cols.push(createCol(String.fromCharCode(CODES.A + i)));
  } */
  rows.push(createRow(null, cols));
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i+1));
  }
  return rows.join("");
}
