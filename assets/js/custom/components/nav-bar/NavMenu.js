class NavMenu extends HTMLElement {
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
    <div class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
    id="kt_app_header_menu" data-kt-menu="true">
    <div class="d-flex align-items-center text-bink ">
      <!--begin::Avatar-->
      <div class="symbol symbol-35px align-items-center">
        <div class="">
          <span><a href="/index.php/Comp/Index/index"><img alt="Logo"
            src="../assets/media/icons/duotune/back.svg"></a></span>
        </div>
      </div>
      <!--end::Avatar-->
      <!--begin::Name-->
      <span class="menu-title  align-items-center fs-16px ml-12px text-bink fw-bold mt-1">Dashboard</span>
      <!--end::Name-->
    </div>
  
    <div class="d-flex align-items-center text-bink ">
      <!--begin::Avatar-->
      <div class="symbol symbol-35px ml-14px">
        <div class="">
          <span><img alt="Logo" src="../assets/media/icons/duotune/forword.svg"></span>
        </div>
      </div>
  
      <div class="symbol symbol-35px ml-14px">
        <div class="">
          <span><img alt="Logo" src="../assets/media/icons/duotune/overview.svg"></span>
        </div>
      </div>
      <!--end::Avatar-->
      <!--begin::Name-->
      <span class="menu-title  align-items-center fs-16px mx-2 fw-bold">Overview
        Analytics</span>
      <!--end::Name-->
    </div>
  </div>
    `;
    shadow.appendChild(container);
  }
}

customElements.define('nav-menu', NavMenu);