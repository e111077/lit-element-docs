
## Polymer 3.0 

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

## lit-element

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
