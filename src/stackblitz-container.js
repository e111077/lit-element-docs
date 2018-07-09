import { LitElement, html } from '@polymer/lit-element';
import { stackblitzContainerStyles } from './app-styles.js';
import sdk from '@stackblitz/sdk';

class StackblitzContainer extends LitElement{
  static get properties(){
    return {
      projectId: String,
      project: Object,
      options: Object
    };
  }
  constructor(){
    super();
    
    this.project = Object.assign({}, { template: 'javascript' });
    this.options = Object.assign({}, {
      openFile: 'README.md',
      clickToLoad: false,
      view: 'editor',
      height: '600px',
      width: '100%',
      hideExplorer: false,
      hideNavigation: false,
      forceEmbedLayout: true
    });
    this.addEventListener('project-changed', ()=> { this.loadProject() });
  }
  _render(){
    return html`
      <style>
        ${stackblitzContainerStyles}
      </style>
      <iframe height=600 id="stackblitz"></iframe>
    `;
  }
  _getFile(filename, filetype){
    var url = 'src/samples/' + this.projectId + '/' + filename;
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = filetype;
      xhr.open('GET', url);
      xhr.onerror = (e) => { 
        reject(e); 
      }
      xhr.onload = (e) => {
        if(filetype == "json"){
          resolve(e.target.response);
        } else if(filetype == "text") {
          resolve({[filename]: event.target.response});
        }
        else { 
          reject(e); 
        }
      }
      xhr.send();
    });
  }
  _firstRendered(){
    this.loadProject();
  }

  loadProject(){
    this._getFile("manifest.json", "json").then((result) => {
      this.project = Object.assign({}, this.project, result );
    })
    .then(() => {
      var files = this.project.files;
      this.project.files = {};
      var toload = files.length;
      for(var i in files){
        this._getFile(files[i], "text").then((result) => {
          this.project.files = Object.assign({}, this.project.files, result);
          toload--;
          if(toload==0){
            sdk.embedProject(this.shadowRoot.getElementById("stackblitz"), this.project, this.options).then(() => {
              this.dispatchEvent(new CustomEvent('embed-ready', { 
                detail: { embedReady: true }
              }))
            }).catch(() => {
              this.dispatchEvent(new CustomEvent('error-state', {
                detail: { errorState: true, errorIs: 'Could not load project:' + this.projectId }
              }));
            });
          }
        });
      }
    }).catch(() => {
      this.dispatchEvent(new CustomEvent('error-state', {
        detail: { errorState: true, errorIs: 'Could not load project:' + this.projectId }
      }));
    });
  }
}

customElements.define('stackblitz-container', StackblitzContainer);
