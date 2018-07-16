
## Polymer 3.0

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

## lit-element

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
