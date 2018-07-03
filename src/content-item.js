import { LitElement, html } from '@polymer/lit-element';
import {styleblock, hostdisplay, nomargins} from './app-styles.js';

class ContentItem extends LitElement{
  static get properties(){
    return {
      hidden: Boolean
    }
  }
  _render(){
    return html`
      ${styleblock([hostdisplay, nomargins])}
      <slot></slot>
    `;
  }
}

customElements.define('content-item', ContentItem);
