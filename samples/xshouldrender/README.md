
By default, any change to a property declared in the `properties` getter will cause `_render` to fire.

You can use the callback `_shouldRender` to override this behavior and specify which property changes cause an element to render.

```js
class CustomElement extends LitElement {
  // declare props, etc
  // ...

  _render({prop1, prop2, prop3}){
    return html`
      ${prop1}
      ${prop2}
      ${prop3}
    `;
  }
  /** 
   * _shouldRender(props, changedProps, prevProps)
   * 
   * _shouldRender fires when props change. If it returns true, _render() fires.
   * Default is that _shouldRender always returns true. 
   * 
   * Params:
   * 
   * props: An object containing the current values of all of the element's
   *    props, keyed by prop name.
   * 
   * changedProps: An object containing the current values of all of the props 
   *    that have changed since they were last rendered, keyed by prop name.
   * 
   * prevProps: An object containing the value that was last rendered for each 
   *    of the props in changedProps, keyed by prop name.
   */
  _shouldRender(props, changedProps, prevProps){
    console.log('props are now: ', props);
    console.log('props that changed: ', changedProps);
    console.log('previous props were: ', prevProps);

    // You can override _shouldRender if you need to specify which property
    // changes should trigger a render. 
    // E.g. this can only return a truthy value if prop1 is in changedProps:
    return changedProps.prop1;
  }
```
