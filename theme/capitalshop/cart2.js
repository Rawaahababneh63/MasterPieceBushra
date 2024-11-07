<!doctype html>
<html class="no-js" lang="zxx">

<!-- Mirrored from preview.colorlib.com/theme/capitalshop/cart.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Sep 2024 04:32:23 GMT -->
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Shop | eCommers</title>
<meta name="description" content>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/x-icon" href="assets/img/icon/favicon.png">

<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/owl.carousel.min.css">
<link rel="stylesheet" href="assets/css/slicknav.css">
<link rel="stylesheet" href="assets/css/flaticon.css">
<link rel="stylesheet" href="assets/css/animate.min.css">
<link rel="stylesheet" href="assets/css/price_rangs.css">
<link rel="stylesheet" href="assets/css/magnific-popup.css">
<link rel="stylesheet" href="assets/css/fontawesome-all.min.css">
<link rel="stylesheet" href="assets/css/themify-icons.css">
<link rel="stylesheet" href="assets/css/slick.css">
<link rel="stylesheet" href="assets/css/nice-select.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/style1.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

<div id="preloader-active">
<div class="preloader d-flex align-items-center justify-content-center">
<div class="preloader-inner position-relative">
<div class="preloader-circle"></div>
<div class="preloader-img pere-text">
<img src="assets/img/icon/loder.png" alt="loder">
</div>
</div>
</div>
</div>

<header>
    <div class="header-area">
        <!-- الجزء الأول (Header-Top) -->
        <div class="header-top d-none d-sm-block">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="d-flex justify-content-between flex-wrap align-items-center">
                            <div class="header-info-left">
                                <ul>
                                   
                                    <!-- <li><a href="#">الخصوصية</a></li> -->
                                    <li><a href="CleanOut.html#faq">الأسئلة الشائعة</a></li>
                                    <li><a href="About1.html">معلومات عنا</a></li>
                                </ul>
                            </div>
                            <div class="header-info-right d-flex">
                                <ul class="order-list">
                                    <li><a href="#">قائمة أمنياتي</a></li>
                                    <li><a href="checkout.html">تتبع الطلب</a></li>
                                </ul>
                                <ul class="header-social">
                                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- الجزء الثاني (Header-Bottom) -->
        <div class="header-bottom text-center">
            <p dir="rtl" >تخفيضات تصل إلى 50%  أسرع ! العرض لفترة محدودة <a href="categories.html" class="browse-btn" >تسوق الآن</a></p>
        </div>
    
  
          
        </div>
    </div>
    </header>
    
<main>

<div class="hero-area section-bg2">
<div class="container">
<div class="row">
<div class="col-xl-12">
<div class="slider-area">
<div class="slider-height2 slider-bg4 d-flex align-items-center justify-content-center">
<div class="hero-caption hero-caption2">
<h2>عربة التسوق</h2>
<nav aria-label="breadcrumb">
<ol class="breadcrumb justify-content-center">
    <li class="breadcrumb-item"><a href="#">عربة التسوق</a></li>
<li class="breadcrumb-item"><a href="index.html">الرئيسية</a></li>

</ol>
</nav>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="shopping_cart_area mt-100">
  <div class="container">
    <form action="#">
      <div class="row">
        <div class="col-12">
          <div class="table_desc">
            <div class="cart_page table-responsive">
              <table>
                <thead>
                  <tr>
                    <th class="product_remove">Delete</th>
                    <th class="product_thumb">Image</th>
                    <th class="product_name">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product_quantity">Quantity</th>
                    <th class="product_total">Total</th>
                  </tr>
                </thead>
                <tbody id="table"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!--coupon code area start-->
      <div class="coupon_area">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="coupon_code left">
              <h3>Coupon</h3>
              <div class="coupon_inner">
                <p>Enter your Voucher code if you have one.</p>
                <input
                  id="inputVoucher"
                  placeholder="Coupon code"
                  type="text"
                />
                <button type="button" onclick="checkVoucher()">
                  Apply coupon
                </button>
                <p id="errorMessage" class="text-danger"></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="coupon_code right">
              <h3>Cart Totals</h3>
              <div class="coupon_inner">
                <div class="cart_subtotal">
                  <p>Subtotal</p>
                  <p class="cart_amount" id="totalCartPrice"></p>
                </div>
                <div class="cart_subtotal">
                  <p>Disconte</p>
                  <p id="disconteAmount" class="cart_amount"></p>
                </div>
                <hr />
                <div class="cart_subtotal">
                  <p>Total</p>
                  <p id="totalAfterDisconte" class="cart_amount"></p>
                </div>
                <div class="checkout_btn">
                  <button onclick="checkOut(event)">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--coupon code area end-->
    </form>
  </div>
