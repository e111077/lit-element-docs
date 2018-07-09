
/** 
 * @module app-shell
 **/
// Import lit-element base class & helper function to create TemplateResults.
// Import data for the app.
// Import starting state & state management functions & definitions.
// Import encapsulated styles for app-shell. Includes app theme custom props.
// Import UI components.

/** 
 * @class
 **/

/** 
 * App content. This data doesn't change. Project and category data are 
 * imported from content.js. nav-bar uses this to create nav menu.
 * @property {module:content.Content} content
 **/

/** 
 * App state. 
 * @property {module:state.State} state
 **/

/** 
 * App theme props and encapsulated styles for app-shell.
 * @property {module:app-styles.Styles} styles
 **/

/** 
 * Get the app content. App content can't change, so it is separated
 * from state.
 * @function getContent
 * @return {module:content.Content} Object containing content.
 * @todo Investigate if/how to do this with Redux.
 * @todo Investigate whether the method used to pass content to nav-bar
 * is optimal
 **/

/** 
 * Get the initial app state.
 * @function getState
 * @return {module:state.State} Object containing state.
 * @todo Finish converting to use Redux.
 * @todo Learn how {@link https://github.com/Polymer/pwa-starter-kit PWA Starter Kit}
 * provides slices of state to components. Use this for nav-bar.
 **/
/** 
 * Get the styles for the app shell. See docs for app-styles.js.
 * @function getStyles
 * @return {module:app-styles.Styles} Object containing the styles for the app shell.
 * @todo Investigate idea to get styles here for nav-bar, readme-container, 
 * stackblitz-container, and pass to them
 **/

/** 
 * Set the active project.
 * @function changeProject
 * @param {string} project The new active project ID.
 * @todo Maybe keep track of which projects have caused error state
 **/
/** 
 * Change the app state to reflect which categories in the nav bar are 
 * expanded/collapsed.
 * @function toggleCategoryVisibility
 * @param {string} category Category whose expanded or collapsed state 
 * will be toggled.
 * @todo Investigate whether to move this functionality to nav-bar.js
 **/

/** 
 * Change app state to reflect whether the embedded code sample and readme
 * are expanded/collapsed.
 * @function toggleContentVisibility
 * @param {string} id Id of the element to expand or collapse.
 **/
/** 
 * Implement lit-element _render function.
 * @function _render
 * @param {module:content.Content} content Static content.
 * @param {module:app-styles.Styles} styles Static styles.
 * @param {module:state.State} state Current app state.
 * @todo (Maybe) Make custom element to replace expand/collapse buttons
 * @todo (Maybe) Move button state logic to function/s
 * @todo (Maybe) Make custom element to put stackblitz & readme together
 * @todo Is it weird to pass content and state to nav-bar? & not styles?
 **/
/** 
   * Set up event listeners to respond to events from UI components.
   * @function _firstRendered 
   **/

  // src/app-styles.js

/**
 * @license bsd-3-clause Copyright (c) 2018 Google
 */

/** @module app-styles */

/**
 * @typedef module:app-styles.Styles
 * @type {Object}
 * @property {TemplateResult} appShellStyles
**/

// src/state.js
/** @module state */

/**
 * @typedef module:state.State
 * @type {Object}
 * @property {string} activeProject
 * @property {string} activeCategory
 * @property {Object} expandedCategories
 * @property {Object} expandedContent
 * @property {Boolean} embedReady
 * @property {Boolean} errorState
**/
/**
 * @typedef Action
 * @type {Object}
 * @property {constant} type
 * @property {Any}
**/

/**
 * @const {State} startState
 * Starting app state.
**/
/**
 * @function
 * Change the app state.
 * @param {State} state Previous state.
 * @param {Action} action Type of change, and details of what changed.
 * @return {State} New state.
**/
/**
 * @constant {string} CHANGE_PROJECT
 */
/**
 * Action creator for updates to state.activeProject.
 * @function
 * @param {string} project ID of the new active project.
 * @return {Action}
 */
/**
 * @constant {string} CHANGE_CATEGORY
 */
/**
 * Action creator for updates to state.activeCategory.
 * @function
 * @param {string} category ID of the new active category.
 * @return {Action}
 */
/**
 * @constant {string} UPDATE_CATEGORY_VISIBILITY
 */
/**
 * Action creator for updates to state.expandedCategories.
 * @function
 * @param {string} category The category ID whose visibility needs updating.
 * @param {Boolean} visible Whether or not the category's project list is expanded.
 * @return {Action}
 */
/**
 * @constant {string} UPDATE_CONTENT_VISIBILITY
 */
/**
 * Action creator for updates to state.expandedContent.
 * @function
 * @param {string} id Id of the content element whose state needs updating.
 * @param {Boolean} visible Whether the content element is visible.
 * @return {Action}
 */
/**
 * @constant {string} UPDATE_EMBED_READY
 */
 /**
 * Action creator for updates to state.embedReady 
 * @function
 * @param {Boolean} ready Whether the embedded StackBlitz is ready to view.
 * @return {Action}
 */
/**
 * @constant {string} UPDATE_ERROR_STATE
 */
/**
 * Action creator for updates to state.errorState
 * @function
 * @param {Boolean} detail Whether the app is in an error state.
 * @return {Action}
 */

// src/content.js
/** @module content **/
/**
 * @typedef module:content.projectObject
 * @type {Object}
 * @property {string} id Project id matching the project's folder name.
 * @property {string} name Project name. 
 */
/**
 * @typedef module:content.categoryObject
 * @type {Object}
 * @property {string} id Category id.
 * @property {string} name Category name.
 * @property {string[]} projects List of projects in this category.
 */
/**
 * @typedef module:content.Content
 * @type {Object}
 * @property {{projectObject}} projects Project IDs mapped to their names: `{ projectid: projectObject }`
 * @property {{categoryObject}} categories Category IDs mapped to their names and projects: `{ categoryid: categoryObject }`
 * @property {Object} projectsToCategories Map each project ID to the ID of the category it is in.
 */
/**
 * @const {string[]} xdata
 * List of projects in the category 'xdata'.
**/
/**
 * @const {string[]} xbasics
 * List of projects in the category 'xbasics'.
**/
/**
 * @const {string[]} xlifecycle
 * List of projects in the category 'xlifecycle'.
**/
/**
 * @const {string[]} xstyling
 * List of projects in the category 'xstyling'.
**/
/**
 * @const {string[]} xpolymerdiff
 * List of projects in the category 'xpolymerdiff'.
**/
/**
 * @const {string[]} xevents
 * List of projects in the category 'xevents'.
**/
/**
 * Map category ids to their names and projects.
 * @const {{categoryObject}} xcategories
**/
/**
 * @const {{projectsToCategoriesObject}} xprojectsToCategories
 * Map each project ID to the ID of the category it is in.
**/