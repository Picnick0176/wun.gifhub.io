// ถ้าต้องการให้หัวใจตกใหม่ในตำแหน่งต่างๆ
document.addEventListener("DOMContentLoaded", function() {
    const sky = document.querySelector('.sky');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        sky.appendChild(heart);
        // ตั้งเวลาให้หัวใจตกหายไป
        setTimeout(() => {
            heart.remove();
        }, 2500); // 2500ms คือเวลาที่หัวใจตกจะหายไป
    }, 500); // 500ms คือเวลาที่หัวใจตกใหม่จะเกิดขึ้น
});