</div>


</main>
<footer>
    <div class="footer-wrapper gray-bg">
        <div class="footer-area footer-padding">

            <!-- قسم الاشتراك في النشرة الإخبارية -->
            <section class="subscribe-area">
                <div class="container">
                    <div class="row justify-content-between subscribe-padding">
                        <div class="col-xxl-2 col-xl-2 col-lg-4">
                            <div class="footer-social">
                                <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                       
                        <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
                            <div class="subscribe-caption">
                                <form action="#">
                                    <input type="text" placeholder="أدخل بريدك الإلكتروني">
                                    <button class="subscribe-btn">اشترك</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4">
                            <div class="subscribe-caption">
                                <h3>اشترك في النشرة الإخبارية</h3>
                                <p>اشترك في النشرة الإخبارية للحصول على خصم 5% على جميع المنتجات.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- قسم معلومات الفوتر -->
            <div class="container">
                <div class="row justify-content-between">
                  
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>تسوق للرجال</h4>
                                <ul>
                                    <li><a href="#">أزياء الملابس</a></li>
                                    <li><a href="#">شتاء</a></li>
                                    <li><a href="#">صيف</a></li>
                                    <li><a href="#">رسمية</a></li>
                                    <li><a href="#">عادية</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle" >
                                <h4>تسوق للنساء</h4>
                                <ul>
                                    <li><a href="#">أزياء الملابس</a></li>
                                    <li><a href="#">شتاء</a></li>
                                    <li><a href="#">صيف</a></li>
                                    <li><a href="#">رسمية</a></li>
                                    <li><a href="#">عادية</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>معلومات</h4>
                                <ul>
                                    <li><a href="#">من نحن</a></li>
                                    <li><a href="#">سياسة الخصوصية</a></li>
                                    <li><a href="#">الشروط والأحكام</a></li>
                                    <li><a href="#">اتصل بنا</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-8">
                        <div class="single-footer-caption mb-50">
                            <div class="single-footer-caption mb-20">
                                <div class="footer-logo mb-35">
                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="شعار"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  
</footer>

<div id="back-top">
<a class="wrapper" title="Go to Top" href="#">
<div class="arrows-container">
<div class="arrow arrow-one">
</div>
<div class="arrow arrow-two">
</div>
</div>
</a>
</div>


<script src="assets/js/vendor/modernizr-3.5.0.min.js"></script>
<script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/slick.min.js"></script>
<script src="assets/js/jquery.slicknav.min.js"></script>

<script src="assets/js/wow.min.js"></script>
<script src="assets/js/jquery.magnific-popup.js"></script>
<script src="assets/js/jquery.nice-select.min.js"></script>
<script src="assets/js/jquery.counterup.min.js"></script>
<script src="assets/js/waypoints.min.js"></script>
<script src="assets/js/price_rangs.js"></script>

<script src="assets/js/contact.js"></script>
<script src="assets/js/jquery.form.js"></script>
<script src="assets/js/jquery.validate.min.js"></script>
<script src="assets/js/mail-script.js"></script>
<script src="assets/js/jquery.ajaxchimp.min.js"></script>

<script src="assets/js/plugins.js"></script>
<script src="assets/js/main.js"></script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
<script>
 
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-23581568-13');
</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"8c3e21530c8a32ae","version":"2024.8.0","serverTiming":{"name":{"cfExtPri":true,"cfL4":true}},"token":"cd0b4b3a733644fc843ef0b185f98241","b":1}' crossorigin="anonymous"></script>




<script>

//   var userId = localStorage.getItem("UserId");
//   var totalCartPrice = 0;
//   var disconteAmount = 0;

//   var errorMessage = document.getElementById("errorMessage");


//   async function checkVoucher() {
//   if (userId == null) {
//     alert("يجب عليك تسجيل الدخول قبل استخدام القسيمة!");
//   } else {
//     var voucher = document.getElementById("inputVoucher").value;

//     const url = `https://localhost:44332/api/Cart/ApplyVoucher/${voucher}`;

//     try {
//       var response = await fetch(url);
//       var data = await response.json();

//       if (!response.ok) {
//         errorMessage.innerHTML = data.message;
//       } else {
//         disconteAmount = parseFloat(data.discount);

//         var discount = (disconteAmount / 100) * totalCartPrice;
//         var totalAfterDisconte = totalCartPrice - discount;

