async function Getorder() {
    // let user = localStorage.getItem('Userid');
    let user = document.getElementById("searchuser").value;
    const url = `https://localhost:44332/api/Order/GetAllOrdersByUserEmail/${user}`;
    
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        
        let data = await response.json();
        let Orders = document.getElementById("getorder");
        Orders.innerHTML = ""; // إعادة تعيين محتوى الجدول

        data.forEach(order => {
            // صف الطلب
            Orders.innerHTML += `
                <tr>
                    <td>${order.userId}</td>
                    <td>${order.userName}</td>
              
                    <td>${order.amount}</td>
                    <td>${order.vouchers ? order.vouchers.discountAmount : 0}</td>
                    <td>${order.orderId}</td>
                    <td>${new Date(order.date).toLocaleDateString()}</td>
                    <td>
                        <button class="btn btn-warning" onclick="editstatus(${order.orderId})">Edit</button>
                    </td>
                </tr>
            `;

            // صفوف عناصر الطلب
            order.orderItems.forEach(item => {
                Orders.innerHTML += `
                    <tr>
                        <td colspan="2"></td> <!-- عمود فارغ للمساحة -->
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <select id="orderstatus-${order.orderId}" class="form-control">
                                <option value="${order.status}">${order.status}</option>
                                <option value="Pending">Pending</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </td>
                        <td>${item.quantity}</td>
                        <td colspan="3"></td> <!-- عمود فارغ للمساحة -->
                    </tr>
                `;
            });
        });
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

// استدعاء الدالة بعد تعريفها
Getorder();

async function editstatus(id) {
    debugger
    const url =`https://localhost:44332/api/Order/ChangOrderStatus/${id}`;
    let statusnew = document.getElementById(`orderstatus-${id}`).value;
    let data = {status : statusnew};
    let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert("Order Status updated successfully");
}


