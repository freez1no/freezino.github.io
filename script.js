document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".menu a");
    const contents = document.querySelectorAll(".tab-content");

    contents[0].classList.add("active");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            contents.forEach(content => {
                content.classList.remove("active");
            });

            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});
