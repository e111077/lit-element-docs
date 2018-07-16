
In your element class: 

* Declare property names and types in a static `properties` getter.
* Initialize property values in the element constructor.
* Pass the properties used in the element's template to the `_render` function.

In HTML: 

* Supply property values in markup, **or**
* Omit properties from markup, and use the defaults set in the constructor.

**custom-element.js**

```js
// Declare property names and types.
static get properties(){
  return {
    adjective: String,
    level: Number
  };
}

constructor(){
  // Always call superconstructor first.
  super();

  // Initialize property values in the constructor.
  this.adjective="awesome";
  this.level=11;
}

// Pass the properties used in the element's template to the `_render` function.
_render({name, adjective}){
  return html`
    <p>This element is ${adjective} at an estimated level of ${level}.</p>
  `;
}
```

**index.html**

```html
<!-- Supply property values in markup -->
<custom-element adjective="great" level="10"></custom-element>

<!-- Or use the default property values set in the constructor -->
<custom-element></custom-element>
```
