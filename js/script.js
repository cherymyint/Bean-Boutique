// ==================== Slider ====================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startAutoSlide() {
  if (slides.length > 0) {
    slideInterval = setInterval(nextSlide, 10000);
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(slideInterval);
    currentSlide = index;
    showSlide(currentSlide);
    startAutoSlide();
  });
});

startAutoSlide();

// ==================== All Products Data ====================
const allProducts = {
  coffee: [
    {
      id: 1,
      name: "Ice Coffee Set",
      description:
        "Experience the art of the perfect pour. At Bean Boutique, our Fine Roastery Selection uses premium beans and expert brewing to hit different. From velvety lattes to refreshing fruit infusions, every handcrafted cup is a masterpiece of flavor and aesthetic.",
      price: 25,
      category: "Iced Coffee",
      hotItem: true,
      flavourNotes: "Sweet, Clean & Smooth",
      img: "img/Hot_Item_coffee1.png",
    },
    {
      id: 2,
      name: "Hot Coffee Set",
      description:
        "Experience the art of the perfect pour. At Bean Boutique, our Fine Roastery Selection uses premium beans and expert brewing to hit different. From velvety lattes to refreshing fruit infusions, every handcrafted cup is a masterpiece of flavor and aesthetic.",
      flavourNotes: "Dark Chocolate, and Hazelnut",
      price: 25,
      category: "Hot Coffee",
      hotItem: true,
      flavourNotes: "Dark Chocolate and Hazelnut",
      img: "img/Hot_Item_Coffee2.png",
    },
    {
      id: 3,
      name: "Ethiopia Sidamo",
      description:
        "Sip sustainably. Our Earth Blend features organic beans harvested with care. Experience a clean, balanced flavor profile that supports the planet. Handcrafted for a fresh, feel-good brew every time.",
      flavourNotes: "Bright blueberry",
      price: 5,
      category: "Hot Coffee",
      hotItem: false,
      img: "img/ElthopiaCoffee.png",
    },
    {
      id: 4,
      name: "Organic Harvest",
      description:
        "Sip sustainably. Our Earth Blend features organic beans harvested with care. Experience a clean, balanced flavor profile that supports the planet. Handcrafted for a fresh, feel-good brew every time.",
      flavourNotes: "Dark cocoa and earthy cedarwood",
      price: 5,
      category: "Hot Coffee",
      hotItem: false,
      img: "img/EarthBlend.png",
    },
    {
      id: 5,
      name: "Single Origin",
      description:
        "Your classic pour. Bean Boutique Single Origin offers a clean, versatile base that hits right. Crafted with precision for velvety smoothness, it's the ultimate premium staple.",
      flavourNotes: "A hint of vanilla.",
      price: 5,
      category: "Hot Coffee",
      hotItem: true,
      img: "img/SingleOriginCoffee.png",
    },
    {
      id: 6,
      name: "Sumatra Bold",
      description:
        "Bold flavor, deep roots. Our Sumatra Bold, Earth Blend, delivers an intense, earthy and smoky kick. Single-origin craftsmanship, handcrafted to perfection. Unleash a powerful coffee experience.",
      flavourNotes: "Ripe stone fruit",
      price: 5,
      category: "Hot Coffee",
      hotItem: false,
      img: "img/SumatraRedCoffee.png",
    },
    {
      id: 7,
      name: "Royal Sumatra Bold ",
      description:
        "Exotic meets robust. Experience Sumatra Bold in its most vibrant form. This single-origin collective roasters' selection offers powerful flavor and craftsmanship. A daringly handcrafted choice.",
      flavourNotes: "Creamy milk chocolate",
      price: 5,
      category: "Hot Coffee",
      hotItem: false,
      img: "img/SurmatraBlueCoffee.png",
    },
    {
      id: 8,
      name: "Chocolate Coffee",
      description:
        "Indulge in the ultimate comfort cup where premium espresso meets the velvety richness of artisanal chocolate. Topped with delicate chocolate curls, this drink is a dream for those who love their coffee with a decadent, dessert-like finish. It’s more than just a drink; it’s a cocoa-infused escape.",
      flavourNotes: "Rich Belgian Chocolate",
      price: 5,
      category: "Hot Coffee",
      hotItem: false,
      img: "img/CholocateCoffee.png",
    },
    {
      id: 9,
      name: "Classic Latte",
      description:
        "The gold standard of coffee craftsmanship. Our Classic Latte features a smooth, full-bodied espresso base balanced with silky, micro-foamed milk. Crowned with elegant latte art, it offers a creamy texture and a gentle caffeine kick that makes it the perfect companion for any time of the day.",
      flavourNotes: "Creamy Vanilla Undertones",
      price: 6,
      category: "Hot Coffee",
      hotItem: false,
      img: "img/ClassicLatte.png",
    },
    {
      id: 10,
      name: "Signature Americano",
      description:
        "The pure essence of our premium roast. Our Signature Americano is crafted by diluting two shots of our finest espresso with hot water, preserving the bold coffee flavor while mellowing out the intensity. It’s clean, crisp, and perfect for those who appreciate the true character of the bean without any distractions.",
      flavourNotes: "Roasted Nuts",
      price: 6,
      category: "Hot Coffee",
      hotItem: true,
      img: "img/Americano.png",
    },
  ],
  beans: [
    {
      id: 11,
      name: "Blue Volcano Beans",
      description:
        "Sourced specifically for Black Sheep Coffee our house espresso is a single origin specialty Robusta coffee from the mineral rich soils in Karnataka. With double the caffeine, richer crema and lower acidity compared to its Arabica cousin it features notes of hazelnut and dark chocolate. Perfect as an espresso and full-bodied so it punches through the milk.",
      flavourNotes: "Creamy milk chocolate",
      brewingMethods: "img/BrewingMethods.webp",
      price: 30,
      category: "Beans",
      hotItem: true,
      img: "img/coffee_fix_blue_detail.png",
    },
    {
      id: 12,
      name: "Crimson Cladera Beans",
      description:
        "This vibrant and fruit-forward coffee is sourced from the high-altitude regions of East Africa, where traditional farming methods have been passed down for generations. Grown at elevations between 1,400 – 2,000 MASL, the cooler climate and diverse landscapes contribute to a complex and refined flavour profile.",
      flavourNotes: "Dark cocoa and earthy cedarwood",
      brewingMethods: "img/BrewingMethods1.webp",
      price: 28,
      category: "Beans",
      hotItem: false,
      img: "img/coffee_fix_red_detail.png",
    },
    {
      id: 13,
      name: "Misty Grove Beans",
      description:
        "Prepared using a natural sugarcane-based decaffeination method. This decaf espresso has all the flavour of our caffeinated varieties but without the caffeine hit. Well balanced and simply delicious, a secret gem amongst its robusta cousins.",
      flavourNotes: "Dark Cocoa",
      brewingMethods: "img/BrewingMethods2.webp",
      price: 28,
      category: "Beans",
      hotItem: false,
      img: "img/coffee_fix_green_detail.png",
    },
    {
      id: 14,
      name: "Night Peak Beans",
      description:
        "Experience the smooth sophistication of Mocha Velvet. This specialty blend is crafted for those who love a deep, indulgent cup. By marrying high-quality espresso beans with rich caramel undertones, we’ve created a velvety mouthfeel that lingers beautifully on the palate. It is the perfect choice for a luxurious morning latte or a comforting afternoon brew.",
      flavourNotes: "Black Cherry",
      brewingMethods: "img/BrewingMethods.webp",
      price: 28,
      category: "Beans",
      hotItem: false,
      img: "img/Mocha Velvet.png",
    },
    {
      id: 15,
      name: "Orange Peak Beans",
      description:
        "Wake up your senses with Orange Peak, our Morning Sunlight selection. This specialty roasted Robusta is designed to provide a bright, high-energy start to your day. Unlike traditional Robusta, our careful roasting process brings out a surprising sweetness and a crisp acidity that mimics the first rays of dawn.",
      flavourNotes: "Zesty Citrus",
      brewingMethods: "img/BrewingMethods2.webp",
      price: 28,
      category: "Beans",
      hotItem: false,
      img: "img/Orange Peak Beans.png",
    },
    {
      id: 16,
      name: "Night Peak",
      description:
        "For the bold and the brave, Night Peak offers an intense, full-bodied experience inspired by the stillness of the mountains at night. As a premium dark roast using 100% Speciality Arabica beans, it provides a powerful caffeine kick without the harsh bitterness, revealing smoky and earthy complexities in every sip.",
      flavourNotes: "Dark Chocolate, and Hazelnut",
      brewingMethods: "img/BrewingMethods1.webp",
      price: 28,
      category: "Beans",
      hotItem: false,
      img: "img/Night Peak.png",
    },
  ],
  equipments: [
    {
      id: 17,
      name: "Professional Drip Coffee Maker",
      description:
        "Designed for coffee lovers who value consistency and convenience. This brewer ensures the optimal water temperature and shower-head distribution to extract the full flavor profile of your favorite Bean Boutique roasts.",
      price: 45,
      usage:
        "Fill the reservoir with fresh water, place a paper filter in the basket, and add medium-ground coffee. Press the switch, and enjoy a perfect pot of gold-standard coffee in minutes.",
      category: "Brewing Equipment",
      importCountry: "Made in China",
      hotItem: false,
      img: "img/Professional Drip Coffee Makers.png",
    },
    {
      id: 18,
      name: "Professional Drip Coffee Maker",
      description:
        "Designed for coffee lovers who value consistency and convenience. This brewer ensures the optimal water temperature and shower-head distribution to extract the full flavor profile of your favorite Bean Boutique roasts.",
      price: 55,
      usage:
        "Fill the reservoir with fresh water, place a paper filter in the basket, and add medium-ground coffee. Press the switch, and enjoy a perfect pot of gold-standard coffee in minutes.",
      category: "Brewing Equipment",
      importCountry: "Made in China",
      hotItem: false,
      img: "img/Professional Drip Coffee Makers1.png",
    },
    {
      id: 19,
      name: "Professional Drip Coffee Maker",
      description:
        "Designed for coffee lovers who value consistency and convenience. This brewer ensures the optimal water temperature and shower-head distribution to extract the full flavor profile of your favorite Bean Boutique roasts.",
      price: 70,
      usage:
        "Fill the reservoir with fresh water, place a paper filter in the basket, and add medium-ground coffee. Press the switch, and enjoy a perfect pot of gold-standard coffee in minutes.",
      category: "Brewing Equipment",
      importCountry: "Made in Japan",
      hotItem: false,
      img: "img/Professional Drip Coffee Makers2.png",
    },
    {
      id: 20,
      name: "Professional Drip Coffee Maker",
      description:
        "Designed for coffee lovers who value consistency and convenience. This brewer ensures the optimal water temperature and shower-head distribution to extract the full flavor profile of your favorite Bean Boutique roasts.",
      price: 85.6,
      usage:
        "Fill the reservoir with fresh water, place a paper filter in the basket, and add medium-ground coffee. Press the switch, and enjoy a perfect pot of gold-standard coffee in minutes.",
      category: "Brewing Equipment",
      importCountry: "Made in Germany",
      hotItem: false,
      img: "img/Professional Drip Coffee Makers3.png",
    },
    {
      id: 21,
      name: "Artisan Glass Pour-Over Decanter",
      description:
        "Experience the ritual of slow coffee. Featuring a heat-resistant glass body and an elegant wooden collar, this brewer produces a clean, bright cup that highlights the delicate floral and fruity notes of your beans.",
      price: 25,
      usage:
        "Place a filter in the top and add coffee grounds. Slowly pour hot water in a circular motion, allowing the coffee to bloom before finishing the pour. The coffee drips directly into the elegant carafe.",
      category: "Brewing Equipment",
      importCountry: "Made in Japan",
      hotItem: false,
      img: "img/Manual Pour-Over Sets1.png",
    },
    {
      id: 22,
      name: "Vintage Wood-Style Moka Pot",
      description:
        "For those who crave the intensity of an espresso-style brew at home. This classic stovetop maker features a unique wood-grain finish, blending traditional Italian brewing with a rustic, modern aesthetic.",
      price: 18,
      usage:
        "Fill the bottom chamber with water and the filter basket with fine-ground coffee. Assemble the unit and heat on a stovetop. As the water boils, pressure forces the rich, concentrated coffee into the upper chamber.",
      category: "Brewing Equipment",
      importCountry: "Made in Japan",
      hotItem: false,
      img: "img/Vintage Wood-Style Moka Pot.png",
    },
    {
      id: 23,
      name: "Artisan Glass Pour-Over Decanter",
      description:
        "Experience the ritual of slow coffee. Featuring a heat-resistant glass body and an elegant wooden collar, this brewer produces a clean, bright cup that highlights the delicate floral and fruity notes of your beans.",
      price: 23,
      usage:
        "Place a filter in the top and add coffee grounds. Slowly pour hot water in a circular motion, allowing the coffee to bloom before finishing the pour. The coffee drips directly into the elegant carafe.",
      category: "Brewing Equipment",
      importCountry: "Made in Japan",
      hotItem: false,
      img: "img/Manual Pour-Over Sets.png",
    },
    {
      id: 24,
      name: "AeroPress Go Travel Brewer",
      description:
        "The ultimate tool for the adventurous coffee drinker. Rapid, total-immersion brewing creates smooth, rich coffee without bitterness. It’s lightweight, durable, and perfect for the office or the great outdoors.",
      price: 28,
      usage:
        "Add coffee and hot water to the chamber, stir for 10 seconds, then gently press the plunger down. The air pressure pushes the coffee through the micro-filter directly into your mug.",
      category: "Brewing Equipment",
      importCountry: "Made in Canada",
      hotItem: true,
      img: "img/AeroPress Go Travel Brewer.png",
    },
    {
      id: 25,
      name: "Breville Smart Drip Station",
      description:
        "High-tech meets high-flavor. This smart brewer features a digital display to customize brew time and temperature. Includes a Keep Warm function to ensure your second cup is as hot and fresh as the first.",
      price: 28,
      usage:
        "Select your preferred brewing mode on the digital interface. The machine automatically adjusts the flow rate and contact time to match your specific coffee type.",
      category: "Brewing Equipment",
      importCountry: "Made in Canada",
      hotItem: false,
      img: "img/Breville Smart Drip Station.png",
    },
    {
      id: 36,
      name: "The Royal Brewer(1918)",
      description:
        "A luxury 19th-century style coffee maker that uses gravity and vacuum pressure to brew a premium, sediment-free cup of coffee. It’s a perfect blend of science and art.",
      price: 199,
      usage:
        "Select your preferred brewing mode on the digital interface. The machine automatically adjusts the flow rate and contact time to match your specific coffee type.",
      category: "Brewing Equipment",
      importCountry: "Made in Spain",
      hotItem: false,
      img: "img/The Royal Brewer.png",
    },
  ],
  snacks: [
    {
      id: 35,
      name: "Cloud-Soft Milk Bread",
      description:
        "Experience the fluffiest slice in town. Our Milk Bread is handcrafted using premium butter and fresh cream to create a 'cloud-like' texture that melts in your mouth. Perfect for those who crave a gentle, comforting bite.",
      flavourNotes: "Rich creamy butter",
      price: 22.5,
      hotItem: true,
      category: "Bread",
      img: "img/Velvet Berry Trifle Cup.png",
    },
    {
      id: 32,
      name: "Boutique Berry Medley",
      description:
        "An aesthetic delight layered with soft sponge, airy cream, and a trio of forest berries. Topped with a crunchy pretzel or fresh fruit for that perfect balance.",
      flavourNotes: "Tart blueberry and juicy strawberry,",
      price: 23,
      hotItem: false,
      category: "Dessert Cups",
      img: "img/Mixed Berry Trifle.png",
    },
    {
      id: 34,
      name: "Tropical Mango Dream",
      description:
        "Bring the sunshine to your palate with layers of light-as-air mousse and fresh mango purée. A refreshing, fruit-forward treat that’s both light and indulgent.",
      flavourNotes: "Ripe Alphonso mango",
      price: 24,
      hotItem: false,
      category: "Dessert Cups",
      img: "img/Mango & Cream Mousse.png",
    },
    {
      id: 31,
      name: "Heart-Shaped Waffles",
      description:
        "Share the sweetness with our Signature Heart Waffles. Topped with fresh strawberries and velvety whipped cream, it’s the perfect aesthetic treat for your feed.",
      flavourNotes: "Sweet strawberry tang",
      price: 23,
      hotItem: true,
      category: "Waffle",
      img: "img/Hot_Item_Waffel.png",
    },
    {
      id: 33,
      name: "White Velvet Strawberry Cube",
      description:
        "A masterpiece of textures featuring a buttery crumble base, topped with silky cream cheese and a vibrant strawberry glaze. Perfect for those who love a classic yet refined dessert.",
      flavourNotes: "Sweet and tangy strawberry",
      price: 26,
      hotItem: false,
      category: "Dessert Cups",
      img: "img/White Strawberry Cheesecake.png",
    },
    {
      id: 26,
      name: "Signature Cookie Box",
      description:
        "Handcrafted cookies made with premium butter and rich chocolate chunks. Whether it’s for a gift or a personal treat, our Signature Box is the ultimate crowd-pleaser.",
      flavourNotes: "Sweet vanilla base",
      price: 25,
      hotItem: false,
      category: "Cookie",
      img: "img/CookieBoxSpecial.png",
    },
    {
      id: 27,
      name: "Guilt-Free Diet Cookie",
      description:
        "Satisfy your cravings without the compromise. Our Diet Cookies are curated for health-conscious foodies who value ethical packaging and clean ingredients.",
      flavourNotes: "Toasted oats",
      price: 29.5,
      hotItem: false,
      category: "Cookie",
      img: "img/DietCookie.png",
    },
    {
      id: 28,
      name: "Chocolate Cookie Pack",
      description:
        "Handcrafted cookies made with premium butter and rich chocolate chunks. Whether it’s for a gift or a personal treat, our Signature Box is the ultimate crowd-pleaser.",
      flavourNotes: "Dark chocolate base",
      price: 18,
      hotItem: false,
      category: "Cookie",
      img: "img/CookieBox.png",
    },
    {
      id: 29,
      name: "Special Croissant Box",
      description:
        "Handcrafted cookies made with premium butter and rich chocolate chunks. Whether it’s for a gift or a personal treat, our Signature Box is the ultimate crowd-pleaser.",
      flavourNotes: "Sweet vanilla base",
      price: 27,
      hotItem: false,
      category: "Cookie",
      img: "img/SpeialCroissantBox.png",
    },
    {
      id: 30,
      name: "Oat Milk Dark Chocolate",
      description:
        "A sophisticated, Vegan-friendly treat made with 58% unroasted cacao and creamy oat milk. Only 2g of sugar, but 100% full of rich, chocolatey goodness.",
      flavourNotes: "Silky oat milk creaminess, and a clean",
      price: 23,
      hotItem: false,
      category: "Chocolate",
      img: "img/DarkChocolateDessert.png",
    },
  ],
};

