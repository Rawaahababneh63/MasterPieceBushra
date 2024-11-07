const categoryId = localStorage.getItem("categoryid");

const form = document.getElementById("form");


async function loadCategoryData() {
    try {
        // استرجاع معرف الفئة من localStorage
        const categoryId = localStorage.getItem("categoryid");
        if (!categoryId) {
            console.error("Category ID not found in localStorage");
            return;
        }

        const url = `https://localhost:44332/Api/Categories/GetCategorysbyId/${categoryId}`; // تأكد من استخدام الـ URL الصحيح
        const response = await fetch(url);
        console.log("Response:", response); // تحقق من الاستجابة

        if (!response.ok) {
            console.error("Failed to fetch category data:", response.statusText);
            return;
        }

        const category = await response.json();
        console.log("Category data loaded:", category); // طباعة البيانات المسترجعة

        // تعبئة الحقول بالنموذج
        document.getElementById("categoryName").value = category.categoryName || "";

        // تعيين الصورة إذا كانت موجودة
        if (category.categoryImage) {
            const currentImageLabel = document.getElementById("currentImage");
            currentImageLabel.src ='../../../../Backend/Masterpiece/Masterpiece/Uploads/'+ category.categoryImage;
            currentImageLabel.style.display = "block"; // عرض اسم الصورة الحالية
        } else {
            console.log("No image found for the category");
        }
    } catch (error) {
        console.error("Error fetching category data:", error);
        alert("Error loading category data");
    }
}


// دالة لتحديث بيانات الفئة
async function updateCategory(event) {
    debugger;
    event.preventDefault();
    const url = `https://localhost:44332/api/Category/${categoryId}`; 
    const formData = new FormData(form);

    try {
        const response = await fetch(url, { 
            method: "PUT",
            body: formData,
        });

        if (response.ok) {
            alert("Category updated successfully");
            window.location.href = "AllCategory.html"; 
        } else {
            alert("Failed to update category");
            console.error("Update failed:", response.statusText);
        }
    } catch (error) {
        console.error("Error updating category:", error);
        alert("Error updating category");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadCategoryData(); // استدعاء الدالة عند تحميل الصفحة
});
