export class alpuraComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="portfolio-element">
        <h3 class="">Alpura:&nbsp</h3>
        <h4>Council Room</h4>

        <section class="portfolio-image-and-text">
          <section class="portfolio-image">
            <img src="images/Alpura-CouncilRoom-SignalFlowDiagram.png" class="" alt="">
          </section>

          <h4 class="">Responsibilities included:</h4>

          <section class="portfolio-text">
            <ul class="">
              <li>
                  <p>Designing, engineering, creation of BOM,
                  commissioning, and documentation for the
                  project.</p>
              </li>

              <li>
                  <p>Planning and execution of any potential
                  upgrades.</p>
              </li>

              <li>
                  <p>Providing customer support to the end
                  user for their first operation of the
                  system, as well as technical support for
                  the IT department.</p>
              </li>

            </ul>
          </section>
        </section>
      </section>
    `;
  }
}

customElements.define("alpura-component", alpuraComponent);
