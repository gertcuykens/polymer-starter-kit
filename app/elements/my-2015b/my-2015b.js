'use strict';

class My2015b extends HTMLElement {
  createdCallback() {
    this.createShadowRoot().innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <div>Hello 2015b!</div>
    `;
    console.log('Hello 2015b!');
  }
}

document.registerElement('my-2015b', My2015b);
