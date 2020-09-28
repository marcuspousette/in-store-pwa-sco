import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';

class membershipStatusBar extends LitElement {
  
  constructor() {
    super();
    this.informationText = "Membership QR-code can be scanned at any time until payment using the scanner below" ;
    this.membershipRegisteredText = "Your H&M membership is registered";
    this.membershipRegistered = false;
  }

  static get properties() {
    return {
      informationText: {
        type: String
      },
      membershipRegisteredText: {
        type: String
      },
      membershipRegistered: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return css`
        .membership-status-bar {
            width: 95vw;
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
            background-color: rgba(250, 241, 239, 1);
            border: 0px dashed rgba(34, 34, 34, 0.3);
            font-family: HMAmpersand-Regular;
            font-size: 12pt;
            letter-spacing: 3px;
            line-height: 1.6;
            color: rgba(34, 34, 34, 1);
        }
    `;
  }

  render(){
    return html`
      <div class="membership-status-bar">
        ${ this.membershipRegistered ? this.membershipRegisteredText : this.informationText }
      </div>
    `;
  }
}
customElements.define('membership-status-bar', membershipStatusBar);
