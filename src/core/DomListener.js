import {capitalize} from "@core/utils";
/**
 *
 */
export class DomListener {
  /**
   *
   * @param {*} $root
   * @param {*} listeners
   */
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("No $root provided for DomListener");
    }
    this.listeners = listeners;
    this.$root = $root;
  }
  /**
   * add Listener
   */
  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      // Тоже самое что и AddEventListener
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(
            `Method ${method} is not complimated in ${name} component`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }
  /**
   * Delete Listener
   */
  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
/**
 * добавление on eventName
 * @param {*} eventName
 * @return {string}
 */
function getMethodName(eventName) {
  return "on" + capitalize(eventName);
}
