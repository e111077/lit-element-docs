
export const xprojects = {
  xbasicsintro:     { id: 'xbasicsintro', active: true, name: 'Introduction' },
  xstatic:          { id: 'xstatic', active: false, name: 'Create static elements in templates'  },
  xexpressions:     { id: 'xexpressions', active: false, name: 'Use expressions in templates' }, 
  xattributes:      { id: 'xattributes', active: false, name: 'Bind to attributes in templates'  }, 
  xeventlisteners:  { id: 'xeventlisteners', active: false, name: 'Add event handlers to a template'},
  xlifecycleintro:  { id: 'xlifecycleintro', active: false, name: 'Introduction'  },
  xcreateroot:      { id: 'xcreateroot', active: false, name: 'Control where an element\'s template is rendered' },
  xfirstrender:     { id: 'xfirstrender', active: false, name: 'Implement _firstRendered'  },
  xshouldrender:    { id: 'xshouldrender', active: false, name: 'Control the property changes that trigger a render' },
  xrender:          { id: 'xrender', active: false, name: 'Describe an element\'s template'  },
  xdidrender:       { id: 'xdidrender', active: false, name: 'Call methods on rendered elements' },
  xrendercomplete:  { id: 'xrendercomplete', active: false, name: 'Get a promise which resolves after next render' },
  xrequestrender:   { id: 'xrequestrender', active: false, name: 'Request asynchronous re-render' },
  xdataintro:       { id: 'xdataintro', active: false, name: 'Introduction' },
  xcreateprops:     { id: 'xcreateprops', active: false, name: 'Create properties' },
  xobservechanges:  { id: 'xobservechanges', active: false, name: 'Observe property changes' },
  xdatabinding:     { id: 'xdatabinding', active: false, name: 'Data binding' },
  xobjects:         { id: 'xobjects', active: false, name: 'Work with objects' },
  xarrays:          { id: 'xarrays', active: false, name: 'Work with arrays' },
  xstyleintro:      { id: 'xstyleintro', active: false, name: 'Introduction'},
  xstyle:           { id: 'xstyle', active: false, name: 'Styling'},
  xtheme:           { id: 'xtheme', active: false, name: 'Create a theme'},
  xpolymerintro:    { id: 'xpolymerintro', active: false, name: 'Introduction'},
  xpolymer:         { id: 'xpolymer', active: false, name: 'lit-element for Polymer users'},
  xeventsintro:     { id: 'xeventsintro', active: false, name: 'Introduction'},
  xfire:            { id: 'xfire', active: false, name: 'Fire events'},
  xhandle:          { id: 'xhandle', active: false, name: 'Handle events'}
}

const xdata = [ 'xdataintro', 'xcreateprops', 'xobservechanges', 'xdatabinding', 'xobjects', 'xarrays' ];
const xbasics = [ 'xbasicsintro', 'xstatic', 'xexpressions', 'xattributes', 'xeventlisteners' ];
const xlifecycle = [ 'xlifecycleintro', 'xcreateroot', 'xfirstrender', 'xshouldrender', 'xrender', 'xdidrender', 'xrendercomplete', 'xrequestrender' ];
const xstyling = [ 'xstyleintro', 'xstyle', 'xtheme' ];
const xpolymerdiff = [ 'xpolymerintro', 'xpolymer' ];
const xevents = [ 'xeventsintro', 'xfire', 'xhandle' ];

export const xcategories = {
  xbasics: { 
    id: 'xbasics',
    active: true,  
    hidden: false, 
    name: 'Get started with lit-element', 
    projects: xbasics 
  },
  xpolymerdiff: { 
    id: 'xpolymerdiff',
    active: false, 
    hidden: true, 
    name: 'lit-element for Polymer users', 
    projects: xpolymerdiff 
  },
  xdata: { 
    id: 'xdata',
    active: false,
    hidden: true, 
    name: 'Use properties and data', 
    projects: xdata 
  },
  xlifecycle: { 
    id: 'xlifecycle',
    active: false, 
    hidden: true, 
    name: 'Use lit-element lifecycle callbacks', 
    projects: xlifecycle 
  },
  xevents: { 
    id: 'xevents',
    active: false, 
    hidden: true,
    name: 'Fire and handle events', 
    projects: xevents 
  },
  xstyling: { 
    id: 'xstyling',
    active: false, 
    hidden: true, 
    name: 'Style an element or app', 
    projects: xstyling 
  }
}

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
