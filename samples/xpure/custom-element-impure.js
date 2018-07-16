import { LitElement, html } from "@polymer/lit-element/lit-element.js";

class CustomElement extends LitElement {
  static get properties() {
    return {
      myProp: String
    };
  }

  constructor() {
    super();
    this.myProp='value of myProp';
  }

  _render({myProp}) {
    var randy;
    window.addEventListener('click', (e) => {
      randy = Math.floor(Math.random()*100);
      document.getElementById('mydiv').innerHTML=
        'Side effect! Random: ' +
        randy;
      }); 
    return html`
      <h4>custom-element</h4>
      <ul>
        <li>myProp is: ${myProp}</li>
        <li>${window.otherStuff}</li>
      </ul>
    `;
  }
}

customElements.define('custom-element', CustomElement);