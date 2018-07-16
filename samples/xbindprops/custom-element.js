import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  
  // Define your element's properties.
  static get properties(){
    return {
      url: String,
      altText: String,
      imgWidth: Number
    };
  }
  // Initialize property values in the constructor.
  constructor(){
    // Always call superconstructor first.
    super();

    this.url="https://thecatapi.com/api/images/get?id=eb9";
    this.altText="A cat poking its head out from under some bedding.";
    this.imgWidth=500;
  }
  // Define your element's HTML template.
  _render({url, altText, imgWidth}){
    return html`
      <img src="${url}" alt="${altText}" width="${imgWidth}"></img>
    `;
  }
}

customElements.define('custom-element', CustomElement);
