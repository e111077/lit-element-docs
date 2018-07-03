import { html } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import { githubmdstyles } from './githubmdstyles.js';

/* Assemble the specified items into a style block */
export function styleblock(styleitems){
  return html`
    <style>
      ${repeat(styleitems, (i) => i, (i, index) => html`${i}`)}
    </style>
  `
}

/* Special values that needed to be hardcoded because reasons */
export const special = { 
  headerpadding: 20,
  headerfontsize: 20,
  headerlineheight: 1,
  headerfontweight: 100,

  h1fontsize: 20,
  h2fontsize: 18,
  h3fontsize: 16,
  h1fontweight: 400,
  h2fontweight: 300,
  h3fontweight: 100,

  h1padding: 16,

  collapsiblepadding: 16,
  
  navpadding: 0,
  navcategorypadding: 16,
  navcategorylineheight: 1,
  navcategoryfontsize: 16, 
  
  navitemlistpadding: 8,
  
  navitempadding: 8,
  navitemlineheight: 1.25,
  navitemfontsize: 14,

  footerpadding: 12,
  footerfontsize: 12,
  footerlineheight: 1,
  
  gutterwidth: 8
}

/* Conveniences for commonly used styles */
export const nomargins = html`
  :host {
    margin: 0px;
  }
`;

export const nopadding = html`
  :host {
    padding: 0px;
  }
`;

export const borderbox = html`
  :host {
    box-sizing: border-box;
  }
`;

export const hostdisplay = html`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }
`;

/* App theme part 1: Color */
export const colorprops = html`
  :host {
    --primary: #512da8;
    --onprimary: #FFFFFF;
    --primarylight: #8559da;
    --onprimarylight: #FFFFFF;
    --primarydark: #140078;
    --onprimarydark: #FFFFFF;

    --secondary: #353535;
    --onsecondary: #FFFFFF;
    --secondarylight: #5f5f5f;
    --onsecondarylight: #FFFFFF;
    --secondarydark: #0f0f0f;
    --onsecondarydark: #FFFFFF;

    --background: #FFFFFF;
    --onbackground: #353535;
    --surface: #353535;
    --onsurface: #FFFFFF;
    --error: #b00020;
    --onerror: #FFFFFF;
  }
`;

/* App theme part 2: Typography */
export const typographyprops = html`
  :host {
    --appfont: Roboto, Helvetica, sans-serif;
    --appfontsize: 100%;
    --appfontweight: 100;

    --headerfontsize: ${special.headerfontsize}px;
    --headerfontweight: ${special.headerfontweight};
    --footerfontsize: ${special.footerfontsize}px;
    --navcategoryfontsize: ${special.navcategoryfontsize}px;
    --navitemfontsize: ${special.navitemfontsize}px;

    --h1fontsize: ${special.h1fontsize}px;
    --h2fontsize: ${special.h2fontsize}px;
    --h3fontsize: ${special.h3fontsize}px;
    --h1fontweight: ${special.h1fontweight};
    --h2fontweight: ${special.h2fontweight};
    --h3fontweight: ${special.h3fontweight};
  }
`;

/* App theme part 3: Layout and structural stuff */
export const layoutprops = html`
  :host {
    --headerlineheight: ${special.headerlineheight};
    --headerpadding: ${special.headerpadding}px;  
    
    --h1padding: ${special.h1padding}px;  

    --collapsiblepadding: ${special.collapsiblepadding}px;  

    --navpadding: ${special.navpadding}px;
    --navcategorylineheight: ${special.navcategorylineheight};
    --navcategorypadding: ${special.navcategorypadding}px;

    --navitemlistpadding: ${special.navitemlistpadding}px;
    --navitemlineheight: ${special.navitemlineheight};
    --navitempadding: ${special.navitempadding}px;

    --footerlineheight: ${special.footerlineheight};
    --footerpadding: ${special.footerpadding}px;    
    
    --gutterwidth: ${special.gutterwidth}px;
  }
`;

