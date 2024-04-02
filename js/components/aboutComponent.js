// aboutComponent.js
export class AboutComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h2>About Page</h2><p>About Us...</p>';
  }
}

customElements.define('about-component', AboutComponent);
