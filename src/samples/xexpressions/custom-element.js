import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  
  _render(){
    return html`
      <h1>TEMPLATE</h1>
    `;
  }
}

customElements.define('custom-element', CustomElement);
