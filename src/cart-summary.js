import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';

class CartSummary extends LitElement {
  
  constructor() {
    super();
    this.orderValue = 1175 ;
    this.discountValue = 389.10;
    this.totalValue = 785.90;
    this.currency = "kr.";
  }

  static get properties() {
    return {
      orderValue: {
        type: Number
      },
      discountValue: {
        type: Number
      },
      totalValue: {
        type: Number
      },
      currency: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      .cart-summary-container {
        width: 95vw;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .cart-summary-spacer {
        width: 50px;
      }

      .cart-name-value-spacer {
        width: 15px;
      }

      .cart-summary-order {
        font-family: HMAmpersand-Regular;
        letter-spacing: 1px;
        font-size: 15pt;
        font-weight: normal;
        color: rgb(34,34,34);
      }

      .cart-summary-order-value {
        font-family: HMAmpersand-Regular;
        letter-spacing: 1px;
        font-size: 15pt;
        font-weight: normal;
        color: rgb(34,34,34);
      }

      .cart-summary-discount {
        font-family: HMAmpersand-Regular;
        letter-spacing: 1px;
        font-size: 15pt;
        font-weight: normal;
        color: rgb(34,34,34);
      }

      .cart-summary-discount-value {
        font-family: HMAmpersand-Regular;
        letter-spacing: 1px;
        font-size: 15pt;
        font-weight: normal;
        color: rgb(34,34,34);
      }

      .cart-summary-total {
        font-family: HMAmpersand-DemiBold;
        letter-spacing: 1px;
        font-size: 15pt;
        font-weight: bold;
        color: rgb(34,34,34);
      }

      .cart-summary-total-value {
        font-family: HMAmpersand-DemiBold;
        letter-spacing: 1px;
        font-size: 15pt;
        font-weight: bold;
        color: rgb(34,34,34);
      }
    `;
  }

  render(){
    return html`
      
      <div class="cart-summary-container">
        <vaadin-horizontal-layout>
          <div class="cart-summary-order">Order value</div>
          <div class="cart-name-value-spacer"></div>
          <div class="cart-summary-order-value">${this.orderValue.toFixed(2) + " " + this.currency}</div>
        </vaadin-horizontal-layout>
        <div class="cart-summary-spacer"></div>
        <vaadin-horizontal-layout>
          <div class="cart-summary-discount">Discount</div>
          <div class="cart-name-value-spacer"></div>
          <div class="cart-summary-discount-value">${this.discountValue.toFixed(2) + " " + this.currency}</div>
        </vaadin-horizontal-layout>
        <div class="cart-summary-spacer"></div>
        <vaadin-horizontal-layout>
          <div class="cart-summary-total">Total</div>
          <div class="cart-name-value-spacer"></div>
          <div class="cart-summary-total-value">${this.totalValue.toFixed(2) + " " + this.currency}</div>
        </vaadin-horizontal-layout>
      </div>

    `;
  }
}
customElements.define('cart-summary', CartSummary);
