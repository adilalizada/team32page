function scrollToTop() {
    document.documentElement.scrollTop = 0; 
}


window.onscroll = function () {
    showScrollToTopButton();
};

function showScrollToTopButton() {
    var button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}