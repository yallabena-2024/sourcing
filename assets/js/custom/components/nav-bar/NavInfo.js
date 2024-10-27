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
    <div class="profile-popup" >
      <a href="../settings/change-password.html">Change Password</a>
      <a href="../settings/personal-information.html">Edit Information</a>
    </div>
    <div class="d-flex align-items-center" data-kt-search-element="toggle"
										id="kt_header_notification_toggle">
    <div class="d-flex align-items-center">
    <div class="btn btn-icon btn-custom btn-icon-muted  w-35px h-35px">
      <img alt="Logo" src="../assets/media/icons/duotune/notification.svg">
    </div>
  
    <div class="app-navbar-item">
      <div class="btn btn-icon btn-custom btn-icon-muted w-35px h-35px">
        <img alt=" Logo" src="../assets/media/icons/duotune/line.svg">
      </div>
    </div>
  
    <div class="d-flex align-items-center flex-stack">
      <!--begin::Thumbnail-->
      <a class="symbol profile-trigger">
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
  
    <div class="app-navbar-item">
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
    <div class="menu-item ">
												<a class="menu-link  " href="../login.html">
													<span class="menu-icon">
														<img lass="fs-2" alt="Logo" src="../assets/media/icons/duotune/logout.svg">
													</span>
													<span class="menu-title text-yellow fs-16px fw-normal ">Logout</span>
												</a>
											</div>
  </div>
  </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .profile-popup {
        position: absolute;
        top: 75px;
        right: 250px;
        background: #ffffff;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index: 1000;
        display: none;
        width: 150px;
      }
      
      .profile-popup a {
        display: block;
        color: #333;
        text-decoration: none;
        padding: 8px;
        border-radius: 5px;
        transition: background-color 0.2s ease;
      }

      .profile-popup a:hover {
        background-color: #f0f0f0;
      }
      `

    shadow.appendChild(style);
    shadow.appendChild(container);

    const profileTrigger = container.querySelector('.profile-trigger');
    const profilePopup = container.querySelector('.profile-popup');

    profileTrigger.addEventListener('click', () => {
      profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';
    });
  }
}

customElements.define('nav-info', NavInfo);