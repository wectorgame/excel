/**
 * возвращает результат проверки
 * @param {*} event передача события
 */
export function shouldResize(event) {
  return event.target.dataset.resize;
}
