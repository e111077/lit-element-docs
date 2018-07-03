export const xlifecycle = [
  {id:'xlifecycleintro', name: 'Introduction'}, 
  {id:'xcreateroot', name: 'Control where an element\'s template is rendered'}, 
  {id:'xfirstrender', name: 'Implement _firstRendered'}, 
  {id:'xshouldrender', name: 'Control the property changes that trigger a render'}, 
  {id:'xrender', name: 'Describe the element\'s template in terms of its properties' },
  {id:'xdidrender', name: 'Call methods on rendered elements' },
  {id:'xrendercomplete', name: 'Get a promise which resolves after next render' },
  {id:'xrequestrender', name: 'Request asynchronous re-render' }
];

export const xdata = [
  {id:'xdataintro', name: 'Introduction'}, 
  {id:'xcreateprops', name: 'Create properties'}, 
  {id:'xobservechanges', name: 'Observe property changes'}, 
  {id:'xdatabinding', name: 'Data binding'}, 
  {id:'xobjects', name: 'Work with objects' },
  {id:'xarrays', name: 'Work with arrays' }
];

export const xbasics = [
  {id:'xbasicsintro', name: 'Introduction'}, 
  {id:'xstatic', name: 'Create static elements in templates'}, 
  {id:'xexpressions', name: 'Use expressions in templates'}, 
  {id:'xattributes', name: 'Bind to attributes in templates'}, 
  {id:'xeventlisteners', name: 'Add event handlers to a template' }
];

export const xstyle = [
  {id:'xstyleintro', name: 'Introduction'}, 
  {id:'xstyle', name: 'Styling'}, 
  {id:'xtheme', name: 'Create a theme' }
];

export const xpolymerdiffs = [
  {id:'xpolymerintro', name: 'Introduction' },
  {id:'xpolymer', name: 'lit-element for Polymer users' },
  {id:'xpolymer1', name: 'lit-element for Polymer users' },
  {id:'xpolymer2', name: 'lit-element for Polymer users' }
];

export const xevents = [
  {id:'xeventsintro', name: 'Introduction' },
  {id:'xevents1', name: 'lit-element for Polymer users' },
  {id:'xevents2', name: 'lit-element for Polymer users' },
  {id:'xevents3', name: 'lit-element for Polymer users' },
]

export const xcategories = {
  'xpolymerdiffs': xpolymerdiffs, 
  'xstyle': xstyle,
  'xbasics': xbasics,
  'xdata': xdata,
  'xlifecycle': xlifecycle,
  'xevents': xevents
}

export const xcategorieslist = [
  {'id': 'xbasics',       'hidden': false,  'name': 'Get started with lit-element'},
  {'id': 'xpolymerdiffs', 'hidden': true,   'name': 'lit-element for Polymer developers'},
  {'id': 'xdata',         'hidden': true,   'name': 'Create properties and handle data'},
  {'id': 'xlifecycle',    'hidden': true,   'name': 'Use lit-element lifecycle callbacks'},
  {'id': 'xevents',       'hidden': true,   'name': 'Fire and handle events'},
  {'id': 'xstyle',        'hidden': true,   'name': 'Style an element or app'},
]
