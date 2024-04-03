export class broseComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <h3 class="">Brose: Conference Room</h3>


        <section class="">
          <h4 class="">Responsibilities included:</h4>

          <section class="">
            <ul class="">
              <li>
                  <p>Identifying all components of the existing system and provide documentation, since previous integrator didn't provide any.</p>
              </li>

              <li>
                  <p>Re-commissioning of the AV system to
                  allow for control of the room's devices,
                  as well as videoconferencing and VoiP
                  peripherals.</p>
              </li>

              <li>
                  <p>Re-designing the GUI to provide a better
                  user experience, without disrupting the
                  user's existing mental model of the
                  system.</p>
              </li>

              <li>
                  <p>Commissioning the microphones and DSP to
                  allow for in-room reinforcement during
                  videoconferencing, phone calls and
                  presentations, without any unwanted
                  feedback.</p>
              </li>
            </ul>
          </section>

          <section class="">
            <img src="images/Brose-ConferenceRoom-1.jpeg" class="" alt="">
          </section>
        </section>
      </section>
    `;
  }
}

customElements.define("brose-component", broseComponent);