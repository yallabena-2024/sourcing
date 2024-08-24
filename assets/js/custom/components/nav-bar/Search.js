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
    <div class="card-title align-items-center d-flex ">
							<!--begin::Search-->
							<div class="d-flex align-items-center position-relative my-1">
								<i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
								<input type="text" data-kt-ecommerce-product-filter="search" class="form-control  w-300px ps-12"
									placeholder="Search Product">
							</div>
							<!--end::Search-->
						</div>
    `;

    shadow.appendChild(container);
  }
}

customElements.define('nav-search', Search);