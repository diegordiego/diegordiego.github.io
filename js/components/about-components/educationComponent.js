export class EducationComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="container m-section">
        <h3 class="display-3 text-start my-5" id="Education">
            Education</h3>

        <!-- Virginia Tech -->
        <section class="row text-start fs-4 d-flex mb-5">
          <!-- Image Virginia Tech Logo-->
          <img src="images/logos/Vertical_VT_Full_Color_RGB-InnovationCampus_crop.png"
              class="rounded img-fluid img-thumbnail" alt="">

          <!-- Text Virginia Tech Education-->
          <p>Actively working in 2022 towrads completing a Master
              of Engineering in Computer Science, with
              a concentration in Software Engineering, at Virginia
              Tech's Innovation Campus.
          </p>
        </section>

        <!-- Tec de Monterrey -->
        <section class="row text-start fs-4 d-flex mb">
          <!-- Image ITESM Logo-->
          <img src="images/logos/tec-de-monterrey-logo.png"
              class="rounded img-fluid img-thumbnail" alt="">

          <!-- Text ITESM Education -->
          <p>Received BS. in Mechatronics Engineering from the
              Monterrey Institute of Technology and
              Higher Education (ITESM), Querétaro Campus, México,
              with and equivalent GPA of 3.7.
          </p>

          <p>
              The ITESM is ranked among the top 200 Universities
              in the world, according to the
              <a href="https://www.topuniversities.com/university-rankings/world-university-rankings/2023"
                class="link-" target="_blank">
                  World University Rankings® 2023.</a>
          </p>
        </section>
      </section>
    `;
  }
}

customElements.define("education-component", EducationComponent);
