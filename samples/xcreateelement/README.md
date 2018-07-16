
* [Write your custom element class](#writeyourcustomelementclass).
* [Use your custom element in an HTML document](#useyourcustomelementinanhtmldocument).

## Write your custom element class

* Import the `LitElement` base class and the `html` helper function. 
* Extend the `LitElement` base class to create a class for your new custom element.
* Define your element's properties.
* Define your element's template.
* Register the custom element with the browser.

**custom-element.js**

```js
// Import the lit-element base class and the html helper function.
import { LitElement, html } from '@polymer/lit-element';

// Extend the LitElement base class to create a class for your element.
class CustomElement extends LitElement {  

  // Define your element's properties.
  static get properties(){
    return {
      name: String
    };
  }

  // Define your element's HTML template.
  _render({name}){
    // Use the html helper function to return a lit-html TemplateResult.
    return html`
      <h1>Hello ${name}!</h1>
    `;
  }
}

// Register your element with the browser.
customElements.define('custom-element', CustomElement);
```

## Use your custom element in an HTML document

Import and use your custom element in an HTML document. Include the [WebComponents polyfills](https://github.com/webcomponents/webcomponentsjs) for browser compatibility.

**index.html**

```html
<head>
  <!-- Include polyfills for browser compatibility. -->
  <script src="path/to/webcomponents-bundle.js"></script>
  <!-- Import your custom element. Note that the script tag's "type"
       property must be "module". -->
  <script type="module" src="./custom-element.js"></script>
</head>

<body>
  <!-- Use your custom element in markup. -->
  <custom-element name="World"></custom-element>
</body>
```
