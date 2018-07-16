import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  

  // Define your element's properties.
  static get properties(){
    return {
      adjective: String,
      level: Number
    };
  }

  // Initialize properties in the constructor.
  constructor(){
    // Always call superconstructor first.
    super();
    this.adjective="awesome";
    this.level=11;
  }
  
  // Define your element's HTML template.
  _render({adjective, level}){
    return html`
      <p>This element is ${adjective} at an estimated level of ${level}.</p>
    `;
  }
}

customElements.define('custom-element', CustomElement);
