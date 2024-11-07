async function Allorders() {
    debugger
  const url = "https://localhost:44332/AllOrders";
  
  // جلب الطلبات
  let response = await fetch(url);
  
  // تحقق مما إذا كانت الاستجابة صحيحة
  if (!response.ok) {
      alert("خطأ في جلب الطلبات.");
      return;
  }
  
  let data = await response.json();
  let Orders = document.getElementById("getorder");
  Orders.innerHTML = ""; // مسح المحتوى الموجود مسبقًا

  data.forEach(element => {
    Orders.innerHTML += `
    <tr>
        <td>${element.id}</td>
    
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.status}</td>
        <td>${element.totalAmount}</td>
        <td>${element.orderDate}</td>
        <td>
            <button class="btn btn-primary" onclick="updateOrderStatus(${element.id},'UnderDelivery')">تحت التوصيل</button>
            <button class="btn btn-success" onclick="updateOrderStatus(${element.id},'Approved')">موافق</button>
        </td>
    </tr>
`;

  });
}

// استدعاء دالة Allorders عند تحميل الصفحة
Allorders();
async function updateOrderStatus(orderId,status) {
    debugger; 
    console.log("OrderId:", orderId); // التحقق من القيمة
    console.log("Status:", status); 

    if (!orderId) {
        alert("رقم الطلب غير موجود!");
        return;
    }

    const url = `https://localhost:44332/api/Order/update-order-status-${status}/${orderId}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}) // تمرير جسم فارغ
        });

        if (!response.ok) {
            const errorResponse = await response.text();
            alert(`خطأ: ${errorResponse}`);
            return;
        }

        alert("تم تحديث حالة الطلب بنجاح!");
        Allorders();

    } catch (error) {
        console.error("حدث خطأ:", error);
        alert("خطأ في تحديث حالة الطلب.");
    }
}
