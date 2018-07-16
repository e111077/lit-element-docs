
Basic syntax inside a tagged JavaScript template literal is:

```html
<element prop="${myProp}"><element> 
```

In your custom element class, do:

```js
_render({myProp}){
  return html`
    <img src="${myProp}" alt="Helpful alt text"></src>
  `;
}
```

In HTML, do:

```html
<custom-element myProp="value of myProp"></custom-element>
```

Note that lit-element **does not** transform `camelCase` properties to `dash-case`. 

**custom-element.js**

```js
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

  this.url="https://thecatapi.com/api/images/get?id=eb9";
  this.altText="A cat poking its head out from under some bedding.";
  this.imgWidth=500;
}
// Define your element's HTML template.
_render({url, altText, imgWidth}){
  return html`
    <img src="${url}" alt="${altText}" width="${imgWidth}"></img>
  `;
}
```

**index.html**

```html
<custom-element
  url="https://thecatapi.com/api/images/get?id=4of"
  altText="A gif of an adult cheetah popping her head up from a bunch of cheetah cubs.">
</custom-element>
```
