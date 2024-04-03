export class nvcComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <h3 class="">Virginia Tech: Northern Virginia Center</h3>


        <section class="">
          <h4 class="">Responsibilities included:</h4>

          <section class="">
            <ul class="">
              <li>
                  <p>Commissioning the audio for 9 classrooms to allow for videoconferencing and sound reinforcement in the room, while avoiding any unwanted feedback, artifacts and echoes.</p>
              </li>

              <li>
                  <p>Providing end user support and training, as well as technical support and maintenance to all audiovisual systems in the campus.</p>
              </li>

              <li>
                  <p>Managing communication between different departments and teams to ensure all users receive outstanding service.</p>
              </li>

              <li>
                  <p>Assisting on any live events that require sound reinforcement and/or live streaming.</p>
              </li>
            </ul>
          </section>

          <section class="">
            <img src="images/nvc_214_1.jpg" class="" alt="">
          </section>
        </section>
      </section>
    `;
  }
}

customElements.define("nvc-component", nvcComponent);