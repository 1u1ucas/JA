document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    const offset = 100;
    const targetPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollFunction() {
  var scrollToTopBtn = document.querySelector(".up");
  console.log(scrollToTop);
  if (scrollToTopBtn) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollToTopBtn.style.display = "block";
      scrollToTopBtn.classList.remove("hide");
    } else {
      setTimeout(function () {
        scrollToTopBtn.style.display = "none";
      }, 250);
      scrollToTopBtn.classList.add("hide");
    }
  }
}

window.onscroll = function () {
  scrollFunction();
};

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

ScrollReveal().reveal(".office", { reset: true });
ScrollReveal().reveal(".office", { duration: 600 });
ScrollReveal().reveal(".office", { delay: 150 });

ScrollReveal().reveal("#left", { reset: true });
ScrollReveal().reveal("#left", { duration: 400 });
ScrollReveal().reveal("#left", { delay: 150 });
ScrollReveal().reveal("#left", {
  rotate: {
    x: 200,
    z: 200,
  },
});
ScrollReveal().reveal("#left", { origin: "right" });

ScrollReveal().reveal("#right", { reset: true });
ScrollReveal().reveal("#right", { duration: 600 });
ScrollReveal().reveal("#right", { delay: 150 });
ScrollReveal().reveal("#right", {
  rotate: {
    x: 200,
    z: 200,
  },
});
ScrollReveal().reveal("#right", { origin: "left" });
