class SideBarLogo extends HTMLElement {
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
    <div class="app-sidebar-logo d-flex flex-center" id="kt_app_sidebar_logo">
						<div class="center-content  align-items-center my-4">
							<img alt="Logo" src="../assets/media/logos/logo.png" class=" card-center h-53px app-sidebar-logo-default">
							<img alt="Logo" src="../assets/media/logos/favicon.ico"
								class=" card-center h-53px app-sidebar-logo-minimize">
						</div>
					</div>
    `;

    shadow.appendChild(container);
  }
}

customElements.define('sidebar-logo', SideBarLogo);