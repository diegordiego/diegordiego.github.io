export class IntroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="introduction">
        <section class="intro-item">
            <h4 class="">About Me</h4>
            <p>I have designed, programmed, commissioned, and supported diverse audiovisual systems in Corporate and Higher Ed environments. I've also managed and led a team through a departmental merger. </p>
            
            <p>I currently hold a CTS certification and am pursuing a master’s degree in computer science.</p>

            <p> I hold a Mexican and US dual citizenship.</p>
            <a href="#about" class="">Learn More</a>
        </section>

        <section class="vertical-separator"></section>

        <section class="intro-item">
            <h4 class="">Education</h4>
            <p>BS. Mechatronics Engineer and future MEng. in Computer Science, with a concentration in Software Engineering.</p>

            <p>I curretnly hold certifications from various manufacturers from the AV Industry.</p>

                <!-- Maybe add #education? -->
            <a href="#about" class="">Learn More</a>
        </section>

        <section class="vertical-separator"></section>

        <section class="intro-item">
            <h4 class="">Experience</h4>
            <p>I have been involved in the deveolpment and
                maintentance of commercial, corporate and higher
                education audiovisual projects, such as audio and
                video distribution, videoconferencing, amongst
                others.
            </p>
            <a href="#portfolio" class="">Learn More</a>
        </section>
      </div>
    `;
  }
}

customElements.define("intro-component", IntroComponent);
