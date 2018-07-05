import { LitElement, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';

class NavBar extends LitElement {
  static get properties(){
    return {
      content: Object,
      state: Object
    };
  }

  clickedProject(e, j){
    var clicked = new CustomEvent(
      'clicked-project', {detail: {project: j, event: e}}
    );
    this.dispatchEvent(clicked);
  }
  
  clickedCategory(id){
    var clicked = new CustomEvent(
      'clicked-category', {detail: {category: id}}
    );
    console.log(clicked.detail);
    this.dispatchEvent(clicked);
  }
  
  _render({content, state}) {
    var categories = Object.values(content.categories);
    return html`
      <style>
        .selected {
          color: red;
        }
      </style>
      <ul>
        ${repeat(categories, (i) => i, (i) => html`
          <li id="${i.id}">
            <p on-click="${() => this.clickedCategory(i.id)}">${i.name}</p>
            <ul hidden?=${!state.expandedCategories[i.id]}>
              ${repeat(i.projects, (j) => j, (j) => html`
                <li 
                  class$="${state.activeProject==j?"selected":""}" 
                  id="${content.projects[j].id}"
                  on-click="${(e) => {this.clickedProject(e, j)}}"
                >
                  ${content.projects[j].name}
                </li>
              `)}
            </ul>
          </li>
        `)}
      </ul>
    `;
  }
}

customElements.define('nav-bar', NavBar);
