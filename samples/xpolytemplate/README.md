
## Polymer 3.0

```js
static get template (){
  return html`
    <h1>[[prop]]</h1>
  `;
}
```

## lit-element

```js
_render({prop}){
  return html`
    <h1>${prop}</h1>
  `;
}
```
