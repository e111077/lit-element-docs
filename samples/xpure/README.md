
Given the same inputs, a **pure function** always returns the same outputs, and has no side effects.

* [_render as a pure function of properties](#)
* [Avoid modifying DOM outside _render](#)
* [Remove side effects from _render](#)

## _render as a pure function

A good practice for lit-element is to implement `_render` as a pure function. To do this:

* Describe your element's template only by implementing `_render` as a function of the element's own properties. 
* Ensure that for the same property values, `_render` will always return the same TemplateResult.
* Do not create any side effects in `_render`.

**Example**

```js
class CustomElement extends LitElement{
  static get properties(){
    return {
      // Define the props that will be params for _render().
    };
  }
  constructor(){
    super();
    // Initialize props. 
    // this.prop='';

    // Create any event listeners on the custom element instance (`this`).
    this.addEventListener(
      'some-event', 
      async (e) => this.respondToSomeEvent(e)
    );
  }

  respondToSomeEvent(e){
    // Do some stuff
    await this.renderComplete;
    // Do some other stuff
  }
  
  _render({props}){
    return html`
      // Implement a pure function on props.
    `;
  }
  
  _shouldRender(){
    // Specify which changes should trigger _render().
  }
  
  /*
   * ...
   * 
   * Write your other functions here. You can change the values of props,
   * but you should not manipulate DOM.
   * 
   * ... 
   */
  }
}
```

## Avoid modifying DOM outside _render

`_render` modifies DOM efficiently by passing property values to element templates, such that only the values of the properties are rewritten.

If you find that you need to make modifications to the DOM outside of `_render`, you have a few options:

  *  Rewrite your element to put the data in a prop so that it triggers `_render()` automatically. 

  *  Consider splitting up your element into multiple elements - for example, split up UI logic into multiple app views, each in its own element. This may help simplify your `_render()` function for each one.

  *  Consider using Redux to help manage complex app state.

## Remove side effects from _render()

Move anything unrelated to rendering out of `_render()`. For instance, if you need to do something directly before or after `_render()` is called, move the work to the relevant lifecycle callback.
