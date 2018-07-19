// Import lit-element base class and function to create TemplateResults.
import { LitElement, html } from '@polymer/lit-element';
// Import encapsulated styles for the readme-container.
import { readmeContainerStyles } from './app-styles.js';
// Import lit-html in order to use the TemplateResult class.
import * as Lit from 'lit-html';
// Import Prism.js library in order to perform code highlighting.
import 'prismjs';

/**
 * readme-container element displays the README file of the active project.
 * Currently it uses an iframe populated with an HTML document,
 * which is generated from the project's README.md during the build process.
 */
export class ReadmeContainer extends LitElement{
  static get properties(){
    return {
      // HTML of the readme to display, supplied by app shell.
      readme: String,
    };
  }

  /**
   * Highlight code blocks in shadow DOM using prismjs API.
   */
  async highlightCodeBlocks(){
    // add tagged template literal highlighting if not already defined
    if (!Prism.languages.javascript['html-tagged-template-string']) {
      const tInterp = Prism.languages.javascript['template-string'].inside.interpolation;
      const interpToken = {
        interpolation: {
          pattern: tInterp.pattern,
          inside: tInterp.inside
        }
      };

      // insert interpolation ${} highlighting in html before tags in all HTML
      Prism.languages.insertBefore('html', 'tag', interpToken);

      // insert interpolation ${} highlihgting inside html tags' before attr values
      Prism.languages.insertBefore(
          'inside', 'attr-value', interpToken, Prism.languages.html.tag);

      const htmlTokens = Prism.languages.html;
      // insert tagged-template highlighting
      Prism.languages.insertBefore('javascript','template-string', {
        'html-tagged-template-string': {
          // this is just the pattern "html" prepended to the default pattern
          // for template literals found in
          // Prism.languages.javascript['template-string'].pattern
          pattern: /html`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
          alias: 'language-html',
          inside: htmlTokens
        }
      });
    }
    Prism.highlightAllUnder(this.shadowRoot);
  }

  /**
   * Apply encapsulated styles for the readme-container element.
   * Use lit-html to convert readme string to a TemplateResult.
   */
  _render({readme}){
    return html`
      <style>
        ${readmeContainerStyles}
      </style>
      ${new Lit.TemplateResult([readme], '', 'html')}
    `;
  }

  /**
   * After each render, call a function to highlight code blocks.
   */
  _didRender(){
    this.highlightCodeBlocks();
  }
}

customElements.define('readme-container', ReadmeContainer);
