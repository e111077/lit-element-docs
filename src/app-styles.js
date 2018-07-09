import { html } from 'lit-html/lib/lit-extended';

/**
 * App theme part 1: Color definitions. 
 * Names and uses of colors are based on the {@link https://material.io/design/color/the-color-system.html#color-theme-creation Material Design color system }.
 * @constant {TemplateResult} colorProps
 */
export const colorProps = html`
    :host {
      --primary: #512da8;
      --primaryLight: #8559da;
      --primaryDark: #130078;
      
      --onPrimary: #FFFFFF;
      --onPrimaryLight: #FFFFFF;
      --onPrimaryDark: #FFFFFF;

      --secondary: #353535;
      --secondaryLight: #5d5d5d;
      --secondaryDark: #0f0f0f;

      --onSecondary: #FFFFFF;
      --onSecondaryLight: #FFFFFF;
      --onSecondaryDark: #efefef;
      
      --background: #FFFFFF;
      --surface: #efefef;
      --error: #b00020;

      --onBackground: #353535;
      --onSurface: #000000;
      --onError: #FFFFFF;      
    }
  `;

/**
 * App theme part 2: Typography. 
 * @constant {TemplateResult} typographyProps
 */
export const typographyProps = html`
  :host {
    --appFont: Roboto, sans-serif;
    
    --fontSize: 16px;
    --fontSizeBig: 18px;
    --fontSizeBiggest: 20px;

    --fontWeight: 350;
    --fontWeightHeavy: 400;
    --fontWeightHeaviest: 450;
  }
`;

/**
 * App theme part 3: Layout and spacing. 
 * @constant {TemplateResult} layoutProps
 */
export const layoutProps = html`
  :host {
    --gutter: 8px; 
    /*  
      --gutter2: 16px;
      --gutter3: 24px;
      --gutter4: 32px;
      --gutter5: 40px; 
    */
    --gutter6: 48px; 
  }

  /* 
  @media(min-width: 600px){
    :host {
      display: flex;
      flex-flow: row wrap;
    }
    #header{

    }
    #nav{

    }
    #main{

    }
    #footer{

    }
  }
  */
`;

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
  ${colorProps}
  ${typographyProps}
  ${layoutProps}
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
    padding: var(--gutter);
  }
  #nav {
    box-sizing: border-box;
    width: 100%;
    background-color: var(--surface);
    margin-top: var(--gutter);
    padding-bottom: var(--gutter);
  }
  #main {    
    box-sizing: border-box;
    padding: var(--gutter);
    min-height: 300px;
  }
    #categoryheading {
      font-size: var(--fontSizeBig);
      font-weight: var(--fontWeightHeaviest);
    }
    #projectheading {
      font-size: var(--fontSize);
      font-weight: var(--fontWeightHeaviest);
      padding-top: var(--gutter);
    }
    .toggle {
      box-sizing: border-box;
      font-size: var(--fontSize);
      font-weight: var(--fontWeight);
      width: 100%;
      text-align: left;
      border: none;
      outline: none;      
      padding: var(--gutter);
      margin-top: var(--gutter);
    }
    .expanded {
      background-color: var(--secondary);
      color: var(--onSecondary);
    }
    .collapsed {
      background-color: var(--secondaryLight);
      color: var(--onSecondaryLight);
      margin-bottom: var(--gutter);
    }
    .toggle:hover {
      background-color: var(--secondary);
      color: var(--onSecondary);
    }
    .error {
      background-color: var(--error);
      color: var(--onError);
    }
    .toggle:disabled {
      background-color: var(--secondaryLight);
      color: var(--onSecondaryLight);
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
  }
`;

/**
 * Encapsulated styles for the nav-bar element.
 * @constant {TemplateResult} navBarStyles
 */
export const navBarStyles = html`
  ${hostDisplay}
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
    padding-left: var(--gutter6);
  }
  .navcategory {
    padding: var(--gutter);
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
  }
`;

/**
 * Encapsulated styles for the readme-container element.
 * @constant {TemplateResult} readmeContainerStyles
 */
export const readmeContainerStyles = html`
  ${hostDisplay}
  iframe {
    border: none;
    width: 100%;
    
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
    background-color: var(--secondary);
  }
`;
