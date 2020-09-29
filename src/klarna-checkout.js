import { LitElement, html, css } from 'lit-element';

class KlarnaCheckout extends LitElement {
  
  constructor() {
    super();
  }

  static get properties() {
    return {
      cart: { type: Object }
    };
  }

  static get styles() {
    return css`

    `;
  }

  render(){
    return html`

    `;
  }
}
customElements.define('klarna-checkout', KlarnaCheckout);
