export class EducationComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="education">
        <h3>Education</h3>

        <!-- Virginia Tech -->
        <section class="education-item">
          <!-- Image Virginia Tech Logo-->

          <img src="images/logos/Vertical_VT_Full_Color_RGB-InnovationCampus_crop.png"
              class="" alt="Virginia Tech Innovation Campus' logo">


          <!-- Text Virginia Tech Education-->
          <div>
            <p>
              I'm actively working in 2024 towards completing a Masters
              of Engineering in Computer Science, with a concentration in Software Engineering, at Virginia Tech's Innovation Campus.
            </p>

            <p>During my time here, I've worked in team projects, such as the development of a javascript video game, where my focus was on menu design and functionality. Or the implementation of three different Machine Learning models to classify a set of 100 songs, based on The Echo Nest’s dataset, to classify each song’s genre using ML, and using Spotify’s Web API to get each song’s features.</p>

            <p>I have also worked on individual projects where I've designed and developed an e-commerce web application, with responsive design, HTTP-requests, front and back-end validation, and database integration. And I have also developed an Android app that allowed for various user interactions, loading images seamlessly, and displaying them without the need to leave the app.</p>
          </div>
        </section>

        <!-- Tec de Monterrey -->
        <section class="education-item">
          <!-- Image ITESM Logo-->
          <img src="images/logos/tec-de-monterrey-logo.png"
              class="" alt="Tecnologico de Monterrey's logo">

          <!-- Text ITESM Education -->
          <div>
            <p>
              I graduated with a Bachelor of Science. in Mechatronics Engineering from the Monterrey Institute of Technology and Higher Education (ITESM), Querétaro Campus, México, with and equivalent GPA of 3.7.
            </p>

            <p>
              There, I worked on projects that covered subjects of Electronics, Control Theory, Mechanics of Materials, Robotics, PLCs, amongst others. I also learned how to work with SolidWorks, a 3D CAD design software, which allowed me to translate those skills to work with AutoCAD.
            </p>

            <p>
              The ITESM is ranked among the top 200 Universities
              in the world, and #2 in México, according to the
              <a href="https://www.topuniversities.com/university-rankings/world-university-rankings/2023"
                class="" target="_blank">World University Rankings® 2023</a>.
            </p>

            <p>During my time in this university, I was a member of the Track & Field team, with which I reached regionals.</p>
          </div>  
        </section>
      </section>
    `;
  }
}

customElements.define("education-component", EducationComponent);
