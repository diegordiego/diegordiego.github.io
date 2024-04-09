export class IntroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="introduction">
        <div class="intro-title first-item">
          <h4>About Me</h4>
        </div>

        <div class="intro-title">
          <h4>Education</h4>
        </div>

        <div class="intro-title">
          <h4>Experience</h4>
        </div>


        <div class="intro-text first-item">
          <p>I am an AV Engineer with the goal to develop robust, efficient, scalabale, and maintainable software for diverse applications, to better improve User Experience.</p>

          <p> I hold a Mexican and US dual citizenship.</p>
        </div>

        <div class="intro-text">
          <p>BS. Mechatronics Engineer and future MEng. in Computer Science, with a concentration in Software Engineering.</p>

          <p>I currently hold a CTS certification and am pursuing a master’s degree in computer science.</p>
        </div>

        <div class="intro-text">
          <p>
            I have been involved in the design, programming, commissioning and maintentance of commercial, corporate and higher education audiovisual projects, such as audio and video distribution, videoconferencing, amongst others. 
          </p>  
          
          <p>
            I've also managed and led a team through a departmental merger. 
          </p>
        </div>


        <div class="intro-button">
          <a href="#about" class="button">Learn More</a>
        </div>

        <div class="intro-button">
          <a href="#about" class="button">Learn More</a>
        </div>

        <div class="intro-button">
          <a href="#portfolio" class="button">Learn More</a>
        </div>
      </div>
    `;
  }
}

customElements.define("intro-component", IntroComponent);
