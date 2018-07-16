import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  
  static get properties(){
    return {
      stuff: String
    };
  }
  constructor(){
    super();
    this.addEventListener('load', (e) => {console.log(e)});
    this.stuff='Hi';
  }
  _render({stuff}){
    return html`
      <p>${stuff}</p>
    `;
  }
  _firstRendered(){
    console.log('_firstRendered');
  }
}

customElements.define('custom-element', CustomElement);
