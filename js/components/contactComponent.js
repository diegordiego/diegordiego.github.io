import "./contact-components/infoComponent.js";

export class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <contact-title-component></contact-title-component>
      <info-component></info-component>
    `
  }
}

customElements.define('contact-component', ContactComponent);
