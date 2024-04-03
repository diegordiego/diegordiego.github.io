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
          <section class="">

            <img src="images/certifications/boqpeupiuaa6bji.jpg" class="" alt="">
            
            <img src="images/certifications/bose-mobile-logo.png"
            class="" alt="">

            <img src="images/certifications/content-hero-1920x1800-support-sai_orig.jpg" class=" img-fluid" alt="">

            <img src="images/certifications/extron-certified-professional-300x153.png" class="" alt="">

            <img src="images/certifications/Q-SYS Training-badges_Level1-large.png" class="" alt="">
          </section>
        </section>
      </section>
    `;
  }
}

customElements.define("certs-component", CertsComponent);
