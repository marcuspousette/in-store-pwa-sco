/**
 * @author fullstackmac <marcus.pousette@mmrsolutions.se>
 * @param { URL } endpoint The API that creates a confirmation request to Klarna
 * @param { String } iframeBoxID A element id to a div that is placed in the root of the body.
 * @dependencies A div element with id={iframeBoxID} that is placed in the root of the body.
 */
import { html, LitElement } from 'lit-element';
export class KlarnaConfirmation extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    const { endpoint } = this;
    const urlParams = new URLSearchParams(window.location.search);
    const order_id = urlParams.get('order_id');
    this.getSnippet(endpoint, { order_id })
      .then(data => this.renderSnippet(data))
      .catch(console.log);
  }

  renderSnippet({ html_snippet }) {
    const checkoutContainer = document.getElementById(this.iframeBoxID);
    checkoutContainer.innerHTML = html_snippet;
    const scriptsTags = checkoutContainer.getElementsByTagName('script');
    // This is necessary otherwise the scripts tags are not going to be evaluated
    for (var i = 0; i < scriptsTags.length; i++) {
      const parentNode = scriptsTags[i].parentNode;
      const newScriptTag = document.createElement('script');
      newScriptTag.type = 'text/javascript';
      newScriptTag.text = scriptsTags[i].text;
      parentNode.removeChild(scriptsTags[i]);
      parentNode.appendChild(newScriptTag);
    }
  }

  static get styles() {}

  static get properties() {
    return {
      endpoint: { type: URL },
      iframeBoxID: { type: String },
    };
  }

  constructor() {
    super();
  }

  async getSnippet(url, data) {
    const request = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    };
    const response = await fetch(url, request);
    return response.json();
  }

  render() {
    return html``;
  }
}

customElements.define('klarna-confirmation', KlarnaConfirmation);
