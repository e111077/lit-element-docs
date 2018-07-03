import { LitElement, html } from '@polymer/lit-element';
import {styleblock, myheader } from './app-styles.js';

export class MyHeader extends LitElement {

  static get properties() {
    return {
      headingtext: String
    };
  }

  constructor(){
    super();
    this.headingtext = 'Hello bacon this is bacon a heading. Bacon.'
  }

  _myHeader(headingtext){
    return html`
      &nbsp;&nbsp;&nbsp;${headingtext} <slot></slot>
    `;
    /* <span id="menu">&#9776;</span> ${headingtext} <slot></slot> */

  }
  
  _render({ headingtext }) {
    return html`
      ${styleblock([myheader])}
      ${this._myHeader(headingtext)}
    `;
  }
}

customElements.define('my-header', MyHeader);
