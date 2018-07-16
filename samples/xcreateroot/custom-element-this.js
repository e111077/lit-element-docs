import { LitElement, html } from '@polymer/lit-element';

class CustomElementThis extends LitElement {  
  _createRoot(){
    return this;
  }
  _render(){
    return html`
      <h1>hi</h1>
    `;
  }
}

customElements.define('custom-element-this', CustomElementThis);
