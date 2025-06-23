// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector(".site-header");
//   const logo = document.querySelector(".site-logo");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 50) {
//       header.classList.add("scrolled");
//       if (logo) {
//         logo.src = logo.getAttribute("data-scrolled");
//       }
//     } else {
//       header.classList.remove("scrolled");
//       if (logo) {
//         logo.src = logo.getAttribute("data-default");
//       }
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  let isScrolling = false;
  let animationPlayed = false;

  gsap.set(sections[0], { autoAlpha: 1 });
  sections[0].classList.add("active");

  const shrinkHero = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        isScrolling = false;
        animationPlayed = true;
        currentIndex = 1;
      },
    });

    tl.to("#hero-image", {
      width: "400px",
      height: "300px",
      borderRadius: "20px",
      duration: 0.6,
      ease: "power2.inOut",
    });

    tl.to("#cards", { opacity: 1, duration: 0.4 }, "<0.2");

    // Reset cards before animation
    gsap.set(".card", { x: 0, y: -200, rotation: 0, opacity: 0 });

    tl.to(
      ".card",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "<0.1"
    );
  };

  const expandHero = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        isScrolling = false;
        animationPlayed = false;
        currentIndex = 0;
      },
    });

    const cardsContainer = document.querySelector("#cards");
    const isVisible = window.getComputedStyle(cardsContainer).opacity !== "0";

    // Only fly out cards if visible
    if (isVisible) {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card, index) => {
        const direction = index < 2 ? -1 : 1;
        tl.to(
          card,
          {
            x: direction * 300,
            y: -200,
            rotation: direction * 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          "<+=0.05"
        );
      });

      tl.to("#cards", { opacity: 0, duration: 0.3 }, "<");
    }

    // Clear transforms before expanding hero
    tl.set(".card", { clearProps: "all" });

    // Expand hero
    tl.to(
      "#hero-image",
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        scale: 1,
        y: "0vh",
        duration: 0.6,
        ease: "power2.inOut",
      },
      "<"
    );
  };

  const scrollToSection2WithScrollEffect = () => {
    isScrolling = true;

    const tl = gsap.timeline({
      onComplete: () => {
        currentIndex = 2;
        isScrolling = false;
      },
    });

    tl.to("#section-1", { y: "-100vh", duration: 1, ease: "power2.inOut" }, 0);
    tl.to(
      "#hero-image",
      { scale: 1.2, y: "-50vh", duration: 1, ease: "power2.inOut" },
      0
    );

    tl.set("#section-1", { autoAlpha: 0 });
    tl.set("#section-2", { autoAlpha: 1 });

    tl.fromTo(
      ".trusted-section-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2 },
      "<"
    );
  };

  const goToCardState = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        currentIndex = 1;
        isScrolling = false;
      },
    });

    tl.to(".trusted-section-content", { opacity: 0, duration: 0.3 });

    tl.set("#section-2", { autoAlpha: 0 });
    tl.set("#section-1", { autoAlpha: 1 });

    tl.to("#section-1", {
      y: "0vh",
      duration: 1,
      ease: "power2.inOut",
    });

    tl.to(
      "#hero-image",
      {
        scale: 1,
        y: "0vh",
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    gsap.set(".card", { x: 0, y: -200, rotation: 0, opacity: 0 });

    tl.to("#cards", { opacity: 1, duration: 0.3 }, "-=0.6");

    tl.to(
      ".card",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "<"
    );
  };

  const scrollToSection3 = () => {
    isScrolling = true;

    const tl = gsap.timeline({
      onComplete: () => {
        currentIndex = 3;
        isScrolling = false;
      },
    });

    tl.to("#section-2", { autoAlpha: 0, duration: 0.4 });

    tl.set("#section-3", { autoAlpha: 1 });

    tl.fromTo(
      "#section-3",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );

    tl.from(
      ".chat-bubble",
      {
        y: -100,
        opacity: 0,
        stagger: { each: 0.2, from: "random" },
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.from(
      ".headline",
      {
        y: -60,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5"
    );
  };

  const scrollUpFromSection3 = () => {
    isScrolling = true;

    const tl = gsap.timeline({
      onComplete: () => {
        currentIndex = 2;
        isScrolling = false;
      },
    });

    tl.to(".chat-bubble", {
      y: -80,
      opacity: 0,
      stagger: { each: 0.1, from: "end" },
      duration: 0.4,
      ease: "power2.in",
    });

    tl.to(
      ".headline",
      {
        y: -60,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.3"
    );

    tl.to("#section-3", { autoAlpha: 0, duration: 0.3 });

    tl.set("#section-2", { autoAlpha: 1 });

    tl.fromTo(
      "#section-2",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    tl.set(".chat-bubble", { clearProps: "all" });
    tl.set(".headline", { clearProps: "all" });
  };

  // Main wheel handler
  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
      if (currentIndex === 0 && !animationPlayed) {
        isScrolling = true;
        shrinkHero();
      } else if (currentIndex === 1) {
        scrollToSection2WithScrollEffect();
      } else if (currentIndex === 2) {
        scrollToSection3();
      }
    } else if (e.deltaY < 0) {
      if (currentIndex === 3) {
        scrollUpFromSection3();
      } else if (currentIndex === 2) {
        goToCardState();
      } else if (currentIndex === 1) {
        expandHero();
      }
    }
  });
});