//         var disconteAmountText = document.getElementById("disconteAmount");
//         disconteAmountText.textContent = `$${discount.toFixed(2)}`;

//         var totalAfterDisconteText =
//           document.getElementById("totalAfterDisconte");
//         totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

//         localStorage.amountForPay = totalAfterDisconte.toFixed(2);

//         errorMessage.innerHTML = "";

//         alert("تم تطبيق القسيمة بنجاح!");
//       }
//     } catch (error) {
//       console.error("حدث خطأ أثناء تطبيق القسيمة.", error);
//       errorMessage.innerHTML = "An error occurred while applying the voucher.";
//     }
//   }
// }


// disconteAmountText = document.getElementById("disconteAmount");
// disconteAmountText.textContent = `$${disconteAmount.toFixed(2)}`;

// // Function to change the quantity of the cart item in local storage
// function changeQuantity1(cartItemId, priceWithDiscount) {
//   // Get the quantity input value
//   const quantityInput = document.getElementById(`quantity-${cartItemId}`);
//   const newQuantity = parseInt(quantityInput.value);

//   // Get the current cart items from local storage
//   let cartItems = JSON.parse(localStorage.getItem("cartItems"));

//   // Update the quantity of the specific item in local storage
//   cartItems = cartItems.map((item) => {
//     if (item.product_id == cartItemId) {
//       item.quantity = newQuantity;
//     }
//     return item;
//   });

//   // Save the updated cart items back to local storage
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));

//   // Update the total price for the item on the UI
//   const totalPriceElement = document.getElementById(
//     `total-price-${cartItemId}`
//   );
//   const updatedTotalPrice = (priceWithDiscount * newQuantity).toFixed(2);
//   totalPriceElement.textContent = `$${updatedTotalPrice}`;

//   // Optional: If you have a total cart price displayed somewhere, you can also update it
//   updateTotalCartPrice();
// }

// // Function to recalculate and update the total cart price
// function updateTotalCartPrice() {
//   let totalCartPrice = 0;
//   let cartItems = JSON.parse(localStorage.getItem("cartItems"));

//   cartItems.forEach((item) => {
//     totalCartPrice += parseFloat(item.price) * item.quantity;
//   });

//   // Update the total cart price element (assuming you have one in the HTML)
//   document.getElementById(
//     "totalCartPrice"
//   ).textContent = `$${totalCartPrice.toFixed(2)}`;
// }

// function deleteItem1(productId) {
//   let storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

//   const updatedCartItems = storedCartItems.filter(
//     (item) => item.product_id !== productId.toString()
//   );

//   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

//   const itemRow = document.getElementById(`item-row-${productId}`);
//   if (itemRow) {
//     itemRow.remove();
//   }

//   updateTotalPrice();
// }


// async function changeQuantity(cartItemId, productPrice) {
//   const Quantity = document.getElementById(`quantity-${cartItemId}`);
//   const newQuantity = parseInt(Quantity.value);

//   const url = `https://localhost:44362/api/Cart/changeQuantity`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       cartItemId: cartItemId,
//       quantity: newQuantity,
//     }),
//   });

//   // Calculate the new total for the specific item
//   const newTotalPrice = productPrice * newQuantity;

//   // Get the old total for the specific item from the DOM
//   const oldTotalPriceElement = document.getElementById(
//     `total-price-${cartItemId}`
//   );
//   const oldTotalPrice = parseFloat(
//     oldTotalPriceElement.innerHTML.replace("$", "")
//   );

//   oldTotalPriceElement.innerHTML = `$${newTotalPrice.toFixed(2)}`;

//   totalCartPrice = totalCartPrice - oldTotalPrice + newTotalPrice;

//   let cartTotalElements = document.getElementById("totalCartPrice");
//   cartTotalElements.textContent = `$${totalCartPrice.toFixed(2)}`;

//   let totalAfterDisconte = totalCartPrice - disconteAmount;

//   // Update totalAfterDisconteText in the DOM
//   let totalAfterDisconteText = document.getElementById("totalAfterDisconte");
//   totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

//   localStorage.amountForPay = totalAfterDisconte.toFixed(2);
// }

// // Function to delete an item from the cart
// function deleteItem(productId) {
//     if (confirm("هل أنت متأكد أنك تريد حذف هذا العنصر من السلة؟")) {
//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems = cartItems.filter(item => item.product_id !== productId); // إزالة العنصر

