/**
 * Map project IDs to their names.
**/
export const xprojects = {
  xbasicsintro:     { id: 'xbasicsintro', name: 'Introduction' },
  xstatic:          { id: 'xstatic', name: 'Create static elements in templates'  },
  xexpressions:     { id: 'xexpressions', name: 'Use expressions in templates' }, 
  xattributes:      { id: 'xattributes', name: 'Bind to attributes in templates'  }, 
  xeventlisteners:  { id: 'xeventlisteners', name: 'Add event handlers to a template'},
  xlifecycleintro:  { id: 'xlifecycleintro', name: 'Introduction'  },
  xcreateroot:      { id: 'xcreateroot', name: 'Control where an element\'s template is rendered' },
  xfirstrender:     { id: 'xfirstrender', name: 'Implement _firstRendered'  },
  xshouldrender:    { id: 'xshouldrender', name: 'Control the property changes that trigger a render' },
  xrender:          { id: 'xrender', name: 'Describe an element\'s template'  },
  xdidrender:       { id: 'xdidrender', name: 'Call methods on rendered elements' },
  xrendercomplete:  { id: 'xrendercomplete', name: 'Get a promise which resolves after next render' },
  xrequestrender:   { id: 'xrequestrender', name: 'Request asynchronous re-render' },
  xdataintro:       { id: 'xdataintro', name: 'Introduction' },
  xcreateprops:     { id: 'xcreateprops', name: 'Create properties' },
  xobservechanges:  { id: 'xobservechanges', name: 'Observe property changes' },
  xdatabinding:     { id: 'xdatabinding', name: 'Data binding' },
  xobjects:         { id: 'xobjects', name: 'Work with objects' },
  xarrays:          { id: 'xarrays', name: 'Work with arrays' },
  xstyleintro:      { id: 'xstyleintro', name: 'Introduction'},
  xstyle:           { id: 'xstyle', name: 'Styling'},
  xtheme:           { id: 'xtheme', name: 'Create a theme'},
  xpolymerintro:    { id: 'xpolymerintro', name: 'Introduction'},
  xpolymer:         { id: 'xpolymer', name: 'lit-element for Polymer users'},
  xeventsintro:     { id: 'xeventsintro', name: 'Introduction'},
  xfire:            { id: 'xfire', name: 'Fire events'},
  xhandle:          { id: 'xhandle', name: 'Handle events'}
}

/**
 * List of projects in the category 'xdata'.
**/
const xdata = [ 
  'xdataintro', 
  'xcreateprops', 
  'xobservechanges', 
  'xdatabinding', 
  'xobjects', 
  'xarrays' 
];

/**
 * List of projects in the category 'xbasics'.
**/
const xbasics = [ 
  'xbasicsintro', 
  'xstatic', 
  'xexpressions', 
  'xattributes', 
  'xeventlisteners' 
];

/**
 * List of projects in the category 'xlifecycle'.
 */
const xlifecycle = [ 
  'xlifecycleintro', 
  'xcreateroot', 
  'xfirstrender', 
  'xshouldrender', 
  'xrender', 
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
  'xpolymerintro', 
  'xpolymer' 
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
 * Map category ids to their names and projects.
 */
export const xcategories = {
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
    name: 'Use properties and data', 
    projects: xdata 
  },
  xlifecycle: { 
    id: 'xlifecycle', 
    name: 'Use lit-element lifecycle callbacks', 
    projects: xlifecycle 
  },
  xevents: { 
    id: 'xevents',
    name: 'Fire and handle events', 
    projects: xevents 
  },
  xstyling: { 
    id: 'xstyling', 
    name: 'Style an element or app', 
    projects: xstyling 
  }
}

/**
 * Map each project ID to the ID of the category it is in.
**/
export const xprojectsToCategories = {
  xdataintro: 'xdata',
  xcreateprops: 'xdata',
  xobservechanges: 'xdata', 
  xdatabinding: 'xdata',
  xobjects: 'xdata',
  xarrays: 'xdata',
  xbasicsintro: 'xbasics',
  xstatic: 'xbasics',
  xexpressions: 'xbasics',
  xattributes: 'xbasics',
  xeventlisteners: 'xbasics',
  xlifecycleintro: 'xlifecycle',
  xcreateroot: 'xlifecycle',
  xfirstrender: 'xlifecycle',
  xshouldrender: 'xlifecycle',
  xrender: 'xlifecycle',
  xdidrender: 'xlifecycle',
  xrendercomplete: 'xlifecycle',
  xrequestrender: 'xlifecycle',
  xstyleintro: 'xstyling',
  xstyle: 'xstyling',
  xtheme: 'xstyling',
  xpolymerintro: 'xpolymerdiff',  
  xpolymer: 'xpolymerdiff',
  xeventsintro: 'xevents',
  xfire: 'xevents',
  xhandle: 'xevents'
}
