export class CertsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="certs">
        <div class="certs-text">
          <h3 id="certs-title">Certifications</h3>

          <h4 id="certs-extra-title">Worth noting:</h4>


          <p id="certs-description">With the support of my employers and my drive to learn more, I have been able to acquire knowledge and tools to help me understand more and work better.</p>

          <ul id="certs-list">
            <li>AVIXA CTS</li>
            <li>Crestron Intermediate System Programming (P201)</li>
            <li>Extron Certified Control Professional</li>
            <li>QSys Level 1 Training</li>
            <li>Dante Lv2</li>
            <li>Biamp TesiraForté</li>
            <li>Bose ControlSpace System Design Lv2</li>
            <li>Shure Integrated Systems Certification Lv2</li>
          </ul>
        </div>

          <!-- Cert images -->
          <div class="scroll-container">
            <div class="cards">
              <div class="card">
                <img src="images/certifications/certified-technology-specialist.png" class="" alt="AVIXA CTS certification badge">
              </div>

              <div class="card">
                <img src="images/certifications/CTI.png" class="" alt="Crestron  certification badge">
              </div>

              <div class="card">
                <img src="images/certifications/extron-certified-professional-300x153.png" class="" alt="Extron  certification badge">
              </div>

              <div class="card">
                <img src="images/certifications/Q-SYS Training-badges_Level1-large.png" class="" alt="Q-sys certification badge">
              </div>

              <div class="card">
                <img src="images/certifications/dante-level2.png" class="" alt="Dante certification badge">
              </div>

              <div class="card">
                <img src="images/certifications/boqpeupiuaa6bji.jpg" class="" alt="Biamp certification badge">
              </div>
                
              <div class="card">
                <img src="images/certifications/bose-mobile-logo.png"
                class="" alt="Bose certification badge">
              </div>

              <div class="card">
                <img src="images/certifications/content-hero-1920x1800-support-sai_orig.jpg" class="" alt="Shure certification badge">
              </div>
            </div>
          </div>
        </section>
      </section>
    `;

    // TODO: Convert into module
    const slider = this.querySelector(".scroll-container");
    const cards = this.querySelector(".cards");

    let isPressed = false;

    let cursorX;

    slider.addEventListener("mousedown", (e) => {
      isPressed = true;
      cursorX = e.offsetX - cards.offsetLeft;
      slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mouseup", () => {
      slider.style.cursor = "grab";
    });

    window.addEventListener("mouseup", () => {
      isPressed = false;
    });

    slider.addEventListener("mousemove", (e) => {
      console.log(e.offsetX);
      if (!isPressed) return;
      e.preventDefault();
      cards.style.left = `${e.offsetX - cursorX}px`;
      boundSlides();
    });

    slider.addEventListener("touchstart", (e) => {
      isPressed = true;
      const touch = e.touches[0]; // Get the first touch
      cursorX = touch.clientX - cards.offsetLeft; // Adjust cursor position
      slider.style.cursor = "grabbing";
    });

    slider.addEventListener("touchmove", (e) => {
      if (!isPressed) return;
      const touch = e.touches[0]; // Get the first touch
      const offsetX = touch.clientX - cursorX; // Calculate offset
      e.preventDefault();
      cards.style.left = `${offsetX}px`; // Apply offset to move the cards
      boundSlides();
    });

    slider.addEventListener("touchend", (e) => {
      isPressed = false;
      slider.style.cursor = "grab";
    });

    function boundSlides() {
      const containerRect = slider.getBoundingClientRect();
      const cardsRect = cards.getBoundingClientRect();

      if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
      } else if (cardsRect.right < containerRect.right) {
        cards.style.left = `-${cardsRect.width - containerRect.width}px`;
      }
    }
  }
}

customElements.define("certs-component", CertsComponent);