//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         document.getElementById(`item-row-${productId}`).remove(); // إزالة العنصر من واجهة المستخدم
//         updateTotalCartPrice(); // تحديث السعر الإجمالي بعد الحذف
//     }
// }


// ///////////////////////////////////////////////////////////////////////////////////////
// async function showItemsCart() {

//   if (userId == null) {
//     var selectedItems = JSON.parse(localStorage.getItem("cartItems"));

//     let itemContainer = document.getElementById("table");

//     selectedItems.forEach((item) => {
//     //   totalCartPrice += item.price * item.quantity;

//       itemContainer.innerHTML += `
//             <tr id="item-row-${item.productId}">
//             <td class="product_remove" style="cursor: pointer;">
//                 <i onclick="deleteItem1(${item.productId})" class="fa fa-trash-o"></i>
//             </td>
//             <td class="product_thumb">
//                 <a href="#"><img src="/htmldemo.net/dorno/dorno/assets/img/product/${
//                 item.image
//                 }" alt=""></a>
//             </td>
//             <td class="product_name">
//                 <a href="#">${item.name}</a>
//             </td>
//             <td class="product-price">$${item.price}</td>
//             <td class="product_quantity">
//                 <label>Quantity</label>
//                 <input id="quantity-${item.product_id}" min="1" max="100"
//                     value="${item.quantity}" type="number">
//             </td>
//             <td id="total-price-${item.product_id}" class="product_total">
//                 $${(item.price * item.quantity).toFixed(2)}
//             </td>
//             </tr>
//   `;
//     });

//     let cartTotalElements = document.getElementById("totalCartPrice");
//     cartTotalElements.innerHTML = `$${totalCartPrice.toFixed(2)}`;

//     let totalAfterDisconte = totalCartPrice - disconteAmount;

//     let totalAfterDisconteText = document.getElementById("totalAfterDisconte");
//     totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

//     localStorage.amountForPay = totalAfterDisconte.toFixed(2);
//   } else {
//     let url = `https://localhost:44332/api/Cart/getUserCartItems/${userId}`;

//     let request = await fetch(url);
//     let data = await request.json();
//     let itemContainer = document.getElementById("table");

//     data.forEach((item) => {
//       totalCartPrice += item.product.priceWithDiscount * item.quantity;

//       itemContainer.innerHTML += `
//     <tr id="item-row-${item.cartItemId}">
//       <td class="product_remove" style="cursor: pointer;">
//         <i  class="fa fa-trash-o"></i>
//       </td>
//       <td class="product_thumb">
//         <a href="#"><img src="/htmldemo.net/dorno/dorno/assets/img/product/${
//           item.product.image
//         }" alt=""></a>
//       </td>
//       <td class="product_name">
//         <a href="#">${item.product.name}</a>
//       </td>
//       <td class="product-price">$${item.product.price}</td>
//       <td class="product_quantity">
//         <label>Quantity</label>
//         <input id="quantity-${item.cartItemId}" min="1" max="100"
              
//                value="${item.quantity}" type="number">
//       </td>
//       <td id="total-price-${item.cartItemId}" class="product_total">
//         $${(item.product.price * item.quantity).toFixed(2)}
//       </td>
//     </tr>
//   `;
//     });

//     let cartTotalElements = document.getElementById("totalCartPrice");
//     cartTotalElements.innerHTML = `$${totalCartPrice.toFixed(2)}`;

//     let totalAfterDisconte = totalCartPrice - disconteAmount;

//     let totalAfterDisconteText = document.getElementById("totalAfterDisconte");
//     totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

//     localStorage.amountForPay = totalAfterDisconte.toFixed(2);
//   }
// }
// showItemsCart();

// /////////////////////////////////////////////////////////////////////////////////////


// // Checkout function
// async function checkOut(event) {
//     event.preventDefault();
//     const userId = localStorage.getItem("UserId");

//     if (!userId) {
//         alert("يجب عليك تسجيل الدخول لإتمام عملية الشراء");
//         setTimeout(() => {
//             window.location.href = "/capitalshop/login.html";
//         }, 100);
//         return;
//     }

//     try {
//         const url = `https://localhost:44332/api/Cart/getUserCartItems/${userId}`;
        
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             console.error("فشل في جلب عناصر سلة المستخدم:", response.status, response.statusText);
//             alert("حدث خطأ أثناء تحميل السلة. يرجى المحاولة لاحقًا.");
//             return;
//         }

//         const apiCartItems = await response.json();
//         const localCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        
//         // دمج العناصر هنا
//         const mergedCart = mergeCarts(localCartItems, apiCartItems);
        
