// portfolioComponent.js
export class PortfolioComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h2>Portfolio Page</h2><p>Check out my portfolio...</p>';
  }
}

customElements.define('portfolio-component', PortfolioComponent);
