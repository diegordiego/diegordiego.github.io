export class HomeTitleComponent extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
      <link rel="style" href="/css/home-styles.css"/>

      <section class="title">
          <h1 class="">Diego Romero</h1>
          <h2 class="">Audiovisual Engineer</h2>
      </section>
    `;
  }
}

customElements.define("home-title-component", HomeTitleComponent);
