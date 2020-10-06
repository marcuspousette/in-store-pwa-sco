import { LitElement, html, css } from 'lit-element';
import './klarna-confirmation.js';

export class viewConfirmation extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.endpoint = 'https://iswac-sco-poc-klarna.herokuapp.com/confirmation';
    this.DEV_endpoint = 'http://localhost:3000/confirmation';
    this.iframeBoxID = 'klarna-confirmation__html_snippet-container';
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <main>
        <klarna-confirmation
          .endpoint=${this.endpoint}
          .iframeBoxID=${this.iframeBoxID}
        >
        </klarna-confirmation>
      </main>
    `;
  }
}

customElements.define('view-confirmation', viewConfirmation);
