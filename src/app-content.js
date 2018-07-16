/**
 * Define the IDs and names of all sample code projects and their categories.
 * 
 * Export three objects:
 * 
 * @export xprojects Object. Maps project IDs to names, keyed by projectId.
 * @export xcategories Object. Maps category ids to their names and projects.
 * @export xprojectsToCategories Object. Maps each project ID to the ID of
 *  the category it is in.
 */

/**
 * Map project IDs to their names.
**/
export const xprojects = {
  xlocalsetup:      { id: 'xlocalsetup', name: 'Set up lit-element locally' },

  /* */
  xcreateelement:   { id: 'xcreateelement', name: 'Create a custom element' },
  xbasicproperties: { id: 'xbasicproperties', name: 'Declare and initialize properties'},
  xbindprops:       { id: 'xbindprops', name: 'Bind to another element\'s property'},
  xbindbooleans:    { id: 'xbindbooleans', name: 'Bind to another element\'s Boolean property'},
  xbindattributes:  { id: 'xbindattributes', name: 'Bind to another element\'s attribute'},
  xeventlisteners:  { id: 'xeventlisteners', name: 'Add event handlers to a template'},

  /* */
  xcreateroot:      { id: 'xcreateroot', name: 'Specify where to render an element\'s template' },
  xfirstrender:     { id: 'xfirstrender', name: 'Implement _firstRendered'  },
  xshouldrender:    { id: 'xshouldrender', name:'Specify the property changes that trigger render'},
  xrender:          { id: 'xrender', name: 'Describe an element\'s template'  },
  xdidrender:       { id: 'xdidrender', name: 'Call methods on rendered elements' },
  xrendercomplete:  { id: 'xrendercomplete', name: 'Wait for next render' },
  xrequestrender:   { id: 'xrequestrender', name: 'Request a render' },

  xcreateprops:     { id: 'xcreateprops', name: 'Create properties' },
  xobservechanges:  { id: 'xobservechanges', name: 'Observe property changes' },
  xdatabinding:     { id: 'xdatabinding', name: 'Data binding' },
  xobjects:         { id: 'xobjects', name: 'Work with objects' },
  xarrays:          { id: 'xarrays', name: 'Work with arrays' },

  /* */
  xstyleintro:      { id: 'xstyleintro', name: 'Introduction'},
  xstyle:           { id: 'xstyle', name: 'Styling'},
  xtheme:           { id: 'xtheme', name: 'Create a theme'},

  /* */
  xpolytemplate:    { id: 'xpolytemplate', name: 'Create a template'},
  xpolycreateprops: { id: 'xpolycreateprops', name: 'Create and initialize properties'},
  xpolyconditional: { id: 'xpolyconditional', name: 'Use an \'if\' conditional in a template'},
  xpolyiterate:     { id: 'xpolyiterate', name: 'Use iteration in a template'},
  xpolydeclevent:   { id: 'xpolydeclevent', name: 'Add event listeners in markup'},
  xpolyobservers:   { id: 'xpolyobservers', name: 'Observe changes to properties'},
  xpolycomplexdata: { id: 'xpolycomplexdata', name: 'Work with objects and arrays'},
  xpolyoneway:      { id: 'xpolyoneway', name: 'Bind data from one element to another'},
  xpolytwoway:      { id: 'xpolytwoway', name: 'Sync data between parent and child elements'},
  
  /* */
  xeventsintro:     { id: 'xeventsintro', name: 'Introduction'},
  xfire:            { id: 'xfire', name: 'Fire events'},
  xhandle:          { id: 'xhandle', name: 'Handle events'},

  /* */
  xpure:            { id: 'xpure', name: 'Implement _render as a pure function of properties'}
}

/**
 * List of projects in the category 'xdata'.
**/
const xdata = [ 
  'xcreateprops', 
  'xobservechanges', 
  'xdatabinding', 
  'xobjects', 
  'xarrays' 
];

/**
 * List of projects in the category 'xsetup'.
**/
const xsetup = [ 
  'xlocalsetup'
];

