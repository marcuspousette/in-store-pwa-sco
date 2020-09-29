import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import './cart-item.js';
import './cart-summary.js';
import './membership-status-bar.js';

import { klarnaLogo } from './images/klarna-logo.js';
import { flagOfSweden } from './images/flag-of-sweden.js';
import { deactivateTags } from './images/deactivate-tags.js';
import { scanTags } from './images/scan-tags.js';
import { arrowDownWhite } from './images/arrow-down-white.js';

export class viewCart extends LitElement {
  static get properties() {
    return {
        cart: { type: Object },
    };
  }

  static get styles() {
    return css`
        /* Element styling */
        /* --------------------------------------------- */
        main {
            flex-grow: 1;
        }

        /* Header styling */
        /* --------------------------------------------- */
        .header {
            position: fixed;
            width:  100vw;
            top: 25px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 0px solid rgba(0, 0, 0, 0.1);
        }

        .header-block-left {
            width: 30%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: left;
            border: 0px solid rgba(0, 0, 0, 0.1);
        }

        .header-block-center {
            width: 40%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0px solid rgba(0, 0, 0, 0.1);
        }

        .header-block-right {
            width: 30%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: left;
            border: 0px solid rgba(0, 0, 0, 0.1);
        }

        .title {
            font-family: HMAmpersand-Bold;
            font-size: 25pt;
            color: rgba(34, 34, 34, 1);
        }

        /* Horizontal ruler styling */
        /* --------------------------------------------- */
        .top-ruler-container {
            position: fixed;
            width:  100vw;
            top: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .bottom-ruler-container {
            position: fixed;
            width:  100vw;
            top: 750px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Content row styling */
        /* --------------------------------------------- */
        .cart-container {
            position: fixed;
            width: 100vw;
            height: 490px;
            top: 175px;
            border: 0px solid rgba(34, 34, 34, 1);
            //background-color: blue;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .cart {
            padding-top: 160px;
            position: relative;
            width: 95vw;
            //background-color: orange;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            overflow-y: auto;
        }

        .cart-row {

            margin-top: 0px;
        }

        .cart-column {
            width: 375px;
            height: 100%;
            //margin: 0 20px 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0px solid rgba(0, 0, 0, 0.1);
        }

        .cart-summary-container {
            position: fixed;
            width:  100vw;
            top: 775px;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Membership styling */
        /* --------------------------------------------- */
        .membership-status-container {
                position: fixed;
                width:  100vw;
                height: 50px;
                top: 690px;
                display: flex;
                align-items: center;
                justify-content: center;
        }

        /* Footer styling */
        /* --------------------------------------------- */
        .footer {
            position: fixed;
            width: 100vw;
            height: 150px;
            top: calc(100% - 149px);
            display: flex;
            align-items: top;
            justify-content: flex-end;
        }

        .button-help {
            width: 400px;
            height: 120px;
            margin-right: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: right;
            border: 2px solid rgba(34, 34, 34, 1);

            font-family: HMAmpersand-Regular;
            font-size: 20pt;
            letter-spacing: 3px;
            color: rgba(34, 34, 34, 1);
        }

        .button-continue {
            width: 550px;
            height: 120px;
            margin-right: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(34, 34, 34, 1);
            border: 2px solid rgba(34, 34, 34, 1);

            font-family: HMAmpersand-Regular;
            font-size: 20pt;
            letter-spacing: 3px;
            color: rgba(255, 255, 255, 1);
        }


        /* Assets styling & animations */
        /* --------------------------------------------- */
        .flag-of-sweden {
            width: 150px;
            clip-path: circle(45px at center);
        }

        .scan-tags {
            width: 200px;
            margin-top: 75px;
        }

        .klarna-logo {
            width: 200px;
            margin-top: 95px;
        }

        .deactivate-tags {
            width: 220px;
            margin-top: 90px;
        }

        .arrow-down-white {
            width: 60px;
            margin-top: 100px;
            position: relative;
            animation-name: move-arrow;
            animation-duration: 2500ms;
            animation-iteration-count: infinite;
            animation-timing-function: ease;
        }

        .line {
            position: absolute;
            width: 95%;
            border-top: 1px solid rgba(175, 175, 175, 1);
        }

        @keyframes move-arrow {
            0%   { top: 0px; }
            50%   { top: 10px; }
            100% { top: 0px; }
        }
    `;
  }

