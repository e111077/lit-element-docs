import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement{
  static get properties(){
    return {
      myBool: Boolean
    }
  }
  constructor(){
    super();
    this.myBool=false;
  }
  _render({myBool}){
    return html`
      <p>Template stuff here</p>
      ${myBool?html`<p>Display this only when myBool is true</p>`:''}
      <p>More template stuff here</p>
      <button on-click="${() => {myBool=!myBool}}">Toggle myBool</button>
    `;
  }
}

customElements.define('custom-element', CustomElement);
