// homeComponent.js

import "./home-components/homeTitleComponent.js";
import "./home-components/introComponent.js";
import "./home-components/featuredComponent.js";
export class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <home-title-component></home-title-component>
      <intro-component></intro-component>
      <featured-component></featured-component>
    `;

    

    //             <!-- Learn More buttons when display is large -->
    //             <section
    //                     class="row row-cols-3 align-items-start d-none d-lg-flex mb-5 text-start">
    //                 <section class="col">
    //                     <a href="about-me.html"
    //                        class="btn btn-lg btn-primary fw-bold border-white">Learn
    //                         More</a>
    //                 </section>
    //                 <section class="col">
    //                     <a href="about-me.html#Education"
    //                        class="btn btn-lg btn-primary fw-bold border-white ">Learn
    //                         More</a>
    //                 </section>
    //                 <section class="col">
    //                     <a href="portfolio.html "
    //                        class="btn btn-lg btn-primary fw-bold border-white">Learn
    //                         More</a>
    //                 </section>
    //             </section>
    //         </section>
  }
}

customElements.define("home-component", HomeComponent);
