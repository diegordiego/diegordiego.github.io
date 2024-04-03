import "./about-components/aboutTitleComponent.js";
import "./about-components/certsComponent.js";
import "./about-components/educationComponent.js";
export class AboutComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <about-title-component></about-title-component>
      <certs-component></certs-component>
      <education-component></education-component>
    `;
  }
}

customElements.define('about-component', AboutComponent);
