// Import lit-element base class and function to create TemplateResults.
import { LitElement, html } from '@polymer/lit-element';
// Import encapsulated styles for the readme-container.
import { readmeContainerStyles } from './app-styles.js';

/**
 * readme-container element displays an iframe with the README file of the 
 * active project. Currently the iframe is populated by an HTML document, 
 * which is converted from the project's README.md during the build process.
 */
class ReadmeContainer extends LitElement{
  static get properties(){
    return {
      // Active project, supplied by the app shell.
      projectId: String
    };
  }

  /**
   * Render an iframe whose source is README.html in the folder containing 
   * the active project.
   * 
   * Work out the height of the iframe based on the height of the viewport.
   * Factor in the space taken by other UI components on the page.
   */
  _render({projectId}){
    var h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0))-176;
    return html`
      <style>
        ${readmeContainerStyles}
      </style>
      <iframe height=${h} id="readme" src="src/samples/${projectId}/README.html"></iframe>
    `;
  }
}

customElements.define('readme-container', ReadmeContainer);
