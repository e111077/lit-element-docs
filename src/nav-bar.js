// Import lit-element base class and function to create TemplateResults.
import { LitElement, html } from '@polymer/lit-element';
// Import repeat directive from lit-html library.
import { repeat } from 'lit-html/lib/repeat.js';
// Import encapsulated styles for the nav-bar.
import { navBarStyles } from './app-styles.js';

/**
 * The nav-bar element draws a menu with projects in category dropdowns.
 * 
 * Nav bar receives state (including which menus are expanded/collapsed 
 * and which project and category are active) from the app shell. 
 * Nav bar makes no changes to app state. 
 * 
 * When the user clicks a menu option, the nav bar fires an event with the 
 * details of what was clicked.
 * 
 * App shell listens for the events and changes the state accordingly.
 */
class NavBar extends LitElement {
  static get properties(){
    return {
      // Project and category data. 
      content: Object,
      // Current app state.
      state: Object
    };
  }

  /**
   * Fire an event with the id of the project that was clicked.
   */
  clickedProject(projectId){
    var clicked = new CustomEvent(
      'clicked-project', {detail: {project: projectId}}
    );
    this.dispatchEvent(clicked);
  }
  
  /**
   * Fire an event with the id of the category that was clicked.
   */
  clickedCategory(id){
    var clicked = new CustomEvent(
      'clicked-category', {detail: {category: id}}
    );
    this.dispatchEvent(clicked);
  }
  
  /**
   * Render the menu based on app content and current state. 
   * 
   * Use lit-html `repeat` directive to iterate over categories and their 
   * projects.
   * 
   * Use state data to set expandedness and dropdown icons for category
   * lists, and to highlight the active project.
   */
  _render({content, state}) {
    // Create an array to make iterating through object keys less horrible.
    var categories = Object.values(content.categories);
    return html`
      <style>
        ${navBarStyles}
      </style>
      <ul>
        ${repeat(categories, (category) => category, (category) => html`
          <li id="${category.id}">
            <div class="navcategory" on-click="${() => this.clickedCategory(category.id)}">
            <span class="spacer">
              ${state.expandedCategories[category.id]?
                '∨': // Category menu icon is a down arrow when category is expanded.
                '>'  // Category menu icon is a right arrow when category is collapsed.
              }
            </span>
            ${category.name}
            </div>
            <ul hidden?=${!state.expandedCategories[category.id]}>
              ${repeat(category.projects, (projectId) => projectId, (projectId) => html`
                <li 
                  class$="${state.activeProject==projectId?"navitem selected":"navitem"}" 
                  id="${projectId}"
                  on-click="${() => {this.clickedProject(projectId)}}"
                >
                  ${content.projects[projectId].name}
                </li>
              `)}
            </ul>
          </li>
        `)}
      </ul>
    `;
  }
}

// Register the custom element with the browser.
customElements.define('nav-bar', NavBar);