  render() {
    return html`
        <main>
            <vaadin-horizontal-layout class="header">
                <div class="header-block-left">
                    <div class="flag-of-sweden">${flagOfSweden}</div>
                </div>
                <div class="header-block-center">
                    <div class="title">Shoppingbag</div>
                </div>
                <div class="header-block-right">

                </div>
            </vaadin-horizontal-layout>
            
            <div class="top-ruler-container">
                <div class="line"></div>
            </div>

            <div class="cart-container">
                <div class="cart">
                    <vaadin-horizontal-layout class="cart-row">
                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0824878001/assetType/descriptiveStillLife/rendition/medium" name="Stickad tröja" white_price="129.00" discount_price="" currency="kr." art_nr="0824878001" color="Ljusrosa/Grå" size="170" gtin="[object Object]" uuid="7da6fc64-85a5-4fb2-9c92-277dd283bda9"></cart-item>
                        </div>

                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0540338003/assetType/descriptiveStillLife/rendition/medium" name="Jeansjacka" white_price="499.00" discount_price="199.00" currency="kr." art_nr="0540338003" color="Rosa denim" size="S" gtin="[object Object]" uuid="cadd0704-09ab-4d06-b71d-ff1715ac8aea"></cart-item>
                        </div>

                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0785706001/assetType/descriptiveStillLife/rendition/medium" name="Pilejacka med ståkrage" white_price="249.00" discount_price="" currency="kr." art_nr="0785706001" color="Crèmevit" size="M" gtin="[object Object]" uuid="5a3b2ec6-8dd3-45ff-bb5f-f0fcd7b17502"></cart-item>
                        </div>
                    </vaadin-horizontal-layout>

                    <vaadin-horizontal-layout class="cart-row">
                        <div class="cart-column">
                            <cart-item  img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0824878001/assetType/descriptiveStillLife/rendition/medium" name="Stickad tröja" white_price="129.00" discount_price="" currency="kr." art_nr="0824878001" color="Ljusrosa/Grå" size="170" gtin="[object Object]" uuid="7da6fc64-85a5-4fb2-9c92-277dd283bda9"></cart-item>
                        </div>

                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0540338003/assetType/descriptiveStillLife/rendition/medium" name="Jeansjacka" white_price="499.00" discount_price="199.00" currency="kr." art_nr="0540338003" color="Rosa denim" size="S" gtin="[object Object]" uuid="cadd0704-09ab-4d06-b71d-ff1715ac8aea"></cart-item>
                        </div>

                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0785706001/assetType/descriptiveStillLife/rendition/medium" name="Pilejacka med ståkrage" white_price="249.00" discount_price="" currency="kr." art_nr="0785706001" color="Crèmevit" size="M" gtin="[object Object]" uuid="5a3b2ec6-8dd3-45ff-bb5f-f0fcd7b17502"></cart-item>
                        </div>
                    </vaadin-horizontal-layout>
                    
                    <vaadin-horizontal-layout class="cart-row">
                        <div class="cart-column">
                            <cart-item  img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0824878001/assetType/descriptiveStillLife/rendition/medium" name="Stickad tröja" white_price="129.00" discount_price="" currency="kr." art_nr="0824878001" color="Ljusrosa/Grå" size="170" gtin="[object Object]" uuid="7da6fc64-85a5-4fb2-9c92-277dd283bda9"></cart-item>
                        </div>

                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0540338003/assetType/descriptiveStillLife/rendition/medium" name="Jeansjacka" white_price="499.00" discount_price="199.00" currency="kr." art_nr="0540338003" color="Rosa denim" size="S" gtin="[object Object]" uuid="cadd0704-09ab-4d06-b71d-ff1715ac8aea"></cart-item>
                        </div>

                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0785706001/assetType/descriptiveStillLife/rendition/medium" name="Pilejacka med ståkrage" white_price="249.00" discount_price="" currency="kr." art_nr="0785706001" color="Crèmevit" size="M" gtin="[object Object]" uuid="5a3b2ec6-8dd3-45ff-bb5f-f0fcd7b17502"></cart-item>
                        </div>
                    </vaadin-horizontal-layout>

                    <vaadin-horizontal-layout class="cart-row">
                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0368300015/assetType/descriptiveStillLife/rendition/medium" name="Bomullsshorts" white_price="149.00" discount_price="59.90" currency="kr." art_nr="0368300015" color="Röd" size="M" gtin="[object Object]" uuid="f433bd65-d024-4bb6-8f67-4a7b8c278f87"></cart-item>
                        </div>

                        <div class="cart-column">
                            <cart-item img_src="https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getResourceUrlByProductId/0820526002/assetType/descriptiveStillLife/rendition/medium" name="Joggers" white_price="149.00" discount_price="" currency="kr." art_nr="0820526002" color="Ljusbeige/Revärer" size="152" gtin="[object Object]" uuid="66ab31f9-53cf-4461-b73c-4987ed4f3a77"></cart-item>
                        </div>

                        <div class="cart-column">
                            
                            </div>
                    </vaadin-horizontal-layout>
                </div>
            </div>

            <div class="membership-status-container">
                <membership-status-bar membershipRegistered="true"></membership-status-bar>
            </div>

            <div class="bottom-ruler-container">
                <div class="line"></div>
            </div>

            <div class="cart-summary-container">
                <cart-summary></cart-summary>
            </div>

            <div class="footer">
                <vaadin-horizontal-layout>
                    <div>
                    </div>
                    <div>
                    <div class="button-help">HELP</div>
                    </div>
                    <div>
                        <div class="button-continue">CONTINUE</div>
                    </div>
                </vaadin-horizontal-layout>
            </div>
        </main>
    `;
  }
}

customElements.define('view-cart', viewCart);