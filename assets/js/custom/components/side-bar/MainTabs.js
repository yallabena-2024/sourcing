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

  toggleHighlight() {
    const isHighlighted = this.getAttribute('highlight') === 'true';
    this.setAttribute('highlight', !isHighlighted);
  }

  render() {
    const menuTitle = this.getAttribute('menu-title');
    const menuHref = this.getAttribute('menu-href');
    const menuSrc = this.getAttribute('menu-src');
    const isHighlighted = this.getAttribute('highlight') === 'true';

    // Conditional style based on the highlight flag
    const containerStyle = isHighlighted
      ? 'padding: 8px; color: white; background-color: #EC522C; border-radius: 8px; font-weight: bolder; font-size: 16px; width: 95%;'
      : 'padding: 8px; color: gray;  font-size: 16px; width: 95%;';

    this.container.innerHTML = `
      <div class="menu-item" style="${containerStyle}">
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

const toggleButton = document.getElementById('kt_app_sidebar_toggle_v1');
toggleButton.toggleState = false;

toggleButton.addEventListener('click', () => {
  // Get all MainTabs components
  const mainTabsComponents = document.querySelectorAll('.main-tabs');
  const productTab = document.querySelector('.menu-item')

  // Iterate over each MainTabs component
  mainTabsComponents.forEach(mainTabsComponent => {
    // Access the shadow root of each MainTabs component
    const shadowRoot = mainTabsComponent.shadowRoot;

    // Select the elements inside the shadow DOM
    const menuItem = shadowRoot.querySelector('.menu-item');
    const menuTitle = shadowRoot.querySelector('.menu-title');

    // Toggle styles using the toggleState variable on the button
    if (toggleButton.toggleState) {
      // Set width to 90% and display to inline
      menuItem.style.width = '95%';
      // productTab.style.width = '95%';
      menuTitle.style.display = 'inline';
    } else {
      // Set width to 27% and display to none
      menuItem.style.width = '63px';
      // productTab.style.width = '63px';
      menuTitle.style.display = 'none';
    }
  });

  // Flip the toggle state
  toggleButton.toggleState = !toggleButton.toggleState;
});