function loadHeader() {
  const headerHTML = `
    <div class="modal-box-overlay" id="modal-box-overlay">
      <div class="modal-box" id="modal-box">
        <img src="img/modal-box.png" class="modal-box-img" alt="Gifts" />
        <div class="modal-box-content">
          <h2 class="modal-box-title">Special Offer</h2>
          <hr class="first-modal-box-title-line" />
          <hr class="second-modal-box-title-line" />
          <h2 class="modal-box-discount-rate"><span>30%</span> OFF</h2>
          <p class="modal-box-content">Get the discount for your first time purchase in our shop!</p>
          <button class="modal-box-deal-btn">Claim Now</button>
        </div>
        <button class="modal-box-remove-btn" id="modal-box-remove-btn">
          <iconify-icon icon="mdi:remove" width="25" height="25"></iconify-icon>
        </button>
      </div>
    </div>

    <header>
      <div class="first-time-discount" id="first-time-discount">
        <a href="#" class="first-time-discount-content" id="first-time-discount-content">
          Get 30% discount for your first time purchase right now
        </a>
      </div>
      <nav class="navbar" id="navbar">
      <span class="toggle">
        <iconify-icon icon="iconamoon:menu-burger-horizontal-light" width="24" height="24"></iconify-icon>
      </span>
        <a href="index.html" class="logo">
          <img src="img/Logo.png" alt="Bean Boutique" />
        </a>
        <ul class="nav1">
          <li class="toggle-cross"><iconify-icon icon="bitcoin-icons:cross-filled" width="24" height="24"></iconify-icon></li>
          <li class="dropdown" id="shopNav">
            <a href="index.html">Shop</a>
            <ul class="dropdown-menu">
              <li><a href="coffee.html">Coffees</a></li>
              <li><a href="bean.html">Coffee Beans</a></li>
              <li><a href="snacks.html">Snacks</a></li>
              <li><a href="brewingEqu.html">Brewing Kits</a></li>
            </ul>
          </li>
          <li class="navHide"><a href="coffee.html">Coffees</a></li>
          <li class="navHide"><a href="bean.html">Coffee Beans</a></li>
          <li class="navHide"><a href="snacks.html">Snacks</a></li>
          <li class="navHide"><a href="brewingEqu.html">Brewing Kits</a></li>
          <li><a href="subscription.html">Subscription</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <ul class="nav2">
          <li>
            <a href="wish.html"><iconify-icon icon="ph:heart-light" width="25" height="25"></iconify-icon></a>
          </li>
          <li>
            <a href="#" id="cart-icon-btn" style="position: relative; display: flex; align-items: center;">
              <iconify-icon icon="mdi-light:cart" width="25" height="25"></iconify-icon>
              <span id="cart-count" class="cart-badge">0</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  setupModalLogic();

  if (typeof updateCartBadge === "function") {
    updateCartBadge();
  }
}

function setupModalLogic() {
  const modalOverlay = document.getElementById("modal-box-overlay");
  const showModalBox = document.getElementById("first-time-discount-content");
  const hideModalBox = document.getElementById("modal-box-remove-btn");
  const discountSection = document.getElementById("first-time-discount");
  const navbar = document.getElementById("navbar");

  if (showModalBox) {
    showModalBox.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (hideModalBox) {
    hideModalBox.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  }
}

loadHeader();

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((total, item) => total + item.qty, 0);
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.innerText = totalCount;
    badge.style.display = totalCount > 0 ? "flex" : "none";
  }
}
// Navbar scroll effect + mobile toggle
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const discountBar = document.getElementById("first-time-discount");
  const toggleBtn = document.querySelector(".toggle");
  const navMenu = document.querySelector(".nav1");
  const closeBtn = document.querySelector(".toggle-cross");

  // ✅ Scroll effect
  window.addEventListener("scroll", () => {
    const discountHeight = discountBar ? discountBar.offsetHeight : 0;

    if (window.scrollY > discountHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ✅ Open menu
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  // ✅ Close menu (cross button)
  if (closeBtn && navMenu) {
    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  // ✅ Optional: click link → close menu
  document.querySelectorAll(".nav1 a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
}

setupNavbar();