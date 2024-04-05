export class PortfolioTitleComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="title">
        <h1 class="">Portfolio</h1>
      </section>
    `;
  }
}

customElements.define("portfolio-title-component", PortfolioTitleComponent);
