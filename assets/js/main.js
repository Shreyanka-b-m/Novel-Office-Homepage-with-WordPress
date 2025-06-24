document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  let isInHeroExpandedState = true;
  let currentIndex = 0;
  let isScrolling = false;
  let animationPlayed = false;

  const navbar = document.getElementById("navbar");
  const navLogo = document.getElementById("nav-logo");
  const overlay = document.getElementById("hero-overlay");

  gsap.set(".section", { autoAlpha: 0 });
  gsap.set("#section-1", { autoAlpha: 1 });

  const updateNavbarStyle = () => {
    if (isInHeroExpandedState) {
      navbar.classList.remove("scrolled");
      navLogo.src = `${THEME_ASSETS_URI}/Novel Logo White.png`;
      overlay.style.opacity = "1";
    } else {
      navbar.classList.add("scrolled");
      navLogo.src = `${THEME_ASSETS_URI}/Novel Logo Color.png`;
      overlay.style.opacity = "0";
    }
  };

  const animateCardsIn = () => {
    return gsap.fromTo(
      ".card",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: { each: 0.2, from: "random" },
        duration: 0.6,
        ease: "power2.out",
      }
    );
  };

  const animateCardsOut = () => {
    return gsap.to(".card", {
      y: -80,
      opacity: 0,
      stagger: { each: 0.1, from: "end" },
      duration: 0.4,
      ease: "power2.in",
    });
  };

  const shrinkHero = () => {
    isInHeroExpandedState = false;
    updateNavbarStyle();

    const tl = gsap.timeline({
      onComplete: () => {
        isScrolling = false;
        animationPlayed = true;
        currentIndex = 1;
      },
    });

    tl.to("#hero-image", {
      width: "30vw",
      height: "70vh",
      borderRadius: "20px",
      marginTop: "7vh",
      duration: 0.8,
      ease: "power2.inOut",
    });

    tl.to("#cards", { opacity: 1, duration: 0.3 }, "<0.2");
    // resetCardTransforms();
    tl.add(animateCardsIn(), "<0.1");
  };

  const expandHero = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        isScrolling = false;
        animationPlayed = false;
        currentIndex = 0;
        isInHeroExpandedState = true;
        updateNavbarStyle();
      },
    });

    tl.add(animateCardsOut(), 0);

    tl.to("#cards", { opacity: 0, duration: 0.3 }, "<");

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
      "<+0.1"
    );

    tl.set(".card", { clearProps: "all" });
  };

  const goToCardState = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        currentIndex = 1;
        isScrolling = false;
      },
    });

    tl.to(".trusted-section-content", { opacity: 0, duration: 0.1 });

    tl.set("#section-2", { autoAlpha: 0 });
    tl.set("#section-1", { autoAlpha: 1 });

    tl.to("#section-1", { y: "0vh", duration: 0.1 });
    tl.to("#hero-image", { scale: 1, y: "0vh", duration: 1 }, "<");

    resetCardTransforms();
    tl.set("#cards", { opacity: 1 });
    tl.add(animateCardsIn(), "<");
    updateNavbarStyle();
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
    tl.to("#hero-image", { scale: 1.2, y: "-50vh", duration: 1 }, 0);
    tl.set("#section-1", { autoAlpha: 0 });
    tl.set("#section-2", { autoAlpha: 1 });

    tl.fromTo(
      ".trusted-section-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2 },
      "<"
    );

    updateNavbarStyle();
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

    tl.fromTo("#section-3", { opacity: 0 }, { opacity: 1, duration: 0.3 });

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
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    );

    updateNavbarStyle();
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

    tl.fromTo("#section-2", { opacity: 0 }, { opacity: 1, duration: 0.5 });

    tl.set(".chat-bubble", { clearProps: "all" });
    tl.set(".headline", { clearProps: "all" });

    updateNavbarStyle();
  };

  // Scroll Handler
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
    } else {
      if (currentIndex === 3) {
        scrollUpFromSection3();
      } else if (currentIndex === 2) {
        goToCardState();
      } else if (currentIndex === 1) {
        expandHero();
      }
    }
  });

  // Mobile Nav Toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });

  updateNavbarStyle();
});
