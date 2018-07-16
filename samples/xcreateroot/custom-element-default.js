import { LitElement, html } from '@polymer/lit-element';

class CustomElementDefault extends LitElement {  
  _render(){
    return html`
      <h1>hi</h1>
    `;
  }
}

customElements.define('custom-element-default', CustomElementDefault);
