export class FeaturedComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="">
        <h2 class="">Featured Project</h2>

        <section class="">
          <img class=""
                src="../images/Alpura-CouncilRoom_Tomcat.jpeg"
                alt="Photo of a meeting room showing a TV screen with a corporate logo and in-ceiling microphones and speakers">

          <section class="">
            <h5 class="">Alpura: Council Room</h5>
            <section class=">
              <p>As one of Mexico's biggest dairy producers, Alpura's board of directors holds weekly meetings with other satelite locations throughout the country.</p>

              <p>The old videoconferencing solution they employed was very rudimentary and inefficient. It was necessary for an IT representative to always be present in said meetings to provide constant tech support, which proved to be wasteful and expensive.</p>

              <p>The project consisted in revamping the VC system to provide a better user experience and more effective meetings.</p>

              <p>The final system's configuration comprised a dedicated NUC to handle their VC soft-codec, ceiling microphones and speakers, a DSP to handle the audio, an 80" semi-professional monitor, a PTZ camera, and a wireless presentation system.</p>

              <p>Since the customer was interested in future improvemnts, such as integration with a control system, all installed components were chosen and deployed with this upgrade in mind.
              </p>

              <p>All design and commissioning was done by me.</p>
            </section>
          </section>
        </section>
      </section>
    `;
  }
}

customElements.define("featured-component", FeaturedComponent);
