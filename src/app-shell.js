// Import lit-element base class and function to create TemplateResults.
import { LitElement, html } from '@polymer/lit-element';

// Import content, styles and state.
import { xcategories, xprojects, xprojectsToCategories } from './content.js';
import { appShellStyles } from './app-styles.js';
import * as State from './state.js';

// Import UI components.
import './nav-bar.js';
import './stackblitz-container.js';
import './readme-container.js';

/**
 * app-shell element defines app layout, loads UI components, and manages
 * state. Only app-shell can change state. UI components fire 
 * events with details of changes; app-shell makes the changes.
 */
export class AppShell extends LitElement {
  static get properties() {
    /**
     * content: Object with project and category data. See src/content.js.
     * styles: Object with app theme. See src/styles.js.
     * state: Object with current app state. See src/state.js.
     */
    return {
      content: Object,
      styles: Object,
      state: Object
    };
  }
  
  /** 
   * Get app content, styles and initial state.
   */
  constructor() {
    super();
    this.content = this.getContent();
    this.styles=this.getStyles();
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
      footerText: '© 2018 The Polymer Team'
    });
  }

  /** 
   * Get app styles.
   */
  getStyles(){
    return Object.assign({}, {
      appShell: appShellStyles
    });
  }
  
  /** 
   * Get initial app state.
   */
  getState() {
    return Object.assign({}, State.startState);
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
   * Expand or collapse a nav category.
   */
  toggleCategoryVisibility(category){
    var expanded = this.state.expandedCategories[category];
    this.state = State.changeState(
      this.state,
      State.updateCategoryVisibility(category, !expanded)
    );
  }

  /** 
   * Expand or collapse embedded stackblitz or readme. 
   */
  toggleContentVisibility(id){
    var expanded = this.state.expandedContent[id];
    this.state = State.changeState(
      this.state,
      State.updateContentVisibility(id, !expanded)
    );
  }

  /** 
   * Render UI components based on content, styles, and app state.
   */
  _render({content, styles, state}) {
    return html`
      <style>
        ${styles.appShell}
      </style>
      <header id="header"><div>${content.headerText}</div></header>
      <main id="main">
      <div id="categoryheading">${content.categories[state.activeCategory].name}</div>
        <div id="projectheading">${content.projects[state.activeProject].name}</div>
        <button 
          class$="${state.expandedContent.readme?'toggle expanded':'toggle collapsed'}"
          value="readme"
          on-click="${(e) => this.toggleContentVisibility(e.target.value)}">
          <span class="spacer">
            ${state.expandedContent.readme?
              '∨':  // expanded 
              '>'   // collapsed
            }
          </span>
          Documentation
        </button>
        <readme-container
          id="readme"
          hidden?="${!state.expandedContent.readme}" 
          projectId="${state.activeProject}">
        </readme-container>
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
                'Code sample'             // ready && non-error && expanded 
                :'Code sample'            // ready && non-error && collapsed 
              :'Code sample loading'      // loading && non-error
            :'Error loading code sample'  // error state
          }
        </button>
        <stackblitz-container 
          id="embed"
          projectId="${state.activeProject}"
          hidden?="${!state.expandedContent.embed}">
        </stackblitz-container>
      </main>
      <nav id="nav">
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
      this.state = State.changeState(
        State.changeState(
          this.state, 
          State.updateContentVisibility('embed', false)
        ),
        State.updateErrorState(e.detail)
      );
    });
  }
}

// Register the custom element with the browser.
customElements.define('app-shell', AppShell);
