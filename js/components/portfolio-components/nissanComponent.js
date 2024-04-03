export class nissanComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <h3 class="">Nissan: Mexico HQ</h3>


        <section class="">
          <h4 class="">Responsibilities included:</h4>

          <section class="">
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

          <section class="">
            <img src="images/Nissan-CrestronGUI.png" class="" alt="">
          </section>
        </section>
      </section>
    `;
  }
}

customElements.define("nissan-component", nissanComponent);
