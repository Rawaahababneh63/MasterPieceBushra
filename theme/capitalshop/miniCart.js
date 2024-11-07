/** @format */
document.querySelector(".cart a").addEventListener("click", function () {
    var miniCart = document.querySelector(".mini_cart");
    if (miniCart.style.display === "none" || miniCart.style.display === "") {
      miniCart.style.display = "block"; // إظهار العربة
      showItemsCart(); // استدعاء دالة عرض المحتويات
    } else {
      miniCart.style.display = "none"; // إخفاء العربة
    }
  });
  
  var token = localStorage.getItem("Token");
  var userId = localStorage.getItem("UserId");
  
  async function showItemsCart() {
    if (token == null) {
      var selectedItems = JSON.parse(localStorage.getItem("cartItems"));
  
      var numberOfSelectedItems = document.getElementById("numberOfSelectedItems");
      numberOfSelectedItems.innerHTML = selectedItems.length;
  
      var miniCart = document.getElementById("cartGallery");
      miniCart.innerHTML = ''; // Clear previous content
  
      selectedItems.forEach((item) => {
        miniCart.innerHTML += `
        <div class="cart_item">
              <div class="cart_img">
                   <a href="#"><img src="/Backend/Masterpiece/Masterpiece/Uploads/${item.image}" alt=""/></a>
              </div>
              <div class="cart_info">
                <a href="#">${item.name}</a>
                <p>${item.quantity} x <span> ${item.price} </span></p>
              </div>
              <div class="cart_remove">
                <a href="#"><i class="ion-ios-close-outline"></i></a>
              </div>
          </div>
      `;
      });
    } else {
      let url = `https://localhost:44332/api/Cart/getUserCartItems/${userId}`;
      let request = await fetch(url);
      let data = await request.json();
      
      var miniCart = document.getElementById("cartGallery");
      var numberOfSelectedItems = document.getElementById("numberOfSelectedItems");
      numberOfSelectedItems.innerHTML = data.length;
  
      miniCart.innerHTML = ''; // Clear previous content
      data.forEach((item) => {
        miniCart.innerHTML += `
        <div class="cart_item">
              <div class="cart_img">
                  <a href="#"><img src="/htmldemo.net/dorno/dorno/assets/img/product/${item.product.image}" alt=""/></a>
              </div>
              <div class="cart_info">
                <a href="#">${item.product.name}</a>
                <p>${item.quantity} x <span> ${item.product.priceWithDiscount} </span></p>
              </div>
              <div class="cart_remove">
                <a href="#"><i class="ion-ios-close-outline"></i></a>
              </div>
          </div>
      `;
      });
    }
  }
  
  showItemsCart();
  