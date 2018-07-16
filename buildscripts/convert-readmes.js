// Using new fsPromises API which is experimental but fine for my purposes
var fsPromises = require('fs').promises;

// Require showdownjs for converting markdown to HTML
const showdown  = require('showdown');
var converter = new showdown.Converter();

// Set up parameters for reading files and folders
var dir = 'samples';
var options = {encoding: 'utf8'};

/**
 * convertedReadmes is a promise. When this promise has been resolved, 
 * the following has been done:
 * 
 * Convert README.md files in all sample projects to HTML. Currently this
 * happens at build time, so every time a README.md is updated this 
 * needs to be done again.
 **/
var convertedReadmes = 
  /**
   * Get @param projects - an array of strings (project folder names). 
   * Folder names are the same as the projectIds used throughout the app.
   * Each folder contains one README.md.
   */
  fsPromises.readdir(dir, options).then((projects) => {
    /**
     * Map the array of projectIds to an array of promises. 
     */
    var promises = projects.map((projectId) => {
      /**
       * Each promise is resolved by reading the contents of 
       * the README.md in the folder corresponding to a projectId.
       */
      var promise = 
        fsPromises.readFile(dir + '/' + projectId + '/README.md', options)
        /**
         * When the file contents are available, convert them to HTML and
         * return them.
         */
        .then((fileContents) => {
          return {[projectId]: converter.makeHtml(fileContents) };
        })
        .catch((error)=>{
          console.log('Could not read file:', dir + '/' + projectId + '/README.md', error);
        });
      /** 
       * End of the function supplied to Array.map - return the promise. 
       **/
      return promise;
    });
    /** 
     * Using the array of promises, create a single promise representing
     * reading and converting all markdown files.
    */
    return Promise.all(promises)
    .then((resultsArray) => {
      /**
       * When all README.md files have been read and converted to HTML,
       * take the resulting array and build an Object containing the
       * converted HTML strings keyed by projectId.
       */
      var convertedReadmes = {};
      for (i in resultsArray){
        convertedReadmes = Object.assign({}, convertedReadmes, resultsArray[i]);
      }
      /**
       * Return an Object containing the converted HTML strings keyed
       * by projectId. 
       */
      return convertedReadmes;
    })
    .catch((error)=>{ 
      console.log('Could not resolve all promises. Rejected: ', error);
    });
  })
  .catch((error) => {
    console.log('Could not read folder:', dir);
    console.log(error);
  })
;

/**
 * Convert all markdown files. With the results, build a .js file that
 * exports an Object containing the converted HTML strings keyed by
 * projectId. 
 */
convertedReadmes.then((result)=> {
  fsPromises.writeFile('src/_readmes.js', "export const readmes = " + JSON.stringify(result)).then(console.log('Wrote _readmes.js'));
}).catch((error)=>{
  console.log('Could not convert readmes. Error:', error);
});
