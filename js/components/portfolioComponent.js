import "./portfolio-components/portfolioTitleComponent.js";
import "./portfolio-components/nvcComponent.js";
import "./portfolio-components/broseComponent.js";
import "./portfolio-components/alpuraComponent.js";
import "./portfolio-components/nissanComponent.js";

export class PortfolioComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <portfolio-title-component></portfolio-title-component>
      <nvc-component></nvc-component>
      <brose-component></brose-component>
      <alpura-component></alpura-component>
      <nissan-component></nissan-component>
    `;
  }
}

customElements.define('portfolio-component', PortfolioComponent);
