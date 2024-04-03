export class HomeTitleComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
          <h1 class="">Diego Romero</h1>
          <p class="">Audiovisual Engineer</p>
      </section>
    `;
  }
}

customElements.define("home-title-component", HomeTitleComponent);
