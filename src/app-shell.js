import { LitElement, html } from '@polymer/lit-element';
import { xcategories, xprojects, xprojectsToCategories } from './content.js';
import * as State from './state.js';
import './nav-bar.js';
import './stackblitz-container.js';
import './readme-container';

class AppShell extends LitElement {
  static get properties() {
    return {
      content: Object,
      state: Object
    };
  }
  constructor() {
    super();
    this.content = this.getContent();
    this.state=this.getState();
  }
  getContent() {
    return Object.assign({}, {
      categories: xcategories,
      projects: xprojects,
      projectsToCategories: xprojectsToCategories,
      headertext: 'lit-element documentation',
      footertext: '© 2018 The Polymer Team'
    });
  }
  getState() {
    return Object.assign({}, State.startState);
  }
  changeProject(project) {
    this.state = State.changeState(
      State.changeState(
        this.state, 
        State.changeProject(project)
      ), 
      State.changeCategory(this.content.projectsToCategories[project])
    );
    var embed = this.shadowRoot.getElementById('embed');
    embed.dispatchEvent(new CustomEvent('project-changed', { detail: project }));
  }
  toggleCategoryVisibility(category){
    var expanded = this.state.expandedCategories[category];
    this.state = State.changeState(
      this.state,
      State.updateCategoryVisibility(category, !expanded)
    );
  }
  toggleContentVisibility(id){
    var expanded = this.state.expandedContent[id];
    this.state = State.changeState(
      this.state,
      State.updateContentVisibility(id, !expanded)
    );
  }
  getName(activeCategory){
    //return(this.content.categories[Object.keys(activeCategory)[0]].name);
  }
  _render({content, state}) {
    return html`
      <nav>
        <nav-bar role="navigation" id="navbar" content=${content} state=${state}></nav-bar>
      </nav>
      <h1>${content.categories[state.activeCategory].name}</h1>
      <h2>${content.projects[state.activeProject].name}</h2>
      <main>
        <button 
          id="expandreadme" 
          value="readme"
          on-click="${(e) => this.toggleContentVisibility(e.target.value)}">expand/collapse readme
        </button>
        <readme-container
          projectid="${state.activeProject}"
          id="readme"
          hidden?="${!state.expandedContent.readme}" 
          state=${state}
          content=${content}>
        </readme-container>

        <button 
          disabled?="${!this.state.embedReady}"
          id="expandembed"
          value="embed"
          on-click="${(e) => this.toggleContentVisibility(e.target.value)}"
          >
            ${state.embedReady?"See a live code sample":"Loading a code sample"}
        </button>
        <stackblitz-container 
          projectid="${state.activeProject}"
          id="embed"
          hidden?="${!state.expandedContent.embed}" 
          state=${state}
          content=${content}>
        </stackblitz-container>
      </main>
    `;
  }
  _firstRendered() {
    var navbar = this.shadowRoot.getElementById('navbar');
    navbar.addEventListener('clicked-project', (e) => {
      this.changeProject(e.detail.project);
    });
    navbar.addEventListener('clicked-category', (e) => {
      this.toggleCategoryVisibility(e.detail.category);
    });

    var embed = this.shadowRoot.getElementById('embed');
    embed.addEventListener('embed-ready', () => {
      this.state = State.changeState(
        this.state,
        State.updateEmbedReady(true)
      );
    });
  }
}

customElements.define('app-shell', AppShell);
