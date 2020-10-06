import { LitElement, html, css } from 'lit-element';
import { Item } from './item.js';
import './klarna-checkout.js';

export class viewCheckout extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.fakeItems = this.createFakeItems();
    this.endpoint = 'https://iswac-sco-poc-klarna.herokuapp.com/checkout';
    this.DEV_endpoint = 'http://localhost:3000/checkout';
    this.iframeBoxID = 'klarna-checkout__html_snippet-container';
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  createFakeItems() {
    const whiteprice = 17050,
      gtin = 'sadasr546412ad',
      productid = 'zvxasfzxcv23aasd',
      discountprice = 17050,
      currency = '',
      color = 'red',
      size = 'large',
      description = 'A nice red shirt',
      imageSource = 'https://www.lundcity.se/wp-content/uploads/2015/11/hm.png',
      quantity = 2,
      name = 'Red shirt',
      item = new Item(
        gtin,
        productid,
        whiteprice,
        discountprice,
        currency,
        color,
        size,
        description,
        imageSource,
        quantity,
        name
      );

    return [item, item];
  }

  render() {
    return html`
      <main>
        <klarna-checkout
          .items=${this.fakeItems}
          .endpoint=${this.endpoint}
          .iframeBoxID=${this.iframeBoxID}
        >
        </klarna-checkout>
      </main>
    `;
  }
}

customElements.define('view-checkout', viewCheckout);
