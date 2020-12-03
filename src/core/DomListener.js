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
    console.log(this.listeners);
  }
  /**
   * Delete Listener
   */
  removeDomListeners() {}
}
