class MainTabs extends HTMLElement {
  static get observedAttributes() {
    return ['menu-title', 'menu-href', 'menu-src', 'highlight'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Helper function to create and append link elements
    const addStylesheet = (href) => {
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', href);
      shadow.appendChild(linkElem);
    };

    // Add stylesheets
    addStylesheet('../assets/css/style.bundle.css');
    addStylesheet('../css/dashbord.css');
    addStylesheet('../plugins/custom/datatables/datatables.bundle.css');
    addStylesheet('../plugins/global/plugins.bundle.css');
    addStylesheet('../assets/plugins/custom/fullcalendar/fullcalendar.bundle.css');
    addStylesheet('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

    this.container = document.createElement('div');
    shadow.appendChild(this.container);

    this.render(); // Initial render
  }

  // Called when the element is added to the document
  connectedCallback() {
    this.render();
  }

  // Called when an observed attribute is added, removed, or changed
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const menuTitle = this.getAttribute('menu-title');
    const menuHref = this.getAttribute('menu-href') || '#';
    const menuSrc = this.getAttribute('menu-src');
    const isHighlighted = this.getAttribute('highlight') === 'true';

    // Conditional style based on the highlight flag
    const containerStyle = isHighlighted
      ? 'padding: 8px; color: white; background-color: #EC522C; border-radius: 8px; font-weight: bolder; font-size: 16px; width: 95%;'
      : 'padding: 8px; color: gray;  font-size: 16px; width: 95%;';

    this.container.innerHTML = `
      <div class="menu-item mt-6" style="${containerStyle}">
        <a class="menu-link" href="${menuHref}">
          <span class="menu-icon">
            <img class="fs-2" alt="Logo" src="${menuSrc}">
          </span>
          <span class="menu-title">${menuTitle}</span>
        </a>
      </div>
    `;
  }
}

customElements.define('main-tabs', MainTabs);
