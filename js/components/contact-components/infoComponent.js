export class infoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <h3 class="">Get in touch</h3>
        <p class="">
          <a href="mailto:rdiego.av@gmail.com" target="_blank" class="">e-mail</a>
            | 
          <a href="https://www.linkedin.com/in/diegordiego/" target="_blank"
          class="link-light">LinkedIn</a></p>
      </section>
    `;
  }
}

customElements.define("info-component", infoComponent);
