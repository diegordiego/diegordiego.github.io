// router.js
import { HomeComponent } from "/js/components/homeComponent.js";
import { AboutComponent } from "/js/components/aboutComponent.js";
import { PortfolioComponent } from "/js/components/portfolioComponent.js";
import { ContactComponent } from "/js/components/contactComponent.js";

const content = document.getElementById("content");

function renderComponent(component) {
  content.innerHTML = "";
  content.appendChild(component);
}

function route() {
  const hash = window.location.hash.substring(1);
  switch (hash) {
    case "":
    case "home":
      renderComponent(new HomeComponent());
      break;
    case "about":
      renderComponent(new AboutComponent());
      break;
    case "contact":
      renderComponent(new ContactComponent());
      break;
    case "portfolio": // Add this case
      renderComponent(new PortfolioComponent());
      break;
    default:
    // Handle unknown routes
  }
}

window.addEventListener("hashchange", route);
route();
