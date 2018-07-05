import { LitElement, html } from '@polymer/lit-element';

class ReadmeContainer extends LitElement{
  static get properties(){
    return {
      content: Object,
      state: Object,
      projectid: String
    };
  }
  _render({content, state, projectid}){
    return html`
      <p>readme-container ${projectid}</p>
      <iframe src="src/samples/${projectid}/README.html"></iframe>
    `;
  }
}


customElements.define('readme-container', ReadmeContainer);