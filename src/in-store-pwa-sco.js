import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x';
import { GS1Parser } from './gs1-parser.js';
//import 'item.js';

import './view-start.js';
import './view-cart.js';

//klarna views
import './view-checkout.js';
import './view-confirmation.js';

export class InStorePwaSco extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  constructor() {
    super();
    var router;
    var scannerPicker;
  }

  firstUpdated() {
    this.router = new Router(this.shadowRoot.getElementById('outlet'));
    this.router.setRoutes([
      {
        path: '/',
        animate: false,
        children: [
          { path: '/start', component: 'view-start' },
          { path: '/cart', component: 'view-cart' },

          // Klarna routes
          { path: '/checkout', component: 'view-checkout' },
          { path: '/confirmation', component: 'view-confirmation' },
        ],
      },
    ]);

    const scannerPicker = this.shadowRoot.getElementById(
      'scandit-barcode-picker'
    );
    scannerPicker.addEventListener('scanned', event => {
      this.addItemToCart(event.detail);
    });

    ScanditSDK.configure(
      'AeqO+1weQ416FGqLli6b80omKuPUM/SsBXKdNsAapJuAQXNAQ37Xx91RbhoASpGAnD5wHjZugk/cR/FprFHiUC97g8/+IVwxOk6R00wwMx2SVbznEnYLER1AcdkQTrtI9FONv+s+VLaAWX4G3lIndml8pesra4CPVDINiC9FP1deJQ6i9gIvLoOHsp/Pl16NyRHgAV0KFjY1bReuY4alkW7/IVcAO31RmaGmiMZ8JXLQ8XsjSvn1FWEYbRjmB94D6/M+zBvv/cUzkFequxC15dBXZJFQidlIvGjBbjxkHzNcNTysT8/7le/CegaXnr63bAAJZrH+wqGCe2JJZq5fAL0O+oSrWCnca/e5YwECU6TBl0xgc/eaaRfNQnALlVv+joid84/AjPil+X4xOr9mMiPd2AbEGyIxJDgPgPXeZts3XaOI/iJSjlqbAKxTrCiflR7wxVL7NnuJUB+wFkphXPxC89yHPYdYSq8raA/sqJ+9pRyeUH3FvEtAtUTbC+9mJlM8KI9NgHYJgbPVt2N/00bPkiMP9kwtaIb1blFZ0QIPKD9BzQ9gvub5H1D1ZkpK5+86GzjiTW/ErJz3CeyYHL6ha9zOIwftClR2aluEEJrRt1DmX8G24REoCSX08+sPjnTo2jDLBvUKPH5RAALEKwdudanAtA53XSi9cznzbQMo8IpyiM2cJfC1onfUO2CcLFNdPZuzJjWYdoOD9hbovAbWoAZQO2gBZ4tIG21dznVKfrt69mK/AxdP51BZr2YRIfVbJ+WgqTJjnqkKe9jzsM0ou6sy25YRFn1iltk9TB3RBoqnONwfkutxP/52gaTL2GN4wVArSJ0gVz0w3ZP5+NEcIyUr',
      {
        engineLocation: 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/',
      }
    ).then(() => {
      ScanditSDK.BarcodePicker.create(scannerPicker, {
        playSoundOnScan: false,
        vibrateOnScan: false,
      }).then(barcodePicker => {
        var scanSettings = new ScanditSDK.ScanSettings({
          enabledSymbologies: ['data-matrix', 'itf', 'qr'],
          codeDuplicateFilter: 2000,
        });
        barcodePicker.applyScanSettings(scanSettings);

        barcodePicker.on('scan', function (scanResult) {
          scanResult.barcodes.reduce((string, barcode) => {
            if (barcode.symbology == 'data-matrix') {
              console.log('Type: DataMatrix');
              scannerPicker.dispatchEvent(
                new CustomEvent('scanned', {
                  bubbles: true,
                  composed: true,
                  detail: barcode,
                })
              );
            } else if (barcode.symbology == 'qr') {
              console.log('Type: QR');
              scannerPicker.dispatchEvent(
                new CustomEvent('scanned', {
                  bubbles: true,
                  composed: true,
                  detail: barcode,
                })
              );
            }
          }, '');
        });
      });
    });
  }

  addItemToCart(barcode) {
    let gs1 = GS1Parser(barcode.data);

    gs1.forEach(element => {});

    console.log(gs1.parsedCodeItems[0]);

    /*
            fetch('assets/items.json').then(response => {
              return response.json();
            })
            .then(response => {
                this.productList = response;
                this.addDefaultItemsToCart(response);
            });
        */
    //https://instorepwacheckoutapi.azurewebsites.net/api/v1/InStorePwaApi/getProductIdByGtin/07313921410296
    //Item item = new Item();
  }

  removeItemFromCart() {}
  addMembership() {}

  static get styles() {
    return css`
      #scandit-barcode-picker {
        visibility: hidden;
      }
    `;
  }

  render() {
    return html`
      <div id="scandit-barcode-picker"></div>

      <div class="outlet-container">
        <div id="outlet"></div>
      </div>

      <!--
                                                                                                            <view-cart></view-cart>
                                                                                                            <view-start></view-start>
                                                                                                        -->
    `;
  }
}

customElements.define('in-store-pwa-sco', InStorePwaSco);
