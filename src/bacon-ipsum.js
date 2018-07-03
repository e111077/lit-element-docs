import { LitElement, html } from '@polymer/lit-element';
import { until } from 'lit-html/lib/until.js';
import {styleblock, hostdisplay, nomargins } from './app-styles.js';

export class BaconIpsum extends LitElement { 

  static get properties(){
    return {
      bacon: Object,
      waiting: String
    }
  }
  
  constructor(){
    super();
    var url = 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=text'
    this.waiting='Waiting for bacon';
    this.bacon=this.getBacon('GET', url);
  }
  
  getBacon(method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) { 
          resolve(html`${this.response}`);
        } else {
          reject();
        }
      };
      xhr.onerror = function () {
        reject();
      };
      xhr.send();
    });
  }

  _render({bacon, waiting}){
    return html`
      ${styleblock([hostdisplay, nomargins])}
      ${until(bacon, html`${waiting}`)}
    `
  }
}

customElements.define('bacon-ipsum', BaconIpsum);