/**
 * List of projects in the category 'xbasics'.
**/
const xbasics = [  
  'xcreateelement', 
  'xbasicproperties', 
  'xbindprops', 
  'xbindbooleans', 
  'xbindattributes',
  'xeventlisteners' 
];

/**
 * List of projects in the category 'xlifecycle'.
 */
const xlifecycle = [ 
  'xcreateroot', 
  'xfirstrender', 
  'xshouldrender', 
  'xdidrender', 
  'xrendercomplete', 
  'xrequestrender' 
];

/**
 * List of projects in the category 'xstyling'.
 */
const xstyling = [ 
  'xstyleintro', 
  'xstyle', 
  'xtheme' 
];

/**
 * List of projects in the category 'xpolymerdiff'.
**/
const xpolymerdiff = [ 
  'xpolytemplate',
  'xpolycreateprops',
  'xpolyconditional',
  'xpolyiterate',
  'xpolydeclevent',
  'xpolyobservers',
  'xpolycomplexdata',
  'xpolyoneway',
  'xpolytwoway'
];

/**
 * List of projects in the category 'xevents'.
 */
const xevents = [ 
  'xeventsintro', 
  'xfire', 
  'xhandle' 
];

/**
 * List of projects in the category 'xbestpracs'.
 */
const xbestpracs = [ 
  'xpure'
];

/**
 * Map category ids to their names and projects.
 */
export const xcategories = {
  xsetup: {
    id: 'xsetup', 
    name: 'Set up lit-element locally', 
    projects: xsetup 
  },
  xbasics: { 
    id: 'xbasics', 
    name: 'Get started with lit-element', 
    projects: xbasics 
  },
  xpolymerdiff: {
    id: 'xpolymerdiff', 
    name: 'lit-element for Polymer users', 
    projects: xpolymerdiff 
  }, 
  xdata: { 
    id: 'xdata', 
    name: 'Work with data', 
    projects: xdata 
  },
  xevents: { 
    id: 'xevents',
    name: 'Fire and handle events', 
    projects: xevents 
  },
  xlifecycle: {
    id: 'xlifecycle', 
    name: 'Use lifecycle callbacks', 
    projects: xlifecycle 
  },
  xbestpracs: { 
    id: 'xbestpracs', 
    name: 'Best practices', 
    projects: xbestpracs
  },
  xstyling: { 
    id: 'xstyling', 
    name: 'Style an element or app', 
    projects: xstyling 
  }
}

/**
 * Map each project ID to the ID of the category it is in.
 */
export const xprojectsToCategories = {
  /* */
  xlocalsetup: 'xsetup',
  
  /* */
  xdataintro: 'xdata',
  xcreateprops: 'xdata',
  xobservechanges: 'xdata', 
  xdatabinding: 'xdata',
  xobjects: 'xdata',
  xarrays: 'xdata',

  /* */
  xcreateelement: 'xbasics',
  xbasicproperties: 'xbasics',
  xbindprops: 'xbasics',
  xbindbooleans: 'xbasics',
  xbindattributes: 'xbasics',
  xeventlisteners: 'xbasics',

  /* */
  xcreateroot: 'xlifecycle',
  xfirstrender: 'xlifecycle',
  xshouldrender: 'xlifecycle',
  xdidrender: 'xlifecycle',
  xrendercomplete: 'xlifecycle',
  xrequestrender: 'xlifecycle',
  
  /* */
  xstyleintro: 'xstyling',
  xstyle: 'xstyling',
  xtheme: 'xstyling',

  /* */
  xpoly: 'xpolymerdiff',
  xpolytemplate: 'xpolymerdiff',
  xpolycreateprops: 'xpolymerdiff',
  xpolyconditional: 'xpolymerdiff',
  xpolyiterate: 'xpolymerdiff',
  xpolydeclevent: 'xpolymerdiff',
  xpolyobservers: 'xpolymerdiff',
  xpolycomplexdata: 'xpolymerdiff',
  xpolyoneway: 'xpolymerdiff',
  xpolytwoway: 'xpolymerdiff',

  /* */
  xeventsintro: 'xevents',
  xfire: 'xevents',
  xhandle: 'xevents',

  /* */
  xpure: 'xbestpracs'
}
