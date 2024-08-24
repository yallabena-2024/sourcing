class NavInfo extends HTMLElement {
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
    <div class="d-flex align-items-center" data-kt-search-element="toggle"
										id="kt_header_notification_toggle">
    <div class="d-flex align-items-center">
    <div class="btn btn-icon btn-custom btn-icon-muted  w-35px h-35px">
      <img alt="Logo" src="../assets/media/icons/duotune/notification.svg">
    </div>
  
    <div class="app-navbar-item ml-12px">
      <div class="btn btn-icon btn-custom btn-icon-muted w-35px h-35px">
        <img alt=" Logo" src="../assets/media/icons/duotune/line.svg">
      </div>
    </div>
  
    <div class="d-flex align-items-center ml-3 flex-stack">
      <!--begin::Thumbnail-->
      <a class="symbol ">
        <span class="symbol-label  w-42px h-42px"
          style="background-image:url(../assets/media/books/1.png);"></span>
      </a>
      <!--end::Thumbnail-->
      <div class="ms-5">
        <!--begin::Title-->
        <div class="link-yellow  fs-16px fw-normal fw-bolder"
          data-kt-ecommerce-product-filter="product_name">Khaled Salama</div>
        <div class="text-bink fs-14px fw-normal" data-kt-ecommerce-product-filter="product_name">
          khaled@yallabena.com
        </div>
  
        <!--end::Title-->
      </div>
    </div>
  
    <div class="app-navbar-item ml-12px ">
      <!--begin::Menu wrapper-->
      <div
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative"
        id="kt_drawer_chat_toggle">
        <img alt="Logo" src="../assets/media/icons/duotune/line.svg">
      </div>
      <!--end::Menu wrapper-->
    </div>
  
    <div class="app-navbar-item">
      <!--begin::Menu wrapper-->
      <div
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative"
        id="kt_drawer_chat_toggle">
        <img alt="Logo" src="../assets/media/icons/duotune/flag-usa.svg">
      </div>
      <!--end::Menu wrapper-->
    </div>
  </div>
  </div>
    `;

    shadow.appendChild(container);
  }
}

customElements.define('nav-info', NavInfo);