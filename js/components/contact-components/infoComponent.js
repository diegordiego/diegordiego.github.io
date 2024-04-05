export class infoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="get-in-touch">
        <h3 class="">Get in touch</h3>
          <a href="https://www.linkedin.com/in/diegordiego/" target="_blank"
          class="link-light">LinkedIn</a>
      </section>
    `;
  }
}

customElements.define("info-component", infoComponent);
