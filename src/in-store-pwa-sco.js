import { LitElement, html, css } from 'lit-element';
import {Router} from '@vaadin/router';
import 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x';
import './view-start.js';
import './view-cart.js';

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
      var barcodePicker;
  }

  firstUpdated() {
      this.barcodePicker = this.shadowRoot.getElementById('barcodePicker');
      this.barcodePicker.addEventListener('scan', event => {
        //this.barcodePicker = new Router(this.shadowRoot.getElementById('scandit-barcode-picker'));
        console.log("Barcode scanned successfully!");
        this.barcodePicker.picker.pauseScanning();
        console.log("Scanning paused");
        
      });

    this.router = new Router(this.shadowRoot.getElementById('outlet'));
    this.router.setRoutes([{
      path: '/',
      animate: false,
      children: [
        {path: '/start', component: 'view-start'},
        {path: '/cart', component: 'view-cart'},
      ]
    }]);

    const barcodePickerElement = this.shadowRoot.getElementById("barcodePicker");
    barcodePickerElement.addEventListener("scan", function (scanResult) {
      /*
      alert(
        scanResult.barcodes.reduce(function (string, barcode) {
          return string + ScanditSDK.Barcode.Symbology.toHumanizedName(barcode.symbology) + ": " + barcode.data + "\n";
        }, "")
      );
      */
     console.log(scanResult);

    });
  }

  static get styles() {
    return css`
      #barcodePicker {
        visibility: hidden;
      }
    `;
  }

  render() {
    return html`
      <scandit-barcode-picker
          id="barcodePicker"
          configure.licenseKey="AeqO+1weQ416FGqLli6b80omKuPUM/SsBXKdNsAapJuAQXNAQ37Xx91RbhoASpGAnD5wHjZugk/cR/FprFHiUC97g8/+IVwxOk6R00wwMx2SVbznEnYLER1AcdkQTrtI9FONv+s+VLaAWX4G3lIndml8pesra4CPVDINiC9FP1deJQ6i9gIvLoOHsp/Pl16NyRHgAV0KFjY1bReuY4alkW7/IVcAO31RmaGmiMZ8JXLQ8XsjSvn1FWEYbRjmB94D6/M+zBvv/cUzkFequxC15dBXZJFQidlIvGjBbjxkHzNcNTysT8/7le/CegaXnr63bAAJZrH+wqGCe2JJZq5fAL0O+oSrWCnca/e5YwECU6TBl0xgc/eaaRfNQnALlVv+joid84/AjPil+X4xOr9mMiPd2AbEGyIxJDgPgPXeZts3XaOI/iJSjlqbAKxTrCiflR7wxVL7NnuJUB+wFkphXPxC89yHPYdYSq8raA/sqJ+9pRyeUH3FvEtAtUTbC+9mJlM8KI9NgHYJgbPVt2N/00bPkiMP9kwtaIb1blFZ0QIPKD9BzQ9gvub5H1D1ZkpK5+86GzjiTW/ErJz3CeyYHL6ha9zOIwftClR2aluEEJrRt1DmX8G24REoCSX08+sPjnTo2jDLBvUKPH5RAALEKwdudanAtA53XSi9cznzbQMo8IpyiM2cJfC1onfUO2CcLFNdPZuzJjWYdoOD9hbovAbWoAZQO2gBZ4tIG21dznVKfrt69mK/AxdP51BZr2YRIfVbJ+WgqTJjnqkKe9jzsM0ou6sy25YRFn1iltk9TB3RBoqnONwfkutxP/52gaTL2GN4wVArSJ0gVz0w3ZP5+NEcIyUr"
          configure.engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/"
          playSoundOnScan="true"
          scanSettings.enabledSymbologies='["data-matrix", "itf","qr"]'
        ></scandit-barcode-picker>

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