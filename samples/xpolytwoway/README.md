
AKA two-way data binding.

In Polymer, two-way data binding is possible. In lit-element, it is not.

**Why not?**

* Performance
* Code legibility
* Better app design and state management paradigms exist

## Polymer 3.0

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

## lit-element

### Props down, events up

One way to do it is "props down, events up":

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

### State management

Another way to do it is to implement state management like Redux and have components dispatch requests to update the same store.
