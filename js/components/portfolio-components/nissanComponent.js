export class nissanComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio-element">
        <h3 class="">Nissan:&nbsp</h3>
        <h4>Mexico HQ</h4>

        <section class="portfolio-image-and-text">
          <section class="portfolio-image">
            <img src="images/Nissan-CrestronGUI.png" class="" alt="Crestron GUI">
          </section>


          <section class="portfolio-text">
            <h5 class="">Responsibilities included:</h5>
            <ul class="">
              <li>
                  <p>Commissioning close to 30 Executive
                  office spaces containing a TV, HDMI
                  auto-switcher and wall mounted keypad
                  controller.</p>
              </li>

              <li>
                  <p>GUI design and programming
                  of the distributed audio and video system at
                  the cafeteria.</p>
              </li>

              <li>
                  <p>Providing customer support and training
                  to the IT department to use and assist
                  the end user.</p>
              </li>

            </ul>
          </section>
        </section>
      </div>
    `;
  }
}

customElements.define("nissan-component", nissanComponent);
