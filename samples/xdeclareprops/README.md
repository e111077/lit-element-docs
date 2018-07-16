
* [Declare and initialize properties](#declareandinitializeproperties).
* [Bind properties to other elements](#bindpropertiestootherelements):
    * [Strings and numbers](#stringsandnumbers).
    * [Booleans](#booleans).

## Declare and initialize properties

**`custom-element.js`**

```js
...
  // Define your element's properties.
  static get properties(){
    return {
      adjective: String,
      level: Number
    };
  }
  // Initialize properties in the constructor.
  constructor(){
    // Always call superconstructor first.
    super();
    this.adjective="awesome";
    this.level=11;
  }

  // Define your element's HTML template.
  _render({name, adjective}){
    return html`
      <p>This element is ${adjective} at an estimated level of ${level}.</p>
    `;
  }
}
...
```

**`index.html`**

```html
<!-- Use the property values in the constructor -->
<custom-element></custom-element>

<!-- Or supply property values in markup -->
<custom-element adjective="great" level="10"></custom-element>
```

## Bind properties to other elements

### Strings and numbers

**`cat-api-wrapper.js`**

```js
...
  // Define your element's properties.
  static get properties(){
    return {
      url: String,
      altText: String,
      imgWidth: Number
    };
  }
  // Initialize property values in the constructor.
  constructor(){
    // Always call superconstructor first.
    super();

    this.url="http://thecatapi.com/?id=eb9";
    this.altText="A cat poking its head out from under some bedding.";
    this.imgWidth=500;
  }
  // Define your element's HTML template.
  _render({url, altText, imgWidth}){
    return html`
      <img src="${url}" alt="${altText}" width="${imgWidth}"></img>
    `;
  }
...
```

**`index.html`**

```html
  <!-- You can supply some properties and skip others -->
  <cat-api-wrapper
    url="http://thecatapi.com/?id=4of" 
    altText="A gif of an adult cheetah popping her head up from a bunch of cheetah cubs."
  >
  </cat-api-wrapper>
```

### Booleans

