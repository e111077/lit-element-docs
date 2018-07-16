import { LitElement, html } from '@polymer/lit-element';

class CustomElement extends LitElement {  
  static get properties(){
    return {
      prop1: Number,
      prop2: Number,
      prop3: Number
    };
  }
  constructor(){
    super();
    this.prop1 = 1+ Math.floor(Math.random()*100);
    this.prop2 = 1+ Math.floor(Math.random()*100);
    this.prop3 = 1+ Math.floor(Math.random()*100);
  }
  _render({prop1, prop2, prop3}){
    return html`
      <p>prop1: ${prop1} 
        <button on-click="${(e) => this.changeMe(e.target.value)}" value="prop1">Change me</button>
      </p>
      <p>prop2: ${prop2} 
        <button on-click="${(e) => this.changeMe(e.target.value)}" value="prop2">Change me</button>
      </p>
      <p>prop3: ${prop3} 
        <button on-click="${(e) => this.changeMe(e.target.value)}" value="prop3">Change me</button>
      </p>

      <button on-click="${(e) => this.changeMe(e.target.value)}" value="all">Change all</button>
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
   *    props, keyed by prop name
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
  changeMe(value){
    if(value=='all'){
      this.prop1 = 1+ Math.floor(Math.random()*100);
      this.prop2 = 1+ Math.floor(Math.random()*100);
      this.prop3 = 1+ Math.floor(Math.random()*100);
    } else {
      this[value]=1+ Math.floor(Math.random()*100);
    }
  }
}

customElements.define('custom-element', CustomElement);
