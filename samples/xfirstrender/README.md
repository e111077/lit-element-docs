
To perform one-time actions after your element has first rendered, implement lit-element's `_firstRendered` callback.

```js
import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  
  static get properties(){
    return {
      stuff: String
    };
  }
  constructor(){
    super();
    this.stuff='Hi';
  }
  _render({stuff}){
    return html`
      <p>${stuff}</p>
    `;
  }
  _firstRendered(){
    console.log(this.stuff);
  }
}

customElements.define('custom-element', CustomElement);

```
