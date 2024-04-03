export class ContactTitleComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <h1 class="">Contact</h1>
      </section>
    `;
  }
}

customElements.define("contact-title-component", ContactTitleComponent);
