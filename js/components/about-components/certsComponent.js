export class CertsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <h3 class="">Certifications</h3>
        <section class="">
          
          <section class="">
            <p>With the support of my employers and my drive to learn more, I have been able to acquire knowledge and tools to help me understand more and work better.</p>

            <h4>Some certifications worth noting:</h4>
            <ul class="">
              <li>AVIXA CTS</li>
              <li>Crestron Intermediate System Programming (P201)</li>
              <li>Biamp TesiraForté</li>
              <li>Dante Lv2</li>
              <li>Extron Certified Control Professional</li>
              <li>QSys Level 1 Training</li>
              <li>Kramer Control System Designer</li>
              <li>Bose ControlSpace System Design Lv2</li>
              <li>Shure Integrated Systems Certification Lv2</li>
            </ul>
          </section>

          <!-- Cert images -->
          <div class="container">
            <div class="cards">
              <div class="card">
                <img src="images/certifications/certified-technology-specialist.png" class="" alt="">
              </div>

              <div class="card">
                <img src="images/certifications/CTI.png" class="" alt="">
              </div>

              <div class="card">
                <img src="images/certifications/extron-certified-professional-300x153.png" class="" alt="">
              </div>

              <div class="card">
                <img src="images/certifications/Q-SYS Training-badges_Level1-large.png" class="" alt="">
              </div>

              <div class="card">
                <img src="images/certifications/boqpeupiuaa6bji.jpg" class="" alt="">
              </div>
                
              <div class="card">
                <img src="images/certifications/bose-mobile-logo.png"
                class="" alt="">
              </div>

              <div class="card">
                <img src="images/certifications/content-hero-1920x1800-support-sai_orig.jpg" class="" alt="">
              </div>
            </div>
          </div>
        </section>
      </section>
    `;

    const slider = this.querySelector(".container");
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
      if (!isPressed) return;
      e.preventDefault();
      cards.style.left = `${e.offsetX - cursorX}px`;
      boundSlides();
    });

    function boundSlides() {
      const containerRect = slider.getBoundingClientRect();
      const cardsRect = cards.getBoundingClientRect();
      console.log(cardsRect);
      if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
      } else if (cardsRect.right < containerRect.right) {
        cards.style.left = `-${cardsRect.width - containerRect.width}px`;
      }
    }
  }
}

customElements.define("certs-component", CertsComponent);
