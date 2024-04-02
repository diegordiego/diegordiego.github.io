// contactComponent.js
export class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h2>Contact Page</h2><p>Contact Us...</p>';
  }
}

customElements.define('contact-component', ContactComponent);