//         // تخزين العناصر المدمجة
//         localStorage.setItem("checkoutItems", JSON.stringify(mergedCart));

//         // عرض العناصر المحدثة
//         showItemsCart(); 

//         // الانتقال إلى صفحة الدفع
//         window.location.href = "/CheckOutrawa.html"; 
//     } catch (error) {
//         console.error("خطأ أثناء عملية الدفع:", error);
//         alert("حدث خطأ غير متوقع.");
//     }
// }


var userId = localStorage.getItem("UserId");
var totalCartPrice = 0; // Example cart price, set to a valid value
var disconteAmount = 0;

var errorMessage = document.getElementById("errorMessage");

async function checkVoucher() {
  if (userId == null) {
    alert("You must be login befor using Voucher!");
  } else {
    var voucher = document.getElementById("inputVoucher").value;

    const url = `https://localhost:44332/api/Cart/ApplyVoucher/${voucher}`;

    try {
      var response = await fetch(url);
      var data = await response.json();

      if (!response.ok) {
        errorMessage.innerHTML = data.message;
      } else {
        disconteAmount = parseFloat(data.discount);

        var discount = (disconteAmount / 100) * totalCartPrice;
        var totalAfterDisconte = totalCartPrice - discount;

        var disconteAmountText = document.getElementById("disconteAmount");
        disconteAmountText.textContent = `$${discount.toFixed(2)}`;

        var totalAfterDisconteText =
          document.getElementById("totalAfterDisconte");
        totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

        localStorage.amountForPay = totalAfterDisconte.toFixed(2);

        errorMessage.innerHTML = "";

        alert("Voucher applied successfully!");
      }
    } catch (error) {
      console.error("Error applying voucher:", error);
      errorMessage.innerHTML = "An error occurred while applying the voucher.";
    }
  }
}

disconteAmountText = document.getElementById("disconteAmount");
disconteAmountText.textContent = `$${disconteAmount.toFixed(2)}`;

// Convert the object to a string and save it in local storage






// async function showItemsCart() {
//     let totalCartPrice = 0; 
//     const itemContainer = document.getElementById("table");
//     itemContainer.innerHTML = ""; 

//     let negotiatedPrices = JSON.parse(localStorage.getItem('negotiatedPrices')) || {};
//     console.log("أسعار التفاوض:", negotiatedPrices);

//     if (userId == null) {
//         var selectedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         console.log("العناصر المختارة:", selectedItems);

//         if (selectedItems.length === 0) {
//             itemContainer.innerHTML = "<tr><td colspan='6'>لا توجد عناصر في السلة.</td></tr>";
//             return;
//         }

//         selectedItems.forEach((item) => {
//             const productId = item.productId; // تأكد من استخدام productId الصحيح
//             console.log(`تحقق من productId: ${productId}`);

//             if (negotiatedPrices[productId]) {
//                 console.log(`تم العثور على سعر تفاوضي للمنتج ${productId}: ${negotiatedPrices[productId]}`);
//             } else {
//                 console.log(`لا يوجد سعر تفاوضي للمنتج ${productId}`);
//             }

//             const priceToDisplay = negotiatedPrices[productId] ? parseFloat(negotiatedPrices[productId]) : item.price; 
//             totalCartPrice += priceToDisplay * item.quantity;

//             itemContainer.innerHTML += `
//                 <tr id="item-row-${productId}">
//                     <td class="product_remove" style="cursor: pointer;">
//                         <i onclick="deleteItem1(${productId})" class="fa fa-trash-o"></i>
//                     </td>
//                     <td class="product_thumb">
//                         <a href="#"><img src="../../../../Backend/Masterpiece/Masterpiece/Uploads/${item.image}" alt=""></a>
//                     </td>
//                     <td class="product_name">
//                         <a href="#">${item.name}</a>
//                     </td>
//                     <td class="product-price">$${priceToDisplay.toFixed(2)}</td>
//                     <td class="product_quantity">
//                         <label>Quantity</label>
//                         <input id="quantity-${productId}" min="1" max="100"
//                             value="${item.quantity}" type="number"
//                             onchange="changeQuantity1(${productId}, ${priceToDisplay})">
//                     </td>
//                     <td id="total-price-${productId}" class="product_total">
//                         $${(priceToDisplay * item.quantity).toFixed(2)}
//                     </td>
//                 </tr>
//             `;
//         });
//     } else {
//         let url = `https://localhost:44332/api/Cart/getUserCartItems/${userId}`;
//         let request = await fetch(url);
        