/* Encapsulated styles for app-shell */
export const appshell = html`
  ${nomargins}
  ${nopadding}

  :host {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: var(--appfont);
    font-size: var(--appfontsize);
    font-weight: var(--appfontweight);
  }
  #header {
    order: 1;
    flex: 0 100%;
    max-height: 60px;
    box-sizing: border-box;
    padding-bottom: var(--headerpadding);
    padding-top: var(--headerpadding);
    line-height: var(--headerlineheight);
    font-size: var(--headerfontsize);
    font-weight: var(--headerfontweight);
    background-color: var(--primary);
    color: var(--onprimary);
  }
  #footer {
    order: 4;
    flex: 0 100%;
    max-height: 32px;
    box-sizing: border-box;
    padding: var(--footerpadding);
    line-height: var(--footerlineheight);
    font-size: var(--footerfontsize);
    background-color: var(--primarylight);    
    color: var(--onprimarylight);
  }
  #nav {
    order: 3;
    flex: 0 auto;
    box-sizing: border-box;
    height: 100%;
    padding: var(--navpadding);
  } 
  #main {
    flex: 1 0px;
    order: 2;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px;
  }
  #mainflex {
    display: flex;
    flex-direction: column;
    padding: var(--gutterwidth);
  }
  #article {
    background-color: var(--background);
    color: var(--onbackground);
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto; 
  }
  #embed {
    background-color: var(--surface);
    color: var(--onsurface);
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto; 
  }
  .rollup {
    background-color: var(--surface);
    color: var(--onsurface);
  }
  h1 {
    margin: 0px;
    padding-top: var(--h1padding);
    padding-bottom: var(--h1padding);
    line-height: 1;
    font-size: var(--h1fontsize);
    font-weight: var(--h1fontweight);
  }
  h2 {
    margin: 0px;
    font-size: var(--h2fontsize);
    font-weight: var(--h3fontweight);
  }
 
  .collapsible {
    box-sizing: border-box;
    font-size: var(--h3fontsize);
    font-weight: var(--h3fontweight);
    text-align: left;
    border: none;
    width: 100%;
    margin-top: var(--gutterwidth);
    margin-bottom: 0px;
    padding: var(--collapsiblepadding);

  }
  .collapsible:hover {
    background-color: var(--secondary);
    color: var(--onsecondary);
  }

  .collapsed {
    background-color: var(--secondarylight);
    color: var(--onsecondarylight);
  }

  .expanded {
    background-color: var(--secondary);
    color: var(--onsecondary);
  }
    
  .collapsed:after {
    content: "&#9660;"; 
    float: right;
  }

  .expanded:after {
    content: "&#9650;"; 
    float: right;
  }

  /* 
  #togglestackblitz {
    position: absolute;
    right: 0px;
    top: 0px;
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 8px;
    padding: 12px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    opacity: 1;

    box-shadow: 4px 4px var(--surface);
    background-color: var(--secondarylight);
    color: var(--onsecondarylight);
    
    
  } 
  #togglestackblitz:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }

  #togglestackblitz:hover {
  } 
  #togglestackblitz:active {
  } 
  #togglestackblitz:focus {
  } 
  */
  /* 
  #togglestackblitz:disabled {
    height: 50px;
    border: none;
    background-color: var(--primarydark);
    color: var(--onprimarylight);
    font-size: 16px;
  } */
  @media(min-width: 600px){
    :host {
      flex-flow: row wrap;
    }
    #nav {
      order: 2;
      flex-grow: 0;
      flex-shrink: 2;
      flex-basis: 300px;
    }
    #main {
      order: 3;
      flex-grow: 6;
      flex-shrink: 0;
      flex-basis: 0px;
    }

  } 
`;


/* Encapsulated styles for my-header */
export const myheader = html`
  ${hostdisplay}
  ${nomargins}
  ${borderbox}
  #menu {
    padding: ${special.headerpadding}px;
    text-decoration: none;
  }
}
`

/* Encapsulated styles for my-nav */
export const mynav = html`
  ${hostdisplay}
  ${nomargins}
  ${borderbox}

  #navcategorylist {
    box-sizing: border-box;
    list-style-type: none;
    padding: var(--navpadding);
    margin: 0px;
  }

  .navitemlist {
    box-sizing: border-box;
    list-style-type: none;
    padding: var(--navitemlistpadding);
  }

  .navcategory {
    box-sizing: border-box;
    cursor: pointer;
    
    padding-left: var(--navcategorypadding);
    padding-top: var(--navcategorypadding);
    padding-bottom: var(--navcategorypadding);
    padding-right: 0px;


    line-height: var(--navcategorylineheight);
    font-size: var(--navcategoryfontsize);
    font-weight: var(--navcategoryfontweight);
  }
  
  .navitem {
    box-sizing: border-box;
    line-height: var(--navitemlineheight);
    font-size: var(--navitemfontsize);
    padding: var(--navitempadding);
    cursor: pointer;
    border: none;
  }
  

  .selectednavitem {
    font-weight: bold;
  }
}`

/* Encapsulated styles for stackblitz-container */
export const stackblitzcontainer = html`
  ${hostdisplay}
  ${nomargins}
  ${borderbox}
  :host {
    background-color: var(--surface);
    color: var(--onsurface);
    height: 100%;
  }
  iframe {
    box-sizing: borderbox;
    margins: 0px;
    padding: 0px;
    border: none;
  }
}`

export const readmedisplay = html`
  ${hostdisplay}
  ${nomargins}
  ${borderbox}
  iframe {
    box-sizing: borderbox;
    margins: 0px;
    padding: 0px;
    border: none;
  }
`;
