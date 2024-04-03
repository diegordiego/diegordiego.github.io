export class AboutTitleComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="title">
        <h1 class="">About Me</h1>
      </section>
    `;
  }
}

customElements.define("about-title-component", AboutTitleComponent);