//         if (!request.ok) {
//             console.error("فشل في الحصول على بيانات السلة:", request.statusText);
//             return;
//         }

//         let data = await request.json();
//         console.log("البيانات المسترجعة من السلة:", data);
//         if (!data.length) {
//             itemContainer.innerHTML = "<tr><td colspan='6'>لا توجد عناصر في السلة.</td></tr>";
//             return;
//         }

//         data.forEach((item) => {
//             const productId = item.product.productId; // تأكد من استخدام productId الصحيح
//             console.log(`تحقق من productId: ${productId}`);

//             if (negotiatedPrices[productId]) {
//                 console.log(`تم العثور على سعر تفاوضي للمنتج ${productId}: ${negotiatedPrices[productId]}`);
//             } else {
//                 console.log(`لا يوجد سعر تفاوضي للمنتج ${productId}`);
//             }

//             const priceToDisplay = negotiatedPrices[productId] ? parseFloat(negotiatedPrices[productId]) : item.product.price; 
//             totalCartPrice += priceToDisplay * item.quantity;

//             itemContainer.innerHTML += `
//                 <tr id="item-row-${item.cartItemId}">
//                     <td class="product_remove" style="cursor: pointer;">
//                         <i onclick="deleteItem(${item.cartItemId})" class="fa fa-trash-o"></i>
//                     </td>
//                     <td class="product_thumb">
//                         <a href="#"><img src="../../../../Backend/Masterpiece/Masterpiece/Uploads/${item.product.image}" alt=""></a>
//                     </td>
//                     <td class="product_name">
//                         <a href="#">${item.product.name}</a>
//                     </td>
//                     <td class="product-price">$${priceToDisplay.toFixed(2)}</td>
//                     <td class="product_quantity">
//                         <label>Quantity</label>
//                         <input id="quantity-${item.cartItemId}" min="1" max="100"
//                             onchange="changeQuantity(${item.cartItemId}, ${priceToDisplay})"
//                             value="${item.quantity}" type="number">
//                     </td>
//                     <td id="total-price-${item.cartItemId}" class="product_total">
//                         $${(priceToDisplay * item.quantity).toFixed(2)}
//                     </td>
//                 </tr>
//             `;
//         });
//     }

//     // تحديث إجمالي السلة
//     let cartTotalElements = document.getElementById("totalCartPrice");
//     cartTotalElements.innerHTML = `$${totalCartPrice.toFixed(2)}`;

//     let totalAfterDisconte = totalCartPrice - disconteAmount;
//     let totalAfterDisconteText = document.getElementById("totalAfterDisconte");
//     totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

//     localStorage.amountForPay = totalAfterDisconte.toFixed(2);
// }

// // استدعاء الدالة
// showItemsCart();