let storedProducts = JSON.parse(localStorage.getItem("all_products"));

if (!storedProducts) {
  localStorage.setItem("all_products", JSON.stringify(allProducts));
  storedProducts = allProducts;
}

// ==================== Display & Search Logic ====================
function renderPageProducts(filterText = "") {
  const gridContainer = document.getElementById("product-grid-container");
  if (!gridContainer) return;

  const path = window.location.pathname;
  const page = path.split("/").pop();

  let productsToShow = [];

  if (page === "coffee.html") {
    productsToShow = allProducts.coffee;
  } else if (page === "bean.html") {
    productsToShow = allProducts.beans;
  } else if (page === "brewingEqu.html") {
    productsToShow = allProducts.equipments;
  } else if (page === "snacks.html") {
    productsToShow = allProducts.snacks;
  } else {
    productsToShow = [
      ...allProducts.coffee,
      ...allProducts.beans,
      ...allProducts.equipments,
      ...allProducts.snacks,
    ];
  }

  // --- Search Filtering Logic ---
  if (filterText) {
    const searchLow = filterText.toLowerCase();

    productsToShow = productsToShow.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLow) ||
        product.category.toLowerCase().includes(searchLow) ||
        String(product.price).includes(searchLow),
    );
  }

  gridContainer.innerHTML = "";

  if (productsToShow.length === 0) {
    gridContainer.innerHTML = `<p class="no-results">No products found matching "${filterText}"</p>`;
    return;
  }

  productsToShow.forEach((product) => {
    gridContainer.innerHTML += `
        <a href="productDetail.html?id=${product.id}" class="productCard" id="productCard">
          <img src="${product.img}" alt="${product.name}" class="productImg" />
          ${product.hotItem ? '<span class="hot">🔥 Hot Item</span>' : ""}
          <div>
            <h3 class="productTitle">${product.name}</h3>
            <p class="productPrice">$${product.price}</p>
            ${
              product.flavourNotes
                ? `
              <h5 class="flavour-notes-title">Flavour Notes</h5>
              <p class="flavour-notes-content">${product.flavourNotes}</p>
            `
                : ""
            }
            ${
              product.importCountry
                ? `
              <span class="productDetailCategory1">${product.importCountry}</span>
            `
                : ""
            }
          </div>
        </a>
    `;
  });
}

