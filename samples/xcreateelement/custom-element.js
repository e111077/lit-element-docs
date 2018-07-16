// Import the lit-element base class and the html helper function.
import { LitElement, html } from '@polymer/lit-element';

// Extend the LitElement base class to create a class for your element.
class CustomElement extends LitElement {  

  // Define your element's properties.
  static get properties(){
    return {
      name: String
    };
  }

  // Define your element's HTML template.
  _render({name}){
    // Use the html helper function to return a lit-html TemplateResult.
    return html`
      <h1>Hello ${name}!</h1>
    `;
  }
}

// Register your element with the browser.
customElements.define('custom-element', CustomElement);
