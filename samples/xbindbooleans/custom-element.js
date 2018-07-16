import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  

  static get properties(){
    return {
      hideTextarea: Boolean
    };
  }
  constructor(){
    super();
    this.hideTextarea = false;
  }

  _render({hideTextarea}){
    return html`
      <p>I have a textarea. It might be hidden.</p>
      <textarea hidden?=${hideTextarea}>Nope, not hidden right now.</textarea>
    `;
  }
}

customElements.define('custom-element', CustomElement);
