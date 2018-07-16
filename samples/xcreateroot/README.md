
Implement lit-element's `_createRoot` function to specify where to render your element's template.

* [Create a shadow-root and render into it](#createashadowrootandrenderintoit) 
* [Render to your custom element's children in light DOM](#rendertoyourcustomelementschildreninlightdom)
* [Render into some other node](#renderintosomeothernode)

## Create a shadow root and render into it

By default, lit-element creates a shadow root and renders your template into it, producing a DOM tree like this:

```html
<custom-element-default>
  #shadow-root
    <h1>Hi</h1>
</custom-element-default>
```

To produce the DOM tree above:

**custom-element-default.js**

```js
class CustomElementDefault extends LitElement {  
  _render(){
    return html`
      <h1>hi</h1>
    `;
  }
}
```

**index.html** 

```html
<custom-element-default></custom-element-default>
```

## Render to your custom element's children in light DOM

You can avoid creating shadow DOM and render directly into your element's children in light DOM. To produce the following DOM tree:

```html
<custom-element-this>
  <h1>Hi</h1>
</custom-element-this>
```

Return the custom element instance (`this`) from `_createRoot`:

**custom-element-this.js**

```js
class CustomElementThis extends LitElement {  
  _createRoot(){
    return this;
  }
  _render(){
    return html`
      <h1>hi</h1>
    `;
  }
}
```

**index.html** 

```html
<custom-element-this></custom-element-this>
```

## Render into some other node

To render into the light DOM of some other node, return that node from `_createRoot`. For example, in the following DOM tree, the lit-element node is empty, and its template has been rendered into a div element:

```html
<div id="mydiv">
  <h1>Hi</h1>
</div>
<custom-element-mydiv></custom-element-mydiv>
```

To produce the DOM tree above, return the div element with `id="mydiv"` from `_createRoot`:

**custom-element-mydiv.js**

```js
class CustomElementMydiv extends LitElement {  
  _createRoot(){
    return document.getElementById('mydiv');
  }
  _render(){
    return html`
      <h1>hi</h1>
    `;
  }
}
```

**index.html** 

```html
<div id="mydiv"></div>
<custom-element-mydiv></custom-element-mydiv>
```
