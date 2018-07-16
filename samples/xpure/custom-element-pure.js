import { LitElement, html } from "@polymer/lit-element/lit-element.js";
import {otherStuff} from './otherStuffToImport.js';

class CustomElementPure extends LitElement {
  static get properties() {
    return {
      myProp: String,
      otherStuff: String
    };
  }

  constructor() {
    super();
    this.myProp='value of myProp';
    this.otherStuff=otherStuff;
  }

  getRandom(e){
    var randy = Math.floor(Math.random()*100);
    this.dispatchEvent(new CustomEvent('receive-random', { detail: {
      'requestInfo': e.detail.requestInfo,
      'random': randy
    } }));
  }

  _render({myProp, otherStuff}) {
    return html`
      <h4>custom-element</h4>
      <button on-click="${(e) => this.getRandom(e.detail.requestInfo)}" id='do'</button>
      <ul>
        <li>myProp is: ${myProp}</li>
        <li>otherStuff is: ${otherStuff}</li>
      </ul>
    `;
  }
}

customElements.define('custom-element', CustomElement);