// Import lit-element base class.
// Import html helper function to create TemplateResults.
import { LitElement, html } from '@polymer/lit-element';

// Import content and state.
import { xcategories, xprojects, xprojectsToCategories } from './app-content';
import { readmes } from './_readmes.js';
import * as State from './app-state';

// Import UI components.
import './nav-bar.js';
import './stackblitz-container.js';
import './readme-container.js';

// Import encapsulated styles for app-shell. 
import { appShellStyles } from './app-styles';

/**
 * app-shell element.
 * 
 * Define app layout, load UI components, and manage state. 
 * Only the app shell changes the app state. 
 * 
 * UI components fire events with details of changes; 
 * app-shell makes the changes.
 */
export class AppShell extends LitElement {
  static get properties() {
    /**
     * content: Object with project and category data. See app-content.js.
     * state: Object with current app state. See app-state.js.
     */
    return {
      content: Object,
      state: Object
    };
  }
  
  /** 
   * Get app content and initial state.
   */
  constructor() {
    super();
    this.content = this.getContent();
    this.state=this.getState();
  }

  /** 
   * Get app content.
   */
  getContent() {
    return Object.assign({}, {
      categories: xcategories,
      projects: xprojects,
      projectsToCategories: xprojectsToCategories,
      headerText: 'lit-element documentation',
      footerText: '© 2018 The Polymer Team',
      readmes: readmes
    });
  }
  
  /** 
   * Create initial app state.
   */
  getState() {
    var startState = {
      // Active project id.
      activeProject: 'xcreateelement',
      // Id of the category containing the active project.
      activeCategory: 'xbasics',
      // An object denoting expanded categories, keyed by category id.
      expandedCategories: { xbasics: true },  
      // An object denoting expanded content elements, keyed by element id.
      expandedContent: { readme: true, embed: false },
      // Whether the active project's embedded code sample is ready to view.
      embedReady: false,
      // Whether the app is currently in an error state.
      errorState: false
    };
    return Object.assign({}, startState);
  }

  /** 
   * Change active project & update active category to the category 
   * of the new project. Reset error and embed readiness states.
   */
  changeProject(project) {
    this.state=State.changeState(
      this.state, 
      State.updateErrorState(false)
    );
    this.state=State.changeState(
      this.state, 
      State.updateEmbedReady(false)
    );
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

  /** 
   * Update app state to expand or collapse a nav category.
   */
  toggleCategoryVisibility(category){
    var isExpanded = this.state.expandedCategories[category];
    this.state = State.changeState(
      this.state,
      State.updateCategoryVisibility(category, !isExpanded)
    );
  }

  /** 
   * Update app state to expand or collapse a UI component. 
   * Apart from nav menu categories, currently only the 
   * stackblitz-container is expandible/collapsible.
   */
  toggleContentVisibility(id){
    var expanded = this.state.expandedContent[id];
    this.state = State.changeState(
      this.state,
      State.updateContentVisibility(id, !expanded)
    );
  }

  /** 
   * Render UI and components, based on app content and state.
   */
  _render({content, state}) {
    return html`
      <style>
        ${appShellStyles}
      </style>
      <header id="header"><div>${content.headerText}</div></header>
      <main id="main">
        <div id="breadcrumbs">
          ${content.categories[state.activeCategory].name} > 
          ${content.projects[state.activeProject].name}
        </div>
        <div id="categoryheading">${content.categories[state.activeCategory].name}</div>
        <div id="projectheading">${content.projects[state.activeProject].name}</div>
        <button 
          class$="${
            state.errorState?
              'toggle error':
              state.expandedContent.embed?
                'toggle expanded':
                'toggle collapsed'
            }"
          disabled?="${!this.state.embedReady || this.state.errorState}"
          value="embed"
          on-click="${(e) => this.toggleContentVisibility(e.target.value)}">
          <span class="spacer">
            ${!state.errorState?
              state.embedReady?
                state.expandedContent.embed?
                  '∨'                     // ready && non-error && expanded 
                  :'>'                    // ready && non-error && collapsed 
                :'|'                      // loading && non-error
              :'x'                        // error state
            }
          </span>
          ${!state.errorState?
            state.embedReady?
              state.expandedContent.embed?
                'Live code sample'                        // ready && non-error && expanded 
                :'Live code sample'                       // ready && non-error && collapsed 
              :':Loading live code sample...'             // loading && non-error
            :'Error loading embedded StackBlitz project'  // error state
          }
        </button>
        
        <stackblitz-container 
          id="embed"
          projectId="${state.activeProject}"
          hidden?="${!state.expandedContent.embed}">
        </stackblitz-container>

        <readme-container
          id="readme"
          readme="${content.readmes[state.activeProject]}">
        </readme-container>
      </main>

      <nav id="nav" >
        <nav-bar role="navigation" id="navbar" content=${content} state=${state}></nav-bar>
      </nav>

      <footer id="footer">${content.footerText}</footer>
    `;
  }

  /** 
   * Add listeners to catch events sent by UI components that inform app-shell
   * of state changes, & change the app state in the callbacks.
   */
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
    embed.addEventListener('error-state', (e) => {
      console.log(e);
        
      /** 
       * TODO: Usability with this error checking really sucked, 
       * need a different way. Until then, just log the error
       * to the console.
       * 
       * this.state = State.changeState(
       * State.changeState(
       *   this.state, 
       *   State.updateContentVisibility('embed', false)
       * ),
       * State.updateErrorState(true)
       * ); 
       **/
    });
  }
}

// Register the custom element with the browser.
customElements.define('app-shell', AppShell);
