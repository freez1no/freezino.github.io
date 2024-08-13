document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    // 파스텔톤 색상을 랜덤으로 생성하는 함수
    function getRandomPastelColor() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 100%, 85%)`;
    }

    // 배경을 점진적으로 변경하는 함수
    function changeBackground() {
        const color1 = getRandomPastelColor();
        const color2 = getRandomPastelColor();
        const color3 = getRandomPastelColor();

        header.style.background = `linear-gradient(120deg, ${color1}, ${color2}, ${color3})`;
        header.classList.remove("fade-in"); // 재적용을 위해 클래스 제거
        void header.offsetWidth; // 트리거로 강제 재계산
        header.classList.add("fade-in");
    }

    // 애니메이션 적용
    setInterval(changeBackground, 5000); // 5초마다 배경 변경
});
