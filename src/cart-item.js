import { LitElement, html, css } from 'lit-element';

class CartItem extends LitElement {
  
  constructor() {
    super();

    this.img_src = '';
    this.img_src_missing = "data:image/png;base64,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";
    this.name = '';
    this.gtin='';
    this.white_price = '';
    this.discount_price = '';
    this.currency = '';
    this.art_nr = '';
    this.color = '';
    this.size = '';
    this.cart_id = null;
  }

  static get properties() {
    return {
      data:           { type: Object },
      img_src:        { type: String },
      name:           { type: String },
      white_price:    { type: String },
      discount_price: { type: String },
      currency:       { type: String },
      art_nr:         { type: String },
      gtin:           { type: String },
      color:          { type: String },
      size:           { type: String },
      uuid:           { type: String }
    };
  }

  removeItemFromCart() {
    setTimeout(function(){ 

    }, 300);
    let removeItemClicked = new Event("removeItemClicked");
    this.dispatchEvent(removeItemClicked);
  }

  static get styles() {
    return css`
      /* --------------------------------------------- */
      /* Global custom elements */
      element {
          --item-description-row-width: 230px;
          --item-description-row-backgroundcolor: rgb(250,249,248);
          --column-height: 165px;
      }

      /* --------------------------------------------- */
      /* Cart item*/
      .cart-item-container {
          padding: 0px;
          border: 0px;
          width: 375px;
          border-radius: 0px;
          background-color: rgb(250, 249, 248);
          display: flex;
          justify-content: center;
      }
      .cart-item {
          border: 0px;
          padding: 0px;
          width: 325px;
          display: flex;
          justify-content: left;
      }

      /* --------------------------------------------- */
      /* cart components */
      .cart-item-name {
          font-family: HMAmpersand-Regular;
          letter-spacing: 1px;
          font-size: 9pt;
          font-weight: bold;
          color: rgb(34,34,34);
      }
      .cart-item-whiteprice {
          font-family: HMAmpersand-Regular;
          letter-spacing: 1px;
          font-size: 10pt;
          font-weight: normal;
          color: rgb(34,34,34);
      }
      .cart-item-whiteprice-when-discount {
          font-family: HMAmpersand-Regular;
          letter-spacing: 1px;
          font-size: 7pt;
          font-weight: normal;
          text-decoration: line-through;
          color: rgb(34,34,34);
      }
      .cart-item-discountprice {
          font-family: HMAmpersand-Regular;
          letter-spacing: 1px;
          font-size: 10pt;
          font-weight: normal;
          color: rgb(213, 0, 33);
      }
      .cart-item-currency {
          font-family: HMAmpersand-Regular;
          letter-spacing: 1px;
          font-size: 10pt;
          font-weight: normal;
          color: rgb(34,34,34);
      }
      .cart-item-inteminfo {
          font-family: HMAmpersand-Regular;
          letter-spacing: 1px;
          font-size: 8pt;
          font-weight: normal;
          color: rgb(34,34,34);
      }
      .cart-item-image {
          height: 152px;
      }
      .cart-item-button-remove {
          float: right;
          opacity: 1;
          transition: 0.3s;
      }
      .cart-item-button-remove:hover {
          opacity: 0.4;
      }

      /* --------------------------------------------- */
      /* Item description columns */
      .cart-item-column-image {
          width: 105px;
          padding:5px;
          display: flex;
          justify-content: center;
      }
      .cart-item-column-spacer {
          width: 10px;
      }
      .cart-item-column-description {
          width: 200px;
          padding-bottom: 5px;
      }

      /* --------------------------------------------- */
      /* Item description rows */

      .cart-item-column-description-row-remove {
          width: 200px;
          height: 20px;
      }
      .cart-item-column-text-row-topspacer {
          height: 5px;
      }
      .cart-item-column-description-row-name {
          width: var(--item-description-row-width);
          height:20px;
      }
      .cart-item-column-description-row-price {
          width: var(--item-description-row-width);
          height:35px;

      }
      .cart-item-column-description-row-inteminfo {
          width: var(--item-description-row-width);
          display: flex;
          justify-content: left;
      }
      .cart-item-column-description-row-inteminfo-left {
          width: 100px;
      }
      .cart-item-column-description-row-inteminfo-right {
          width: 100px;
      }
    `;
  }

  render(){
    return html`
      <div class="cart-item-container">
        <div class="cart-item">
          <div class="cart-item-column-image">
            ${(this.img_src === "") ?
                html`<img class="cart-item-image" src="${this.img_src_missing}">` :
                html`<img class="cart-item-image" src="${this.img_src}">`}      
          </div>
          <div class="cart-item-column-spacer">
          </div>
          <div class="cart-item-column-description">
            <div class="cart-item-column-text-row-topspacer">
            </div> 
            <div class="cart-item-column-spacer">
            </div>
            <div class="cart-item-column-description-row-remove">
              <img id="my-element" @click="${this.removeItemFromCart}" class="cart-item-button-remove" src="data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%3EFoundation%20%2F%20Icon%20%2F%2024%20%2F%20Control%20%2F%20Close%3C%2Ftitle%3E%3Cdefs%3E%3Cpath%20d%3D%22M12%2011.29L21.29%202l.71.71L12.71%2012%2022%2021.29l-.71.71L12%2012.71%202.71%2022%202%2021.29%2011.29%2012%202%202.71%202.71%202%2012%2011.29z%22%20id%3D%22prefix__a%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cuse%20fill%3D%22%23222%22%20xlink%3Ahref%3D%22%23prefix__a%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E">
            </div>

            <div class="cart-item-column-description-row-name">
              <span class="cart-item-name">${this.name}</span>
            </div>
            <div class="cart-item-column-description-row-price">
              ${(this.discount_price === "") ?
                html`<span class="cart-item-whiteprice">${this.white_price}</span>` :
                html`<span class="cart-item-discountprice">${this.discount_price}</span> <span class="cart-item-whiteprice-when-discount">${this.white_price}</span>`}
              <span class="cart-item-currency"> ${this.currency}</span>
            </div>

            <div class="cart-item-column-description-row-inteminfo">
              <div class="cart-item-column-description-row-inteminfo-left">
                <span class="cart-item-inteminfo">Art.nr:</span>
              </div>
              <div class="cart-item-column-description-row-inteminfo-right">
                <span class="cart-item-inteminfo">${this.art_nr}</span>
              </div>
            </div>

            <div class="cart-item-column-description-row-inteminfo">
              <div class="cart-item-column-description-row-inteminfo-left">
                <span class="cart-item-inteminfo">Color:</span>
              </div>
              <div class="cart-item-column-description-row-inteminfo-right">
                <span class="cart-item-inteminfo">${this.color}</span>
              </div>
            </div>

            <div class="cart-item-column-description-row-inteminfo">
              <div class="cart-item-column-description-row-inteminfo-left">
                <span class="cart-item-inteminfo">Size:</span>
              </div>
              <div class="cart-item-column-description-row-inteminfo-right">
                <span class="cart-item-inteminfo">${this.size}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('cart-item', CartItem);
