
* [Polymer 3.0](#): `<dom-repeat>`
* [lit-element](#): Expressions

## Polymer 3.0

```js
import '@polymer/polymer/lib/elements/dom-repeat.html';

class CustomElement extends PolymerElement{
  static get properties(){
    return {
      myArray: Array
    }
  }
  constructor(){
    super();
    this.myArray=['this', 'is', 'an', 'array'];
  }
  static get template(){
    return html`
      <p>Template stuff here</p>
      <template is="dom-repeat" items="[[myArray]]">
        <p id="item[[index]]">[[item]]</p>
      </template>
      <p>More template stuff here</p>
    `;
  }
}
```

### lit-element

```js
class CustomElement extends LitElement{
  static get properties(){
    return {
      myArray: Array
    }
  }
  constructor(){
    super();
    this.myArray=['this', 'is', 'an', 'array'];
  }
  _render({myArray}){
    return html`
      <p>Template stuff here</p>
      ${myArray.map((item, index) => `<p id="item${index}">${item}</p>`);}
      <p>More template stuff here</p>
    `;
  }
}
```
