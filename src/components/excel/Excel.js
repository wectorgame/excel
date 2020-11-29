/**
 *
 */ export class Excel {
/**
      *
      * @param {*} selector
      * @param {*} options
      */
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
}