// ==================== Search Event Listeners ====================
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderPageProducts(e.target.value);
    });

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        renderPageProducts(searchInput.value);
      });
    }
  }

  renderPageProducts();
});

// ==================== Cart Logic (Global) ====================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus-btn")) {
    const input = e.target.parentElement.querySelector(".qty-input");
    input.value = parseInt(input.value) + 1;
  }

  if (e.target.classList.contains("minus-btn")) {
    const input = e.target.parentElement.querySelector(".qty-input");
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  }
});

window.onload = () => {
  renderPageProducts();
  if (typeof updateCartIcon === "function") updateCartIcon();
};

// ==================== Product Detail Page ====================
const productNameEl = document.getElementById("product-name");
const addToCartBtn = document.getElementById("addToCart");
const quantityInput = document.getElementById("quantity");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

if (productNameEl) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const all = [
    ...storedProducts.coffee,
    ...storedProducts.beans,
    ...storedProducts.equipments,
    ...storedProducts.snacks,
  ];

  const product = all.find((p) => p.id == productId);

  if (product) {
    let basePrice = product.price;

    const updateTotalPrice = () => {
      const qty = parseInt(quantityInput.value);
      const total = qty * basePrice;
      addToCartBtn.textContent = `Add To Cart - $${total.toFixed(2)}`;
    };

    updateTotalPrice();

    plusBtn.addEventListener("click", () => {
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateTotalPrice();
    });

    minusBtn.addEventListener("click", () => {
      if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateTotalPrice();
      }
    });

    addToCartBtn.addEventListener("click", () => {
      const qty = parseInt(quantityInput.value);
      saveToLocalStorage(product, qty);
    });
  }

  function renderCart() {
    const wrapper = document.getElementById("cart-items-list-wrapper");
    const totalEl = document.getElementById("cart-total-price");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!wrapper) return;

    if (cart.length === 0) {
      wrapper.innerHTML = `<p style="text-align:center; padding: 20px;">Your cart is empty.</p>`;
      if (totalEl) totalEl.innerText = "$0.00";
      return;
    }

    let html = "";
    let overallTotal = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.qty;
      overallTotal += itemTotal;

      html += `
      <div class="cart-items-container">
        <img src="${item.img}" alt="${item.name}" class="cart-img">
        <div class="cart-content">
          <h3 class="cart-product-name">${item.name}</h3>
          
          <div class="cart-item-prices">
            <span class="unit-price">$${item.price} each</span>
            <strong class="item-total-price">Total: $${itemTotal.toFixed(2)}</strong>
          </div>

          <div class="cart-quantity-control">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)">&minus;</button>
            <input type="number" class="qty-input" value="${item.qty}" readonly>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)">&plus;</button>
          </div>
          <a href="#" class="remove-link" onclick="deleteCartItem(${index})">Remove</a>
        </div>
      </div>
    `;
    });

    wrapper.innerHTML = html;
    if (totalEl) totalEl.innerText = `$${overallTotal.toFixed(2)}`;
  }

  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-img").src = product.img;
    document.getElementById("product-price").textContent = "$" + product.price;
    document.getElementById("product-description").textContent =
      product.description || "No description available.";
    document.getElementById("product-category").textContent = product.category;

    const usageDiv = document.getElementById("usageDiv");
    const usageContent = document.getElementById("brewingKitUsage");
    if (usageDiv && usageContent) {
      if (product.usage) {
        usageContent.textContent = product.usage;
        usageDiv.style.display = "block";
      } else {
        usageDiv.style.display = "none";
      }
    }

    const flavourDiv = document.getElementById("flavourNotesDiv");
    const flavourContent = document.getElementById("flavourNotesContentDetail");
    if (flavourDiv && flavourContent) {
      if (product.flavourNotes) {
        flavourContent.textContent = product.flavourNotes;
        flavourDiv.style.display = "block";
      } else {
        flavourDiv.style.display = "none";
      }
    }

    const brewingDiv = document.getElementById("brewingMethodsDiv");
    const brewingImg = document.getElementById("brewingMethodsImg");
    if (brewingDiv && brewingImg) {
      if (product.brewingMethods) {
        brewingImg.src = product.brewingMethods;
        brewingDiv.style.display = "block";
      } else {
        brewingDiv.style.display = "none";
      }
    }

    const importCountryEl = document.getElementById("import-country");
    if (importCountryEl) {
      if (product.importCountry) {
        importCountryEl.textContent = product.importCountry;
        importCountryEl.style.display = "inline-block";
      } else {
        importCountryEl.style.display = "none";
      }
    }

    const hotBadge = document.querySelector(".productDetailHot");
    if (hotBadge) {
      hotBadge.style.display = product.hotItem ? "inline-block" : "none";
    }
  }
}

