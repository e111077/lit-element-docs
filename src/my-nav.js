import { LitElement, html } from '@polymer/lit-element';
import { styleblock, mynav } from './app-styles.js';
import { repeat } from 'lit-html/lib/repeat.js';

export class MyNav extends LitElement {
  
  static get properties() {
    return {
      content: Object,
      navchangehandler: Function
    };
  }
  
  togglehidden(e){
    /*var id = e.target.id;*/

    var ul=e.target.querySelector('ul');

    
    if(ul){
      /* console.log(this.content.categories[id]);
      console.log(id);
      console.log(this.content.categorieslist) */
      var tog = ul.hidden;
      ul.hidden=!tog;
    }
  }
  
  _myNav(content, navchangehandler){
    var expandsymbol = html`&nbsp;&#8964;`;
    return html`
    <ul id="navcategorylist">
      ${repeat(content.categorieslist, (i) => i.id, (i, index) => html`
        <li class="navcategory" on-click="${this.togglehidden.bind(this)}" name="${i.name}" id="${i.id}">
          ${i.name}${expandsymbol}<ul class="navitemlist" hidden?=${i.hidden}>
            ${repeat(content.categories[i.id], (j) => j.id, (j, jindex) => html`
            <li class="navitem" on-click="${navchangehandler}" id="${j.id}" name="${j.name}">
          ${j.name}</li>`)}</ul></li>`)}
    </ul>
  `;
  }
  
  _render({ content, navchangehandler }) {
    return html`
      ${styleblock([mynav])}
      ${this._myNav(content, navchangehandler)}
    `;
  }

}

customElements.define('my-nav', MyNav);

/* some unicode symbols for arrows to try out
&#9661; &#9651;
&#9660; &#9650;
&#8964; &#8963;
*/
