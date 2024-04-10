export class alpuraComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio-element">
        <h3 class="">Alpura:&nbsp</h3>
        <h4>Council Room</h4>

        <section class="portfolio-image-and-text">
          <section class="portfolio-image">
            <img src="images/Alpura-CouncilRoom-SignalFlowDiagram.png" class="" alt="Signal Flow diagram">
          </section>


          <section class="portfolio-text">
            <h5 class="">Responsibilities included:</h5>
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
      </div>
    `;
  }
}

customElements.define("alpura-component", alpuraComponent);
