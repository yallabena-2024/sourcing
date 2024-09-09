class Search extends HTMLElement {
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

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="">
        <div class="row justify-content-center">
          <div>
            <div class="input-group">
              <input id="searchInput" type="text" class="form-control" placeholder="Search">
              <select id="categorySelect" class="form-select" aria-label="Select Category">
                <option value="">Select Product Type</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home-garden">Home & Garden</option>
                <option value="sports">Sports</option>
                <option value="books">Books</option>
                <option value="toys">Toys</option>
              </select>
              <button id="searchButton" class="btn btn-primary" type="button">
                <img src="../assets/media/icons/duotune/general/gen021.svg" alt="search-icon">
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    shadow.appendChild(container);
  }

  // Define observed attributes
  static get observedAttributes() {
    return ['url'];
  }

  // Handle changes to observed attributes
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'url') {
      console.log(`${newValue}`);
    }
  }
}

customElements.define('nav-search', Search);
