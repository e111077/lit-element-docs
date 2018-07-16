
## Creating a template

### Polymer 3.0

```js
static get template (){
  return html`
    <h1>[[prop]]</h1>
  `;
}
```

### lit-element

```js
_render({prop}){
  return html`
    <h1>${prop}</h1>
  `;
}
```

## Define and initialize props

### Polymer 3.0 

```js
static get properties(){
  return {
    prop: {
      type: String,
      value: 'hi'
    },
    obj: {
      type: Object,
      value: function(){return {subProp1: 'value', subProp2: 'value'};}
    }
  };
}
```

### lit-element

```js
static get properties(){
  return {
    prop: String,
    obj: Object
  }
}
constructor(){
  super();
  this.prop='hi';
  this.obj=Object.assign({subProp1: 'value', subProp2: 'value'});
}
```

## One-way data binding: Properties

### Polymer 3.0 

```js
static get template(){
  return html`
    <button value="[[prop]]"></button>
  `;
}
```

### lit-element

```js
_render({prop}){
  return html`
    <button value="${prop}"></button>
  `;
}
```

## One-way data binding: Attributes

### Polymer 3.0 

```js
static get template(){
  return html`
    <a href$="[[prop]]"></a>
  `;
}
```

### lit-element

```js
_render({prop}){
  return html`
    <a href$="${prop}"></a>
  `;
}
```

## Add event listeners in a template

### Polymer 3.0

```js

static get template(){
  return html`
    <button on-click="myFunc"></button>
  `;
}
myFunc(e){
  // do stuff
}

```

### lit-element

```js
_render({props}){
  return html`
    <button on-click="${(e) => this.myFunc(e, props)}"></button>
  `;
}
myFunc(e, props){
  // do stuff
}
```

## Two-way data binding

### Polymer 3.0

Two-way data binding is possible with `{{prop}}` annotations and props that notify upwards.

parent-element.js

```js
import './child-element.js';

class ParentElement extends PolymerElement {
  static get properties(){
    return {
      pProp: String
      // This prop will reflect changes made in child-element
    }
  }

  static get template(){
    return html`
      <child-element cProp="{{pProp}}"></child-element>
    `;
  }
}
```

child-element.js

```js
class ParentElement extends PolymerElement {

  static get properties(){
    return {
      cProp: {
        type: String,
        notify: true
      }
    };
  }
  static get template(){
    return html`
      [[cProp]]
    `;
  }
  ...
  changeProp(){
    // cProp changes here
    // pProp changes in response
  }
}
```

### lit-element

For performance, there is no two-way data binding. One way to do it is "props down, events up":

parent-element.js

```js
import './child-element.js';

class ParentElement extends LitElement {
  static get properties(){
    return {
      pProp: String
    }
  }
  _render({pProp}){
    return html`
      <child-element 
        on-some-event="${(e) => this.doStuff(e)}" 
        cProp="${pProp}">
      </child-element>
    `;
  }
  doStuff(e){
    this.pProp = e.detail.newVal;
  }
}
```

child-element.js

```js
class ChildElement extends LitElement {
  static get properties(){
    return {
      cProp: String
    }
  }
  _render({cProp}){
    return html`
      ${cProp}
    `;
  }
  changeProp(){
    // cProp changes here
    this.dispatchEvent(new CustomEvent('some-event', detail: {
      newVal: this.cProp}
    ));
  }
}
```

Another way to do it is to implement state management like Redux and have components dispatch requests to update the same store.

## Observers

### Polymer 3.0

```js
static get properties(){
  return {
    cProp: {
      type: String,
      observer: "myObserver"
    }
  }
}
myObserver(newVal, oldVal){
  // do stuff
}
```

### lit-element

* Props declared in `properties` getter are automatically observed. 
* No observers for individual paths or props.
* By default, `_render` will fire when any of the props declared in `properties` changes.
* After a prop change, you can access new and old prop values in `_shouldRender` (before next render) or `_didRender` (after next render).

```js
static get properties(){
  return {
    prop: String
  }
}
_didRender(oldVals, changedProps, newVals){
  if(changedProps.prop){
    // do stuff
  }
}
```

## Complex props

### Polymer 3.0

```js
static get properties(){
  return {
    cProp: {
      type: Object,
      value: function(){return{subProp: 'value'};}
    }
  }
}
static get observers(){
  return ["myFunc(cProp.*)"];
}
myFunc(changes){
  // do stuff with changes.path
  // do stuff with changes.value
}
```

### lit-element

```js
static get properties(){
  return {
    cProp: Object
  }
}
_shouldRender(newVals, changedProps, oldVals){
  // Only fires on object reassignment
  // No subprop observation
}
```

## Conditionals

### Polymer 3.0

```js
static get properties(){
  return {
    cProp: {
      type: Object,
      value: function(){return{subProp: 'value'};}
    }
  }
}
static get observers(){
  return ["myFunc(cProp.*)"];
}
myFunc(changes){
  // do stuff with changes.path
  // do stuff with changes.value
}
```

### lit-element

```js
static get properties(){
  return {
    cProp: Object
  }
}
_shouldRender(newVals, changedProps, oldVals){
  // Only fires on object reassignment
  // No subprop observation
}
```
