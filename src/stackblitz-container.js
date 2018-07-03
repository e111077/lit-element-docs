import { LitElement, html } from '@polymer/lit-element';
import {styleblock, stackblitzcontainer} from './app-styles.js';
import sdk from '@stackblitz/sdk';

class StackblitzContainer extends LitElement {
  static get properties(){ 
    return {
      projectid: String,
      project: Object,
      options: Object,
    }
  }
  constructor(){
    super();
    
    this.addEventListener('project-changed', function(e){
      this.projectid = e.detail.newproject;
      this.loadproject(this.projectid);
    }.bind(this));
  
    this.project={
      template: 'javascript'
    };
    
    this.options={
      openFile: 'custom-element.js',
      clickToLoad: false,
      view: 'editor',
      height: '600px',
      width: '100%',
      hideExplorer: false,
      hideNavigation: false,
      forceEmbedLayout: true
    };
  }
  
  _render(){
    return html`
      ${styleblock([stackblitzcontainer])}
      <iframe id="stackblitz" class="stackblitz"></iframe>
    `;
  }

  _firstRendered(){

    //this.loadproject(this.projectid);
  }
  
  /* Load the project. 

  - Set the folder that contains this project's manifest and code samples
  - Request this project's manifest.json
  - Make the project object from data in the constructor + manifest.json
  - Request sample code files
  - Embed the project 

  In manifest.json, the files property is an array of filenames, but
  the stackblitz api needs the files property to be an object in the
  following format: 

    { { "filename1": "filecontents1" }, ..., { "filenameN": "filecontentsN" }}

  To build this object:

  - Keep the filenames array
  - Set project.files to an empty object
  - Build project.files:
    - Request each file in the array of filenames 
    - When the results come back, add the filename and contents to project.files
      in the following format:

      {"filename": "filecontents"}
  
  */
  loadproject(projectid){
    var projectfolder = 'src/samples/' + projectid + '/';
    var stuff = 
      this.makeRequest(projectfolder, 'manifest.json', 'json')
      .then(function(manifestobject){
        var project = Object.assign(this.project, manifestobject['manifest.json']);       
        var filenames = project.files;
        this.toload = filenames.length;
        project.files = {};
        this.project = Object.assign({}, project);
        
        for (var i = 0; i < filenames.length; i++){
          this.makeRequest(projectfolder, filenames[i], 'text')
          .then(this.addFileToProject.bind(this));
        }
        return stuff;
      }.bind(this)).catch(this.errorLoadingProject.bind(this));
  }
  
  makeRequest(projectfolder, filename, filetype){
    return new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.responseType = filetype;
      xhr.open('GET', projectfolder + filename);
      xhr.onload = function(){
        if (this.status >= 200 && this.status < 300) { 
          if(filetype === 'text'){
            var hack = this.response.replace(/\.\.\/\.\.\/node_modules\//g, '').replace(/\.\.\/\.\.\/\.\.\//g, '').replace(/\.\.\//g, '');
            resolve({[filename]: hack});
          }
          resolve({[filename]: this.response});
        } else {
          console.log('Couldn\'t load ' + filename);
          reject({[filename]: this.response});
        }
      };
      xhr.onerror = function(e){
        console.log('Couldn\'t load ' + filename);
        reject({[filename]: e});
      };
      xhr.send();
    });
  }
  addFileToProject(file){
    var files = Object.assign(this.project.files, file);
    this.toload--;
    if(this.toload === 0){
      var computedembedheight = window.getComputedStyle(this).height;
      console.log('computedembedheight is ', computedembedheight);
      if(this.options.height < computedembedheight){
        console.log('setting this.options.height = computedembedheight;');
        this.options.height = computedembedheight;
      }
      var stackblitz = this.shadowRoot.getElementById('stackblitz');
      sdk.embedProject(stackblitz, this.project, this.options).then(
        () => {
          var embedready = new CustomEvent('embed-ready', {detail: {embedready: true}});
          this.dispatchEvent(embedready);
        });
    }
    return files;
  }
  errorLoadingProject(){
    console.log('Couldn\'t load the following project: ', this.project);
    return null;
  }
}

customElements.define('stackblitz-container', StackblitzContainer);

