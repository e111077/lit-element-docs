// Import lit-element base class and html helper function
import { LitElement, html } from '@polymer/lit-element';
// Import encapsulated styles for stackblitz-container
import { stackblitzContainerStyles } from './app-styles.js';
// Import the stackblitz SDK to create embedded stackblitz projects
import sdk from '@stackblitz/sdk';

/**
 * Load and display an embedded StackBlitz project.
 */
class StackblitzContainer extends LitElement{
  static get properties(){
    return {
      /**
       * StackBlitz project ID, supplied by app shell.
       */
      projectId: String
    };
  }
  constructor(){
    super();
    /** 
     * Project descriptor for embeds as per StackBlitz JavaScript SDK.
     * 
     */
    this.project = Object.assign({}, { template: 'javascript' });
    /** 
     * Options descriptor for embeds as per StackBlitz JavaScript SDK.
     * 
     */
    this.options = Object.assign({}, {
      openFile: 'custom-element.js',
      clickToLoad: false,
      view: 'editor',
      height: '600px',
      width: '100%',
      hideExplorer: false,
      hideNavigation: false,
      forceEmbedLayout: true
    });
    /**
     * Hack. This element must render once only, because all _render() 
     * does is place an iframe for the StackBlitz SDK. The rest of the
     * updates to this element must manipulate that iframe directly because
     * of the way the StackBlitz API works.
     * 
     * Therefore, render once only and never again.
     */
    this.shouldRender=true;
    /**
     * Load a new project when the projectId supplied by app shell changes.
     */
    this.addEventListener('project-changed', (e) => { 
      this.projectId = e.detail;
      this.loadProject(1).then(console.log('loaded project'));
    });
  }

  /**
   * Place an iframe for the StackBlitz SDK. This element renders
   * once only. Further updates are done by this.loadProject().
   */
  _render(){
    return html`
      <style>
        ${stackblitzContainerStyles}
      </style>
      <iframe height=600 id="stackblitz"></iframe>
    `;
  }

  /**
   * When the element has been added to the DOM, start loading
   * the first project.
   */
  _firstRendered(){
    this.loadProject(1).then(console.log('loaded project'));
  }
  
  /**
   * Prevent this element from rendering more than once
   */
  _shouldRender(){
    return this.shouldRender;
  }

  /**
   * Prevent this element from rendering more than once
   */
  _didRender(){
    this.shouldRender = false;
  }

  /**
   * Return a promise to load a file. 
   * 
   * TODO: Clean this up.
   */
  _getFile(filename, filetype){
    var url = 'src/samples/' + this.projectId + '/' + filename;
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = filetype;
      xhr.open('GET', url);
      xhr.onerror = (error) => { 
        reject(error); 
      }
      xhr.onload = (event) => {
        if(filetype == "json"){
          resolve(event.target.response);
        } else if(filetype == "text") {
          /**
           * ~really gross hack~ 
           * 
           * Clean up the results of polymer serve automatically performing
           * module resolution on sample .js files.
           * 
           * TODO: Work out how to stop polymer serve from messing with 
           * sample files.
           */
          var hack = event.target.response.replace(/\.\.\/\.\.\/node_modules\//g, '').replace(/\.\.\/\.\.\/\.\.\//g, '').replace(/\.\.\//g, '');
          resolve({[filename]: hack});
        }
        else { 
          reject(); 
        }
      }
      xhr.send();
    });
  }

  /**
   * Load a new project. 
   * 
   * @param attempts Keep track of how many attempts have been made
   * to load the same project. I have to try at least twice because
   * StackBlitz frequently times out on the first attempt.
   * 
   * I don't know why this happens :(
   * 
   * TODO: Rewrite this function, it's kinda gross.
   */
  async loadProject(attempts){
    /** 
     * Reset the project and options objects. These will be
     * supplied to the StackBlitz SDK as params in the embed call.
     */
    this.project = Object.assign({}, { template: 'javascript' });
    this.options = Object.assign({}, {
      openFile: 'custom-element.js',
      clickToLoad: false,
      view: 'editor',
      height: '600px',
      width: '100%',
      hideExplorer: false,
      hideNavigation: false,
      forceEmbedLayout: true
    });
    /**
     * Get the project's manifest.json, which describes the project, its
     * dependencies, and which files to upload. 
     */
    this._getFile("manifest.json", "json")
    /**
     * From the data in the manifest.json, update the project and 
     * options objects.
     */
    .then((result) => {
      this.project = Object.assign({}, this.project, result );
      if(this.project.openFile){
        this.options.openFile = this.project.openFile;
      }
    })
    /**
     * Load the files listed in manifest.json.
     */
    .then(() => {
      var files = this.project.files;
      this.project.files = {};
      var toload = files.length;

      /**
       * Request each file listed in manifest.json. 
       * 
       * Add the results to an object on the project descriptor, 
       * keyed by filename, as per StackBlitz SDK docs.
       */
      for(var i in files){
        this._getFile(files[i], "text")
        .then((result) => {
          this.project.files = Object.assign({}, this.project.files, result);
          toload--;
          if(toload==0){
            /**
             * If we have all the files, it's time to load the project.
             */
            sdk.embedProject(
              this.shadowRoot.getElementById("stackblitz"), 
              this.project, 
              this.options
            )
            /**
             * Successfully loaded the project, so the embed is ready.
             * Dispatch this info to the app shell.
             */
            .then(() => {
              this.dispatchEvent(new CustomEvent('embed-ready', { 
                detail: { embedReady: true }
              }));
            })
            .catch((error) => {
              /**
               * Try once more to load the project.
               */
              if(attempts < 2){
                console.log('Failed to load project ' + this.projectId + '. The message from the StackBlitz server was: "' + error + '". Trying one more time.');
                this.loadProject(attempts+1);
              }
              /**
               * If the project fails twice, app is in an error state. 
               * Dispatch this info to the app shell.
               */
              else {
                this.dispatchEvent(new CustomEvent('error-state', { 
                  detail: { errorState: true, errorIs: error }
                }));
              }
            });
          }
        })
        .catch((error) => {
          console.log('Could not load file: ', error);
        });
      }
    }).catch((error) => {
      console.log('Could not load project manifest: ', error);
    });
  }  
}

customElements.define('stackblitz-container', StackblitzContainer);
