document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    function getRandomPastelColor() {
        const hue = Math.floor(Math.random() * 360);
        const pastel = `hsl(${hue}, 100%, 85%)`;
        return pastel;
    }

    function changeBackground() {
        const color1 = getRandomPastelColor();
        const color2 = getRandomPastelColor();
        const color3 = getRandomPastelColor();

        header.style.background = `linear-gradient(120deg, ${color1}, ${color2}, ${color3})`;
    }

    // 애니메이션 적용
    setInterval(changeBackground, 3000); // 3초마다 배경 변경
});
