import "./contact-components/contactTitleComponent.js";
import "./contact-components/infoComponent.js";

export class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <contact-title-component></contact-title-component>
      <info-component></info-component>
    `

    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  
}

customElements.define('contact-component', ContactComponent);
