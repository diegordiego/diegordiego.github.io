// homeComponent.js
export class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h2>Home Page</h2><p>Welcome to the Home Page!</p>';
  }
}

customElements.define('home-component', HomeComponent);