async function showItemsCart() {
    let totalCartPrice = 0; 
    const itemContainer = document.getElementById("table");
    itemContainer.innerHTML = ""; 

    let negotiatedPrices = JSON.parse(localStorage.getItem('negotiatedPrices')) || {};
    console.log("أسعار التفاوض:", negotiatedPrices);

    if (userId == null) {
        var selectedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        console.log("العناصر المختارة:", selectedItems);

        if (selectedItems.length === 0) {
            itemContainer.innerHTML = "<tr><td colspan='6'>لا توجد عناصر في السلة.</td></tr>";
            return;
        }

        selectedItems.forEach((item) => {
            const productId = item.productId; 
            console.log(`تحقق من productId: ${productId}`);

            const negotiatedPrice = negotiatedPrices[productId];
            let priceToDisplay;

            // تحديد السعر الذي سيظهر
            if (negotiatedPrice) {
                console.log(`تم العثور على سعر تفاوضي للمنتج ${productId}: ${negotiatedPrice}`);
                priceToDisplay = parseFloat(negotiatedPrice).toFixed(2);
            } else if (item.priceWithDiscount !== null && item.priceWithDiscount > 0) {
                // إذا كان هناك خصم، احسب السعر بعد الخصم
                priceToDisplay = (item.price - (item.price * (item.priceWithDiscount / 100))).toFixed(2);
                console.log(`لا يوجد سعر تفاوضي للمنتج ${productId}. سعر المنتج بعد الخصم هو: ${priceToDisplay}`);
            } else {
                // عرض السعر الأصلي
                priceToDisplay = item.price.toFixed(2);
                console.log(`لا يوجد سعر تفاوضي أو خصم للمنتج ${productId}. السعر الأصلي هو: ${priceToDisplay}`);
            }

            totalCartPrice += priceToDisplay * item.quantity;

            itemContainer.innerHTML += `
                <tr id="item-row-${productId}">
                    <td class="product_remove" style="cursor: pointer;">
                        <i onclick="deleteItem1(${productId})" class="fa fa-trash-o"></i>
                    </td>
                    <td class="product_thumb">
                        <a href="#"><img src="../../../../Backend/Masterpiece/Masterpiece/Uploads/${item.image}" alt=""></a>
                    </td>
                    <td class="product_name">
                        <a href="#">${item.name}</a>
                    </td>
                    <td class="product-price">$${priceToDisplay}</td>
                    <td class="product_quantity">
                        <label>Quantity</label>
                        <input id="quantity-${productId}" min="1" max="100"
                            value="${item.quantity}" type="number"
                            onchange="changeQuantity1(${productId}, ${priceToDisplay})">
                    </td>
                    <td id="total-price-${productId}" class="product_total">
                        $${(priceToDisplay * item.quantity).toFixed(2)}
                    </td>
                </tr>
            `;
        });
    } else {
        let url = `https://localhost:44332/api/Cart/getUserCartItems/${userId}`;
        let request = await fetch(url);
        
        if (!request.ok) {
            console.error("فشل في الحصول على بيانات السلة:", request.statusText);
            return;
        }

        let data = await request.json();
        console.log("البيانات المسترجعة من السلة:", data);
        if (!data.length) {
            itemContainer.innerHTML = "<tr><td colspan='6'>لا توجد عناصر في السلة.</td></tr>";
            return;
        }

        data.forEach((item) => {
            const productId = item.product.productId; 
            console.log(`تحقق من productId: ${productId}`);

            const negotiatedPrice = negotiatedPrices[productId];
            let priceToDisplay;

            // تحديد السعر الذي سيظهر
            if (negotiatedPrice) {
                console.log(`تم العثور على سعر تفاوضي للمنتج ${productId}: ${negotiatedPrice}`);
                priceToDisplay = parseFloat(negotiatedPrice).toFixed(2);
            } else if (item.product.priceWithDiscount !== null && item.product.priceWithDiscount > 0) {
                // إذا كان هناك خصم، احسب السعر بعد الخصم
                priceToDisplay = (item.product.price - (item.product.price * (item.product.priceWithDiscount / 100))).toFixed(2);
                console.log(`لا يوجد سعر تفاوضي للمنتج ${productId}. سعر المنتج بعد الخصم هو: ${priceToDisplay}`);
            } else {
                // عرض السعر الأصلي
                priceToDisplay = item.product.price.toFixed(2);
                console.log(`لا يوجد سعر تفاوضي أو خصم للمنتج ${productId}. السعر الأصلي هو: ${priceToDisplay}`);
            }

            totalCartPrice += priceToDisplay * item.quantity;

            itemContainer.innerHTML += `
                <tr id="item-row-${item.cartItemId}">
                    <td class="product_remove" style="cursor: pointer;">
                        <i onclick="deleteItem(${item.cartItemId})" class="fa fa-trash-o"></i>
                    </td>
                    <td class="product_thumb">
                        <a href="#"><img src="../../../../Backend/Masterpiece/Masterpiece/Uploads/${item.product.image}" alt=""></a>
                    </td>
                    <td class="product_name">
                        <a href="#">${item.product.name}</a>
                    </td>
                    <td class="product-price">$${priceToDisplay}</td>
                    <td class="product_quantity">
                        <label>Quantity</label>
                        <input id="quantity-${item.cartItemId}" min="1" max="100"
                            onchange="changeQuantity(${item.cartItemId}, ${priceToDisplay})"
                            value="${item.quantity}" type="number">
                    </td>
                    <td id="total-price-${item.cartItemId}" class="product_total">
                        $${(priceToDisplay * item.quantity).toFixed(2)}
                    </td>
                </tr>
            `;
        });
    }

    // تحديث إجمالي السلة
    let cartTotalElements = document.getElementById("totalCartPrice");
    cartTotalElements.innerHTML = `$${totalCartPrice.toFixed(2)}`;

    let totalAfterDisconte = totalCartPrice - disconteAmount; // تأكد من أن disconteAmount يمثل الخصم
    let totalAfterDisconteText = document.getElementById("totalAfterDisconte");
    totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

    localStorage.amountForPay = totalAfterDisconte.toFixed(2);
}

// استدعاء الدالة
showItemsCart();











































