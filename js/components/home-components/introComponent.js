export class IntroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="introduction">
        <div class="intro-title first-item" id="about-title">
          <h4>About Me</h4>
        </div>

        <div class="intro-title" id="education-title">
          <h4>Education</h4>
        </div>

        <div class="intro-title" id="experience-title">
          <h4>Experience</h4>
        </div>


        <div class="intro-text first-item" id="about-text">
          <p>I am an AV Engineer with the goal to develop robust, efficient, scalable, and maintainable software for diverse applications, to better improve user experience.</p>

          <p> I hold a Mexican and US dual citizenship.</p>
        </div>

        <div class="intro-text" id="education-text">
          <p>Bachelor of Science in Mechatronics Engineering and future Master of Engineering in Computer Science, with a concentration in Software Engineering.</p>

          <p>I currently hold a CTS certification and am pursuing a master’s degree in computer science.</p>
        </div>

        <div class="intro-text" id="experience-text">
          <p>
            I have been involved in the design, programming, commissioning and maintenance of commercial, corporate and higher education audiovisual projects, such as audio and video distribution, videoconferencing, amongst others. 
          </p>  
          
          <p>
            I've also managed and led a team through a departmental merger. 
          </p>
        </div>


        <div class="intro-button" id="about-button">
          <a href="#about" class="button">Learn More</a>
        </div>

        <div class="intro-button" id="education-button">
          <a href="#about" class="button">Learn More</a>
        </div>

        <div class="intro-button" id="experience-button">
          <a href="#portfolio" class="button">Learn More</a>
        </div>
      </div>
    `;
  }
}

customElements.define("intro-component", IntroComponent);
