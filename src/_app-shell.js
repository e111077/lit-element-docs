import { LitElement, html } from '@polymer/lit-element';
import { styleblock, typographyprops, layoutprops, colorprops, appshell } from './app-styles.js';
import { xcategories, xcategorieslist } from './content.js';
import './my-header.js';
import './my-nav.js';
import './stackblitz-container.js';
import './content-item.js';
import './bacon-ipsum.js';
import './readme-display.js';

class AppShell extends LitElement {
  static get properties() {
    return {
      content: Object,
      state: Object,
      styles: Object
    };
  }
  constructor(){
    super();
    this.content = this.getContent();
    this.state=this.getState();
    this.styles=this.getStyles();
  }
  getState(){
    return Object.assign({},{ 
      //activeview: 'sandbox',
      selectedcategory: 'xbasics',
      selectedcategoryname: 'Get started with lit-element',
      selectedproject: 'xbasicsintro',
      selectedprojectname: 'Introduction',
      hidedocs: false,
      hideembed: true,
      embedready: false
    });
  }
  getContent(){
    return Object.assign({},{
      'categories': xcategories,
      'categorieslist': xcategorieslist,
      'headingtext': 'lit-element documentation',
      'footertext': '© 2018 The Polymer Team'
    });
  }
  getStyles(){
    return Object.assign({}, {
      layout: layoutprops,
      typography: typographyprops,
      color: colorprops
    });
  }
  _myHeader(headingtext){
    return html`
      <my-header headingtext=${headingtext}>
        <!--
        GitHub: <a href="https://github.com/Polymer/lit-element">lit-element</a>
        <a href="https://github.com/katejeffreys/lit-app">This site</a> --></my-header>
    `;
    /* <button id="togglestackblitz" disabled?="${!this.state.embedready}" on-click="${this.toggleembed.bind(this)}">Toggle Live Sample</button>  */
  }
  _myFooter(footertext){
    return html`
      ${footertext}
    `;
  }
  _myNav(content, navchangehandler){
    return html`
      <my-nav 
        content=${content}
        navchangehandler=${navchangehandler}>
      </my-nav>
    `;
  }
  /* 
  togglehidden(e){
    console.log(e.target);
    this.state.hidearticle = !this.state.hidearticle;
    this.requestRender();
  } */
  /* 
  getarticletoggletext(){
    return html`Toggle thing &nbsp;&#8964;`;
    /* if(this.state.hidearticle){
      return html`Show article&nbsp;&#8964;`;
    }
    else{
      return html`Hide article&nbsp;&#8963;`;
    } 
  } */
  _articleBlock(projectid){
    return html`
    <readme-display id="article" hidden?=${this.state.hidedocs} projectid=${projectid}></readme-display>
    `;
  }

  _embeddedProject(projectid){
    return html`
    <stackblitz-container hidden?=${this.state.hideembed} id="embed" projectid=${projectid}></stackblitz-container>
    `;
  }
  toggleembed(){
    //var thing = this.shadowRoot.getElementById('embed');
    this.state.hideembed = !this.state.hideembed;
    this.requestRender();
  }

  setexpandclasses(){
    var expandembed = this.shadowRoot.getElementById('expandembed');
    if (this.state.hideembed == true) {
      expandembed.className = "collapsible collapsed"
    } else {
      expandembed.className = "collapsible expanded"
    }

    var expanddocs = this.shadowRoot.getElementById('expanddocs');
    if (this.state.hidedocs == true) {
      expanddocs.className = "collapsible collapsed"
    } else {
      expanddocs.className = "collapsible expanded"
    }
  }

  toggleexpand(e){
    if (e.target.id == 'expandembed'){
      this.state.hideembed = !this.state.hideembed;
    }
    if (e.target.id == 'expanddocs'){
      this.state.hidedocs = !this.state.hidedocs;
    }
    this.setexpandclasses();
    this.requestRender();
  }
  toggledocs(){
    //var thing = this.shadowRoot.getElementById('embed');
    this.state.hidedocs = !this.state.hidedocs;
    this.requestRender();
  }
  getcollapsibleclasses(){
    //console.log(thing);
    /* if(this.state.hidedocs)
      return  */
    return "collapsible";
  }

  _render({content, state, styles}) {
    return html`
      ${styleblock([styles.layout, styles.color, styles.typography, appshell])}

      <header id="header">${this._myHeader(content.headingtext)}</header>
      <nav id="nav" role="navigation">
        ${this._myNav(
        content, 
        this.changeproject.bind(this))}
      </nav>
      <main id="main">
        <h1>${state.selectedcategoryname}</h1>
        <h2>${state.selectedprojectname}</h2>
        <div id="mainflex">
          <div id="expandembed" class="" on-click="${this.toggleexpand.bind(this)}">Live Sample</div>
            <div class="rollup">
              ${this._embeddedProject(state.hideembed, state.selectedproject)}
            </div>
            <div id="expanddocs" class="" on-click="${this.toggleexpand.bind(this)}">Documentation</div>
            <div class="rollup">
              ${this._articleBlock(state.selectedproject)}
            </div>
        </div>        
      </main>
      <footer id="footer">${this._myFooter(content.footertext)}</footer>
      
    `;
    /* <button id="togglestackblitz" on-click="${this.toggleembed.bind(this)}">Show live code sample</button> 
    
    <div id="mainflex">
          ${this._embeddedProject(state.hideembed, state.selectedproject)}
          ${this._articleBlock(state.hidearticle, state.selectedproject)}
        </div>
    */
  }
  _firstRendered(){
    this.setexpandclasses();
    var mystackblitz = this.shadowRoot.querySelector('stackblitz-container');
    mystackblitz.addEventListener('embed-ready', function(e){
      this.state.embedready=true; 
      this.requestRender();
    }.bind(this));
    mystackblitz.dispatchEvent(new CustomEvent('project-changed', 
      {detail: {newproject: this.state.selectedproject}}
    ));

    var mynav = this.shadowRoot.querySelector('my-nav');
    var current = mynav.shadowRoot.getElementById(this.state.selectedproject);
    this.state.selectedprojectname = current.name;
    this.state.selectedcategory = current.parentNode.parentNode.id;
    this.state.selectedcategoryname = current.parentNode.parentNode.name;
    current.className='navitem selectednavitem';

    this.requestRender();
  }
  changeproject(event){
    var mynav = this.shadowRoot.querySelector('my-nav');
    var previous = mynav.shadowRoot.getElementById(this.state.selectedproject);
    previous.className='navitem';

    this.state.selectedproject = event.target.id;
    var current = mynav.shadowRoot.getElementById(this.state.selectedproject);

    this.state.selectedprojectname = current.name;
    this.state.selectedcategory = current.parentNode.parentNode.id;
    this.state.selectedcategoryname = current.parentNode.parentNode.name;

    current.className='navitem selectednavitem';
    var mystackblitz = this.shadowRoot.querySelector('stackblitz-container');
    mystackblitz.dispatchEvent(new CustomEvent('project-changed', 
      { detail: { newproject: this.state.selectedproject } }
    ));
    this.requestRender();
  }
}

customElements.define('app-shell', AppShell);
