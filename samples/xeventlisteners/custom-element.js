import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  
  static get properties(){
    return {
      adjective: String
    };
  }
  constructor(){
    super();
    this.adjective="awesome";
  }
  _render({adjective}) {
    return html`
      <button 
        on-click="${(event) => {console.log(event)}}">
        Log a mouseClick event to the console.
      </button>

      <button 
        value="i <3 lit-element" 
        on-click="${(event) => {this.myFunc(event)}}">
        Do an alert.
      </button>
      
      <button 
        value="World" 
        on-click="${(event) => {this.inform(event.target.value, adjective, 11)}}">
        Inform me of something important.
      </button>
    `;
  }
  myFunc(event) {
    alert(event.target.value);
  }
  inform(entity, adjective, level) {
    var information = 
      'Hello, ' + entity + '!\n' +
      'This element is ' + adjective +
      ' at an approximate level of ' + level + '.';
    console.log(information);
    alert(information);
  }
}

customElements.define('custom-element', CustomElement);
