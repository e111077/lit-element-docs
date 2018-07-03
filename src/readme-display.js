import { LitElement, html } from '@polymer/lit-element';
import { styleblock, readmedisplay } from './app-styles.js';
import { githubmdstyles } from './githubmdstyles';

class ReadmeDisplay extends LitElement{
  static get properties(){
    return {
      hidden: Boolean,
      projectid: String
    }
  }
  _render({projectid}){
    return html`
      ${styleblock([readmedisplay])}
      
      <iframe height="600px" width="100%" id="readme" src="src/samples/${projectid}/README.html">
      </iframe>
      

    `;
  }
  getContentDocStyles(){
    return html`
      ${styleblock([githubmdstyles, readmecontentdocdisplay])}
    `;
  }
  
}

customElements.define('readme-display', ReadmeDisplay);
