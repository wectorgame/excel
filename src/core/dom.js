/**
 *
 */
export class Dom {
  /**
   * назначение элемента
   * @param {*} selector
   */
  constructor(selector) {
    // #app
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }
  /**
   * заполнение html
   * @return {@}
   * @param {*} html
   */
  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }
  /**
   * @return {@}
   */
  clear() {
    this.html("");
    return this;
  }
  /**
   * добавление события
   * @param {*} eventType
   * @param {*} callback
   */
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }
  /**
   * удаление события
   * @param {*} eventType
   * @param {*} callback
   */
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }
  /**
   * добавляет элементы после последнего потомка
   * @param {@} node
   * @return {@}
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
  /**
   * @return {*}
   */
  get data() {
    return this.$el.dataset;
  }
  /**
   * ближайщий элемент от текущего через дом
   * @param {*} selector
   * @return {*}
   */
  closest(selector) {
    return $(this.$el.closest(selector));
  }
  /**
   * возвращаем координаты
   * @return {*}
   */
  getCoords() {
    return this.$el.getBoundingClientRect();
  }
  /**
   * @return {*}
   * @param {*} selector
   */
  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }
  /**
   * передаем объект свойст css
   * @param {*} styles
   */
  css(styles = {}) {
    const keys = Object.keys(styles);
    keys.forEach((key) => {
      this.$el.style[key] = styles[key];
    });
  }
}

/**
 * получение нужного нам элемента через дом
 * @param {*} selector
 * @return {@}
 */
export function $(selector) {
  return new Dom(selector);
}
$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
