document.getElementById("startBtn").addEventListener("click", function() {
    let password = document.getElementById("passwordInput").value; // ดึงค่าจาก input

    // ตรวจสอบรหัสผ่าน
    if (password === "03038") {  // เปลี่ยน "yourPassword" เป็นรหัสที่ถูกต้อง
        window.location.href = "Homepage.html"; // เปลี่ยนไปยังหน้า HTML ใหม่
    } else {
        alert("รหัสไม่ถูกต้อง!"); // แสดงข้อความเมื่อรหัสไม่ถูกต้อง
    }
});

