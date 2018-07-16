
## Polymer 3.0

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

## lit-element

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
