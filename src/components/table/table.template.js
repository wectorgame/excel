const CODES = {
  A: 65,
  Z: 90,
};
/**
 * @return {string} создание клеток
 */
function toCell(_, col) {
  return `
    <div class="cell" contenteditable="" data-col="${col}"></div>
    `;
}
/**
 * @param {*} col
 * @return {string} создание колонок
 */
<<<<<<< Updated upstream
function toColumn(col, index) {
  return `<div class="column unselected" 
  data-type="resizable" data-col="${index}">
=======
function toColumn(col) {
  return `<div class=column>
>>>>>>> Stashed changes
    ${col}
    <div class="col-resize" data-resize="col"></div>
    </div>`;
}
/**
 * @param {*} content
 * @param {*} index
 * @return {string} создание рядов
 */
function createRow(content, index) {
<<<<<<< Updated upstream
  const resize = index ?
'<div class="row-resize" data-resize="row"></div>' : '';
  const cell = index ? `data-type="cells"` : '';
  return `
    <div class="row" data-type="resizable">
      <div class="row-info unselected">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data" ${cell}>${content}</div>
    </div>
  `;
=======
  const resize = index ? '<div class="row-resize" data-resize="row"></div>': '';
  return `<div class="row">
    <div class="row-info">
    ${index ? index: ''}
    ${resize}
    </div>
    <div class="row-data">${content}</div>
          </div>`;
>>>>>>> Stashed changes
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
  rows.push(createRow(cols, null));
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i+1));
  }
  return rows.join("");
}
