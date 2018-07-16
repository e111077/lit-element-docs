
## Polymer 3.0

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

## lit-element

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