// Function to change the quantity of the cart item in local storage
function changeQuantity1(cartItemId, priceWithDiscount) {
  // Get the quantity input value
  const quantityInput = document.getElementById(`quantity-${cartItemId}`);
  const newQuantity = parseInt(quantityInput.value);

  // Get the current cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));

  // Update the quantity of the specific item in local storage
  cartItems = cartItems.map((item) => {
    if (item.product_id == cartItemId) {
      item.quantity = newQuantity;
    }
    return item;
  });


  // Save the updated cart items back to local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update the total price for the item on the UI
  const totalPriceElement = document.getElementById(
    `total-price-${cartItemId}`
  );
  const updatedTotalPrice = (priceWithDiscount * newQuantity).toFixed(2);
  totalPriceElement.textContent = `$${updatedTotalPrice}`;

  // Optional: If you have a total cart price displayed somewhere, you can also update it
  updateTotalCartPrice();
}

// Function to recalculate and update the total cart price
function updateTotalCartPrice() {
  let totalCartPrice = 0;
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // تأكد أن cartItems هو مصفوفة قبل استخدام forEach
  if (Array.isArray(cartItems)) {
    cartItems.forEach((item) => {
      totalCartPrice += parseFloat(item.price) * item.quantity;
        // تحديث العنصر المسؤول عن عرض السعر الإجمالي
  document.getElementById("totalCartPrice").textContent = `$${totalCartPrice.toFixed(2)}`;
    });
  }


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function deleteItem1(productId) {
  debugger
  // استرجاع العناصر المخزنة في الـ localStorage
  let storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  console.log("العناصر الموجودة في الـ localStorage قبل الحذف:", storedCartItems);

  // تصفية العناصر لحذف العنصر المحدد
  const updatedCartItems = storedCartItems.filter(item => item.product_id !== parseInt(productId));

  console.log("العناصر بعد الحذف:", updatedCartItems);

  // تخزين العناصر المحدثة في الـ localStorage
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

  // إزالة العنصر من واجهة المستخدم
  const itemRow = document.getElementById(`item-row-${productId}`);
  if (itemRow) {
    itemRow.remove();
  }

  alert("تم حذف العنصر من السلة!");
  updateTotalCartPrice(); // تحديث السعر الإجمالي بعد الحذف
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function deleteItem(cartItemId) {
  let url = `https://localhost:44332/api/Cart/deleteItemById/${cartItemId}`;

  fetch(url, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      const itemRow = document.getElementById(`item-row-${cartItemId}`);
      if (itemRow) {
        itemRow.remove();
      }
      alert("Item was deleted!");
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function changeQuantity(cartItemId, productPrice) {
debugger
  const Quantity = document.getElementById(`quantity-${cartItemId}`);
  const newQuantity = parseInt(Quantity.value);

  const url = `https://localhost:44332/api/Cart/changeQuantity`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItemId: cartItemId,
      quantity: newQuantity,
    }),
  });

  // Calculate the new total for the specific item
  const newTotalPrice = productPrice * newQuantity;

  // Get the old total for the specific item from the DOM
  const oldTotalPriceElement = document.getElementById(
    `total-price-${cartItemId}`
  );
  oldTotalPriceElement.innerHTML = `$${newTotalPrice.toFixed(2)}`;

  // Call updateTotalCartPrice to update the overall cart price
  updateTotalCartPrice();

  // Calculate the discount and total after discount
  let totalCartPrice = parseFloat(
    document.getElementById("totalCartPrice").textContent.replace("$", "")
  );
  let totalAfterDisconte = totalCartPrice - disconteAmount;

  // Update totalAfterDisconteText in the DOM
  let totalAfterDisconteText = document.getElementById("totalAfterDisconte");
  totalAfterDisconteText.innerHTML = `$${totalAfterDisconte.toFixed(2)}`;

  // Save the total after discount to localStorage
  localStorage.amountForPay = totalAfterDisconte.toFixed(2);
  
}



















///////////////////////////////////////////////////////////////////////////////////////////

async function checkOut() {
  debugger;
  event.preventDefault();
  localStorage.checkOut = true;

  const userId = localStorage.getItem("UserId");

  // Check if userId is null and redirect if needed
  if (!userId) {
        alert("يجب عليك تسجيل الدخول لإتمام عملية الشراء");
        setTimeout(() => {
            window.location.href = "/capitalshop/login.html";
        }, 100);
        return;
    }
 else {
    window.location.href = "/capitalshop/paypal.html";


  }
}


</script>


</body>

<!-- Mirrored from preview.colorlib.com/theme/capitalshop/cart.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Sep 2024 04:32:23 GMT -->
</html>