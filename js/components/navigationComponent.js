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

    window.addEventListener(
      "load",
      this.activeMenuItem(window.location.hash.substring(1))
    );

    window.addEventListener("hashchange", (currentPage) =>
      this.activeMenuItem(window.location.hash.substring(1))
    );
  }

  //Looks at the contents in the url after the #
  //Based on that adds a 'selected' class to that item
  activeMenuItem(pathName) {
    //It first checks every element to remove the previous "selected" class
    let navItems = this.shadowRoot.querySelector(".navbar").children;
    let navItemsArray = Array.from(navItems);

    navItemsArray.forEach((navItem) => {
      navItem.classList.remove("nav-selected");
    });

    //After removing the previous class, looks for the clicked item and adds
    //The "selected" class to it, if there is a path name
    if (pathName == "") {
      this.shadowRoot
        .querySelector("#home-nav")
        .classList.toggle("nav-selected");
    } else {
      let query = "#" + pathName + "-nav";

      this.shadowRoot.querySelector(query).classList.toggle("nav-selected");
    }
  }
}

customElements.define("nav-menu", NavMenu);
