const template = document.createElement("template");
let currentPage = window.location.hash;

/* <slot></slot> */

class NavMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/css/nav-styles.css");

    // Append the link element to the shadow DOM
    shadow.appendChild(link);

    const container = document.createElement("nav");
    container.setAttribute("class", "navbar");

    // Create links for navigation
    const homeLink = document.createElement("a");
    homeLink.textContent = "Home";
    homeLink.setAttribute("href", "#home");
    homeLink.setAttribute("id", "home-nav");
    homeLink.classList.add("nav-selected");

    const aboutLink = document.createElement("a");
    aboutLink.textContent = "About";
    aboutLink.setAttribute("href", "#about");
    aboutLink.setAttribute("id", "about-nav");

    const portfolioLink = document.createElement("a");
    portfolioLink.textContent = "Portfolio";
    portfolioLink.setAttribute("href", "#portfolio");
    portfolioLink.setAttribute("id", "portfolio-nav");

    const contactLink = document.createElement("a");
    contactLink.textContent = "Contact";
    contactLink.setAttribute("href", "#contact");
    contactLink.setAttribute("id", "contact-nav");

    // Append links to the container
    container.appendChild(homeLink);
    container.appendChild(aboutLink);
    container.appendChild(portfolioLink);
    container.appendChild(contactLink);

    // Append container to the shadow DOM
    shadow.appendChild(container);
    window.addEventListener("hashchange", currentPage => this.activeMenuItem(window.location.hash.substring(1)));
  }

  activeMenuItem(pathName) {
    console.log(pathName);
    this.shadowRoot.querySelector(".nav-selected").classList.remove(".nav-selected");
    console.log(this.shadowRoot.querySelector(".nav-selected"))

    switch (pathName) {
      case "":
      case "home":
        this.shadowRoot
          .querySelector("#home-nav")
          .classList.add("nav-selected");
        break;
      case "about":
        this.shadowRoot
          .querySelector("#about-nav")
          .classList.add("nav-selected");
        break;

      default:
        break;
    }
  }
}

customElements.define("nav-menu", NavMenu);
