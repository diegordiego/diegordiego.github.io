export class IntroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <section class="">
            <h3 class="">About Me</h3>
            <p>Detail-oriented Mechatronics engineer. Experienced in
                designing, commisioning, and
                supporting audiovisual systems in Corporate, as well
                as Higher Education environments.</p>
            <p> Mexican and US dual citizenship.</p>
            <a href="#about"
                class="btn btn-lg btn-primary fw-bold border-white row d-lg-none mb-5">Learn
                More</a>
        </section>

        <section class="">
            <h3 class="">Education</h3>
            <p>BS. Mechatronics Engineer and future MEng. in
                Computer Science, with a
                concentration in Software Engineering.</p>
            <p>I curretnly hold certifications from various
                manufacturers from the AV Industry.</p>
                <!-- Maybe add #education? -->
            <a href="#about" class="">Learn More</a>
        </section>

        <section class="">
            <h3 class="">Experience</h3>
            <p>I have been involved in the deveolpment and
                maintentance of commercial, corporate and higher
                education audiovisual projects, such as audio and
                video distribution, videoconferencing, amongst
                others.
            </p>
            <a href="#portfolio" class="">Learn More</a>
        </section>
      </section>
    `;
  }
}

customElements.define("intro-component", IntroComponent);
