import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {
  _render({name}){
    return html`
      <h1>Hello ${name}.</h1>
    `;
  }
}

customElements.define('custom-element', CustomElement);
