
* [Basic examples](#basicexamples)
* [Pass arbitrary values to an event handler](#passarbitraryvaluestoaneventhandler)

## Basic examples

To add an event handler to a lit-element template, use an `on-event` annotation. We'll use the `click` event to illustrate.

```html
<button on-click="${(event) => { /* do something with event */ }">Click me</button>
```

You can call a function in your element's class:

```html
<button on-click="${(event) => {this.myFunc(event)}}">Click me</button>
```

**custom-element.js**

```js
class CustomElement extends LitElement {
  _render({}) {
    return html`
      <button 
        on-click="${(event) => {console.log(event)}}">
        Log a mouseClick event to the console.
      </button>

      <button 
        value="i <3 lit-element" 
        on-click="${(event) => {this.myFunc(event)}}">
        Do an alert.
      </button>
    `;
  }
  myFunc(event) {
    alert(event.target.value);
  }
}
```

## Pass arbitrary values to an event handler

You can pass arbitrary values to an event handler:

```js
on-click="${(e) => someFunc(e, param1, param2)}"
```

**custom-element.js**

```js
class CustomElement extends LitElement {
  static get properties(){
    return {
      adjective: String
    };
  }

  constructor(){
    super();
    this.adjective="awesome";
  }

  _render({adjective}) {
    return html`
      <button 
        value="World" 
        on-click="${(event) => {this.inform(event.target.value, adjective, 11)}}">
        Inform me of something important.
      </button>
    `;
  }

  inform(entity, adjective, level) {
    var information = 
      'Hello, ' + entity + '!' +
      'This element is ' + adjective +
      ' at an approximate level of ' + level + '.';
    console.log(information);
    alert(information);
  }
}
```
