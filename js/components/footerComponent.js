class FooterComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <footer class="footer">
        <p>Website designed and built by 
          <a
              href="https://www.linkedin.com/in/diegordiego/"
              class=""
              target="_blank">Diego Romero
          </a>.
        </p>
      </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
