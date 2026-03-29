const productNameEl = document.getElementById("product-name");

if (productNameEl) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const all = [...allProducts.coffee, ...allProducts.beans, ...allProducts.equipments, ...allProducts.snacks];
    
    const product = all.find(p => p.id == productId);

    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-img").src = product.img;
        document.getElementById("product-price").textContent = "$" + product.price;
        document.getElementById("product-category").textContent = product.category;
        document.getElementById("flavourNotesContentDetail").textContent = product.flavourNotes || "No flavour Notes avaliable!";

        const hotBadge = document.querySelector(".productDetailHot");
        if (hotBadge) {
            hotBadge.style.display = product.hotItem ? "inline-block" : "none";
        }
    } else {
        console.warn("Product with ID " + productId + " not found!");
    }
}