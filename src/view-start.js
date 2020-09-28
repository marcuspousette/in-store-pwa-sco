import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import './membership-status-bar.js';

import { klarnaLogo } from './images/klarna-logo.js';
import { flagOfSweden } from './images/flag-of-sweden.js';
import { deactivateTags } from './images/deactivate-tags.js';
import { scanTags } from './images/scan-tags.js';
import { arrowDownWhite } from './images/arrow-down-white.js';

export class viewStart extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
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
            font-size: 35pt;
            color: rgba(34, 34, 34, 1);
        }

        /* Payment options row styling */
        /* --------------------------------------------- */
        .payment-options {
            position: fixed;
            width:  100vw;
            top: 150px;
            border: 0px solid rgba(0, 0, 0, 0.1);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            font-family: HMAmpersand-Bold;
            font-size: 16pt;
            letter-spacing: 2px;
            color: rgba(34, 34, 34, 1);
        }
        .or {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        /* Content row styling */
        /* --------------------------------------------- */
        .workflow {
            position: fixed;
            width:  100vw;
            top: 250px;
            border: 0px solid rgba(0, 0, 0, 0.1);

            display: flex;
            align-items: center;
            justify-content: center;
        }

        .content-block {
            width: 300px;
            height: 100%;
            margin: 0 20px 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0px solid rgba(0, 0, 0, 0.1);
        }

        .image-container {
            width: 100%;
            height: 280px;
            display: flex;
            align-items: center;
            justify-content: center;
            //background-color: rgba(154, 237, 170, 1)
        }

        .step-title-container {
            width: 100%;
            height: 250px;
            margin-top: 50px;
            text-align: center;
        }

        .step-title {
            height: 100px;
            width: 100%;
            font-family: HMAmpersand-Bold;
            font-size: 22pt;
            color: rgba(34, 34, 34, 1);
        } 

        /* Membership styling */
        /* --------------------------------------------- */
        .membership-status-container {
                position: fixed;
                width:  100vw;
                height: 50px;
                top: 750px;

                display: flex;
                align-items: center;
                justify-content: center;
        }

        /* Content row styling */
        /* --------------------------------------------- */
        .footer {
            position: fixed;
            width:  100vw;
            height: 200px;
            top: calc(100% - 200px);
            background-color: rgba(34, 34, 34, 1);
        }

        .footer-block-left {
            width: 30%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: left;
            border: 0px solid rgba(0, 0, 0, 0.1);
        }

        .footer-block-center {
            width: 40%;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0px solid rgba(120, 120, 34, 0.1);

            font-family: HMAmpersand-DemiBold;
            font-size: 26pt;
            letter-spacing: 3px;
            color: rgba(255, 255, 255, 1);
        }

        .footer-block-right {
            width: 30%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0px solid rgba(0, 0, 0, 0.1);
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
            margin-top: 85px;
            position: relative;
            animation-name: move-arrow;
            animation-duration: 2500ms;
            animation-iteration-count: infinite;
            animation-timing-function: ease;
        }

        .line {
            width: 20px;
            margin: 15px;
            border-top: 1px solid rgba(175, 175, 175, 1);
        }

        @keyframes move-arrow {
            0%   { top: 0px; }
            50%  { top: 10px; }
            50%  { top: 15px; }
            50%  { top: 20px; }
            50%  { top: 25px; }
            50%  { top: 30px; }
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
                    <div class="title">Self Checkout</div>
                </div>
                <div class="header-block-right">
                </div>
            </vaadin-horizontal-layout>

            <div class="payment-options">
                    <p>Pay with card</p>
                    <div class="or"><div class="line"></div>or<div class="line"></div></div>
                    <p>Pay later</p>
            </div>

            <vaadin-horizontal-layout class="workflow">

                <vaadin-vertical-layout class="content-block">
                    <div class="image-container">
                        <div class="scan-tags">${scanTags}</div>
                    </div>
                    <div class="step-title-container">
                        <p class="step-title">1. Scan price tags</p>
                    </div>
                </vaadin-vertical-layout>

                <vaadin-vertical-layout class="content-block">
                    <div class="image-container">
                        <div class="klarna-logo">${klarnaLogo}</div>
                    </div>
                    <div class="step-title-container">
                        <p class="step-title">2. Pay</p>
                    </div>
                </vaadin-vertical-layout>

                <vaadin-vertical-layout class="content-block">
                    <div class="image-container">
                        <div class="deactivate-tags">${deactivateTags}</div>
                    </div>
                    <div class="step-title-container">
                        <p class="step-title">3. Deactivate the security tags</p>
                    </div>
                </vaadin-vertical-layout>

            </vaadin-horizontal-layout>

            <div class="membership-status-container">
                <membership-status-bar></membership-status-bar>
            </div>
        
            <div class="footer">
                <vaadin-horizontal-layout>
                    <div class="footer-block-left">
                    </div>
                    <div class="footer-block-center">
                    <p>SCAN TO START</p>
                    </div>
                    <div class="footer-block-right">
                        <div class="arrow-down-white">${arrowDownWhite}</div>
                    </div>
                </vaadin-horizontal-layout>
            </div>
        </main>
    `;
  }
}

customElements.define('view-start', viewStart);