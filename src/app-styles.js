/**
 * Export styles for app shell and UI components.
 * 
 * All exports are lit-html TemplateResults.
 * 
 * - hostDisplay: Basic custom element display rules.
 * - appShellStyles: Encapsulated styles for app shell.
 * - navBarStyles: Encapsulated styles for the nav-bar element.
 * - prismCss: Prism.js styles for code highlighting. By Lea Verou.
 * - readmeContainerStyles: Encapsulated styles for readme-container element.
 * - stackblitzContainerStyles: Encapsulated styles for stackblitz-container.
 */

// Import lit-html html function to create TemplateResults.
import { html } from 'lit-html/lib/lit-extended';

/**
 * CSS rules for basic custom element display.
 * @constant {TemplateResult} hostDisplay
 */
export const hostDisplay = html`
  :host{
    display: block;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  :host([hidden]) {
    display: none;
  }
`;

/**
 * Encapsulated styles for the app-shell element.
 * @constant {TemplateResult} appShellStyles
 */
export const appShellStyles = html`
  ${hostDisplay}
  :host {
    font-family: var(--appFont);
    font-size: var(--fontSize);
    font-weight: var(--fontWeight);
  }
  #header {
    box-sizing: border-box;
    width: 100%;
    background-color: var(--primary);
    color: var(--onPrimary);
    font-size: var(--fontSizeBig);
    font-weight: var(--fontWeightHeavy);
    line-height: var(--gutter3);
    padding: var(--gutter);
    max-height: var(--gutter5);
  }
  #nav {
    box-sizing: border-box;
    width: 100%;
    background-color: var(--secondaryLight);
    margin-top: var(--gutter);
    padding-bottom: var(--gutter);
  }
  #main {    
    box-sizing: border-box;
    padding: var(--gutter);
    min-height: 300px;
  }
  #categoryheading {
    font-size: var(--fontSizeBiggest);
    font-weight: var(--fontWeightHeaviest);
    padding-top: var(--gutter2);
  }
  #projectheading {
    font-size: var(--fontSize);
    font-weight: var(--fontWeightHeaviest);
    padding-top: var(--gutter);
  }
  #breadcrumbs {
    font-size: var(--fontSizeSmall);
    font-weight: var(--fontWeightLight);
  }
  .toggle {
    box-sizing: border-box;
    font-size: var(--fontSize);
    font-weight: var(--fontWeight);
    width: 100%;
    text-align: left;
    line-height: var(--gutter3);
    border: none;
    outline: none;      
    padding: var(--gutter);
    margin-top: var(--gutter);
  }
  .expanded {
    background-color: var(--secondaryDark);
    color: var(--onSecondaryDark);
  }
  .collapsed {
    background-color: var(--secondary);
    color: var(--onSecondary);
    margin-bottom: var(--gutter);
  }
  .toggle:hover {
    background-color: var(--secondaryDark);
    color: var(--onSecondary);
  }
  .error {
    background-color: var(--error);
    color: var(--onError);
  }
  .toggle:disabled {
    background-color: var(--secondary);
    color: var(--onSecondary);
    opacity: 0.55;
  }
  .spacer {
    font-family: Roboto Mono, monospace;
  }
  #footer {
    box-sizing: border-box;
    width: 100%;
    margin-top: var(--gutter);
    padding: var(--gutter);
    font-size: var(--fontSizeSmallest);
  }

  @media(min-width: 900px){
    :host {
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
    }
    #header{
      order: 1;
      flex: 0 100%;
    }
    #main{
      order: 3;
      flex: 1 0px;
    }
    #nav{
      margin-top: 0px;
      order: 2;
      flex: 0 30%;
      max-width: 25%;
    }   
    #footer{
      order: 4;
      flex: 0 100%;
    }
  }
`;

/**
 * Encapsulated styles for the nav-bar element.
 * @constant {TemplateResult} navBarStyles
 */
export const navBarStyles = html`
  ${hostDisplay}
  :host {
    height: 100%;
  }
  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
  li {
    padding: var(--gutter);
  }
  .navitem {
    padding-top: var(--gutter);
    padding-left: var(--gutter3);
  }
  .navcategory {
    padding-bottom: var(--gutter);
  }
  .selected {
    color: var(--primaryLight);
    font-weight: var(--fontWeightHeaviest);
  }
  .navitem:hover {
    color: var(--primaryLight);
  }
  .spacer {
    font-family: Roboto Mono, monospace;
    font-size: var(--fontSizeSmallest)
  }
`;

/**
 * Styles for code highlighting.
 * @constant {TemplateResult} prismCss
 */

/** PrismJS 1.15.0 */
/** https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */
/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/
export const prismCss = html`
  code[class*="language-"],
  pre[class*="language-"] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: Roboto Mono, Consolas, monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0em 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #efefef;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, .5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #DD4A68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

/**
 * Encapsulated styles for the readme-container element.
 * @constant {TemplateResult} readmeContainerStyles
 */
export const readmeContainerStyles = html`
  ${hostDisplay}
  ${prismCss}
  :host {
    border: none;
    width: 100%;
  }
  h2 {
    font-size: var(--fontSize);
    font-weight: var(--fontWeightHeaviest);
    border-bottom: 1px solid var(--secondaryDark);
    margin: 0;
    padding-top: var(--gutter4);
    padding-bottom: var(--gutterHalf);
  }
  h3 {
    font-size: var(--fontSize);
    font-weight: var(--fontWeightHeavy);
    margin: 0;
  }
  pre {
    font-size: var(--fontSizeSmall);
    font-family: var(--appFontMono);
    background-color: var(--secondaryLight);
  }
  ul {
    margin: 0;
    margin-top: var(--gutter);
  }
  p, ul > li {
    line-height: var(--gutter3);
  }
  code {
    font-family: var(--appFontMono);
    background-color: var(--secondaryLight);
  }
  a {
    color: var(--primary);
  }
  a:visited {
    color: var(--primaryLight);
  }
`;

/**
 * Encapsulated styles for the stackblitz-container element.
 * @constant {TemplateResult} stackblitzContainerStyles
 */
export const stackblitzContainerStyles = html`
  ${hostDisplay}
  iframe {
    border: none;
    width: 100%;
    background-color: var(--secondaryDark);
  }
`;
