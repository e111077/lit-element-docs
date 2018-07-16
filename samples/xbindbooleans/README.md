
In `custom-element.js`, inside a tagged JavaScript template literal: 

```html
<element hidden?=${myProp}></element>
```

In markup: 

```html
<custom-element myProp="true"></custom-element>
```

**custom-element.js**

```js
class CustomElement extends LitElement {  
  static get properties(){
    return {
      hideTextarea: Boolean
    };
  }
  constructor(){
    super();
    this.hideTextarea = false;
  }
  _render({hideTextarea}){
    return html`
      <p>I have a textarea. It might be hidden.</p>
      <textarea hidden?=${hideTextarea}>Nope, not hidden right now.</textarea>
    `;
  }
}
```

**index.html**

```html
<custom-element hideTextarea></custom-element>
<br/>
<custom-element></custom-element>
```

_Avoid these pitfalls. They won't do what they're intended to do:_

```html
<!-- 
  don't do this: 
  <custom-element hideTextarea="false"></custom-element>
  
  or this:
  <custom-element hideTextarea=false></custom-element>
-->
```
