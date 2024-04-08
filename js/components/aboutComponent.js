import "./about-components/aboutTitleComponent.js";
import "./about-components/certsComponent.js";
import "./about-components/educationComponent.js";
export class AboutComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/css/global-styles.css");
    shadow.appendChild(link);

    link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/css/about-styles.css");
    shadow.appendChild(link);

    const aboutTitle = document.createElement("about-title-component");
    shadow.appendChild(aboutTitle);

    const certs = document.createElement("certs-component");
    shadow.appendChild(certs);

    const education = document.createElement("education-component");

    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    shadow.appendChild(education);
  }
}

customElements.define("about-component", AboutComponent);
