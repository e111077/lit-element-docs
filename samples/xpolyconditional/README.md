
* [Polymer 3.0](#): `<dom-if>`
* [lit-element](#): Expressions

## Polymer 3.0

```js
import '@polymer/polymer/lib/elements/dom-if.html';

class CustomElement extends PolymerElement{
  static get properties(){
    return {
      myBool: Boolean
    }
  }
  constructor(){
    super();
    this.myBool=false;
  }
  static get template(){
    return html`
      <p>Template stuff here</p>
      <template is="dom-if" if="[[myBool]]">
        <p>Display this only when myBool is true</p>
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
      myBool: Boolean
    }
  }
  constructor(){
    super();
    this.myBool=false;
  }
  _render({myBool}){
    return html`
      <p>Template stuff here</p>
      ${myBool?html`<p>Display this only when myBool is true</p>`:''}
      <p>More template stuff here</p>
    `;
  }
}
```