// ==================== General ====================
const letterTitles = document.querySelectorAll(".letter-animate");

letterTitles.forEach((title) => {
  const text = title.textContent.trim();
  title.textContent = "";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");

    span.innerHTML = char === " " ? "&nbsp;" : char;

    span.style.animationDelay = `${i * 0.05}s`;
    title.appendChild(span);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.5 },
);

letterTitles.forEach((el) => {
  observer.observe(el);
});

const discountBar = document.getElementById("first-time-discount");

window.addEventListener("scroll", () => {
  const discountHeight = discountBar.offsetHeight;
  const triggerPoint = discountHeight * 0.3; // 10%

  if (window.scrollY > triggerPoint) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ==================== Cart ====================
function loadHeader() {
  const commonHTML = `
  <section class="cart-drawer" id="cart-sidebar">
    <div class="cart-header">
      <h2>Your Cart</h2>
      <a href="#" id="cartHide">
        <iconify-icon icon="bitcoin-icons:cross-filled" width="30" height="30"></iconify-icon>
      </a>
    </div>

    <div id="cart-items-list-wrapper"></div>

    <div class="cart-footer" id="cart-footer">
      <div class="cart-total">
        <span class="one">SubTotal:</span>
        <span id="cart-total-price">$0.00</span>
      </div>
      <button class="checkout-btn">Checkout</button>
    </div>
  </section>
  <div class="cart-overlay" id="cart-overlay"></div>
  `;

  document.body.insertAdjacentHTML("afterbegin", commonHTML);

  setupModalLogic();
  setupCartLogic();
  updateCartBadge();
  renderCart();
}

function renderCart() {
  const wrapper = document.getElementById("cart-items-list-wrapper");
  const totalEl = document.getElementById("cart-total-price");
  const footerEl = document.getElementById("cart-footer");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!wrapper) return;

  if (cart.length === 0) {
    wrapper.innerHTML = `<p style="text-align:center; padding: 20px;">Your cart is empty.</p>`;
    if (totalEl) totalEl.innerText = "$0.00";

    if (footerEl) footerEl.style.display = "none";
    return;
  }

  if (footerEl) footerEl.style.display = "block";

  let html = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += Number(item.price) * Number(item.qty);

    html += `
      <div class="cart-items-container">
        <img src="${item.img}" alt="${item.name}" class="cart-img">
        <div class="cart-content">
          <h3 class="cart-product-name">${item.name}</h3>
          <div class="cart-price-and-qty">
            <span class="cart-product-price">$${item.price}</span>
            <div class="cart-quantity-control">
              <button class="qty-btn" onclick="updateCartQty(${index}, -1)">&minus;</button>
              <input type="number" class="qty-input" value="${item.qty}" readonly>
              <button class="qty-btn" onclick="updateCartQty(${index}, 1)">&plus;</button>
            </div>
          </div>
          <a href="#" class="remove-link" onclick="deleteCartItem(${index})">Remove</a>
        </div>
      </div>
    `;
  });

  wrapper.innerHTML = html;
  if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;
}

window.updateCartQty = (index, change) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].qty += change;
  if (cart[index].qty < 1) cart[index].qty = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartBadge();
};

window.deleteCartItem = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartBadge();
};

function saveToLocalStorage(product, qty) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      qty: qty,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  if (typeof updateCartBadge === "function") updateCartBadge();

  renderCart();

  const cartSidebar = document.getElementById("cart-sidebar");
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartSidebar && cartOverlay) {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
  }
}

function setupCartLogic() {
  const cartIconBtn = document.getElementById("cart-icon-btn");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartHideBtn = document.getElementById("cartHide");
  const cartOverlay = document.getElementById("cart-overlay");

  if (cartIconBtn) {
    cartIconBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cartSidebar.classList.add("active");
      cartOverlay.classList.add("active");
    });
  }

  if (cartHideBtn) {
    cartHideBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cartSidebar.classList.remove("active");
      cartOverlay.classList.remove("active");
    });
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", () => {
      cartSidebar.classList.remove("active");
      cartOverlay.classList.remove("active");
    });
  }
}

loadHeader();
