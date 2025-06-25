// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   let isInHeroExpandedState = true;
//   let currentIndex = 0;
//   let isScrolling = false;
//   let animationPlayed = false;
//   let cardIndex = 0;

//   const navbar = document.getElementById("navbar");
//   const navLogo = document.getElementById("nav-logo");
//   const overlay = document.getElementById("hero-overlay");
//   const overlayCards = document.querySelectorAll(".overlay-card");
//   const finalContent = document.getElementById("final-content");

//   gsap.set(".section", { autoAlpha: 0 });
//   gsap.set("#section-1", { autoAlpha: 1 });
//   gsap.set(overlayCards, { opacity: 0, bottom: "-100%" });
//   gsap.set(finalContent, { opacity: 0, y: -50 });

//   const updateNavbarStyle = () => {
//     if (isInHeroExpandedState) {
//       navbar.classList.remove("scrolled");
//       navLogo.src = `${THEME_ASSETS_URI}/Novel Logo White.png`;
//       overlay.style.opacity = "1";
//     } else {
//       navbar.classList.add("scrolled");
//       navLogo.src = `${THEME_ASSETS_URI}/Novel Logo Color.png`;
//       overlay.style.opacity = "0";
//     }
//   };

//   const animateCardsIn = () =>
//     gsap.fromTo(
//       ".card",
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: { each: 0.2, from: "random" },
//         duration: 0.6,
//         ease: "power2.out",
//       }
//     );

//   const animateCardsOut = () =>
//     gsap.to(".card", {
//       y: -80,
//       opacity: 0,
//       stagger: { each: 0.1, from: "end" },
//       duration: 0.4,
//       ease: "power2.in",
//     });

//   const shrinkHero = () => {
//     isInHeroExpandedState = false;
//     updateNavbarStyle();
//     isScrolling = true;

//     const tl = gsap.timeline({
//       onComplete: () => {
//         isScrolling = false;
//         animationPlayed = true;
//         currentIndex = 1;
//       },
//     });
//     tl.to("#hero-image", {
//       width: "30vw",
//       height: "70vh",
//       borderRadius: "20px",
//       marginTop: "7vh",
//       duration: 0.8,
//       ease: "power2.inOut",
//     });
//     tl.to("#cards", { opacity: 1, duration: 0.3 }, "<0.2");
//     tl.add(animateCardsIn(), "<0.1");
//   };

//   const expandHero = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         isScrolling = false;
//         animationPlayed = false;
//         currentIndex = 0;
//         isInHeroExpandedState = true;
//         updateNavbarStyle();
//       },
//     });
//     tl.add(animateCardsOut(), 0);
//     tl.to("#cards", { opacity: 0, duration: 0.3 }, "<");
//     tl.to(
//       "#hero-image",
//       {
//         width: "100vw",
//         height: "100vh",
//         borderRadius: "0px",
//         scale: 1,
//         y: "0vh",
//         duration: 0.6,
//         ease: "power2.inOut",
//       },
//       "<+0.1"
//     );
//     tl.set(".card", { clearProps: "all" });
//   };

//   const goToCardState = () => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 1;
//         isScrolling = false;
//       },
//     });

//     tl.to(".trusted-section-content", { opacity: 0, duration: 0.1 });

//     tl.set("#section-2", { autoAlpha: 0 });
//     tl.set("#section-1", { autoAlpha: 1 });

//     tl.to("#section-1", { y: "0vh", duration: 0.1 });
//     tl.to("#hero-image", { scale: 1, y: "0vh", duration: 1 }, "<");

//     resetCardTransforms();
//     tl.set("#cards", { opacity: 1 });
//     tl.add(animateCardsIn(), "<");
//     updateNavbarStyle();
//   };
//   const scrollToSection2WithScrollEffect = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 2;
//         isScrolling = false;
//       },
//     });
//     tl.to("#section-1", { y: "-100vh", duration: 1, ease: "power2.inOut" }, 0);
//     tl.to("#hero-image", { scale: 1.2, y: "-50vh", duration: 1 }, 0);
//     tl.set("#section-1", { autoAlpha: 0 });
//     tl.set("#section-2", { autoAlpha: 1 });
//     tl.fromTo(
//       ".trusted-section-content",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 0.6, delay: 0.2 },
//       "<"
//     );
//     updateNavbarStyle();
//   };

//   const scrollToSection3 = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 3;
//         isScrolling = false;
//       },
//     });
//     tl.to("#section-2", { autoAlpha: 0, duration: 0.4 });
//     tl.set("#section-3", { autoAlpha: 1 });
//     tl.fromTo("#section-3", { opacity: 0 }, { opacity: 1, duration: 0.3 });
//     tl.from(
//       ".chat-bubble",
//       {
//         y: -100,
//         opacity: 0,
//         stagger: { each: 0.2, from: "random" },
//         duration: 0.7,
//         ease: "power2.out",
//       },
//       "-=0.3"
//     );
//     tl.from(
//       ".headline",
//       { y: -60, opacity: 0, duration: 0.5, ease: "power2.out" },
//       "-=0.5"
//     );
//     updateNavbarStyle();
//   };

//   const scrollUpFromSection3 = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 2;
//         isScrolling = false;
//       },
//     });
//     tl.to(".chat-bubble", {
//       y: -80,
//       opacity: 0,
//       stagger: { each: 0.1, from: "end" },
//       duration: 0.4,
//       ease: "power2.in",
//     });
//     tl.to(
//       ".headline",
//       { y: -60, opacity: 0, duration: 0.4, ease: "power2.in" },
//       "-=0.3"
//     );
//     tl.to("#section-3", { autoAlpha: 0, duration: 0.3 });
//     tl.set("#section-2", { autoAlpha: 1 });
//     tl.fromTo("#section-2", { opacity: 0 }, { opacity: 1, duration: 0.5 });
//     tl.set(".chat-bubble", { clearProps: "all" });
//     tl.set(".headline", { clearProps: "all" });
//     updateNavbarStyle();
//   };

//   const showNextCard = () => {
//     if (cardIndex >= overlayCards.length) return;

//     const card = overlayCards[cardIndex];
//     gsap.to(card, {
//       bottom: "50%",
//       yPercent: 50,
//       opacity: 1,
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     cardIndex++;
//   };

//   const fanOutCards = () => {
//     gsap.to(overlayCards, {
//       x: (i) => (i - 2) * 60,
//       y: (i) => (i % 2 === 0 ? -30 : 30),
//       scale: 0.95,
//       stagger: 0.1,
//       duration: 0.6,
//       ease: "power2.out",
//     });
//     gsap.to("#section-3", {
//       y: "-100vh",
//       duration: 1,
//       ease: "power2.inOut",
//     });
//   };

//   const alignCardsAndShowText = () => {
//     gsap.to(overlayCards, {
//       x: (i) => i * 160 - 320,
//       y: 0,
//       scale: 1,
//       bottom: "30%",
//       duration: 0.6,
//       ease: "power2.out",
//     });
//     gsap.to(finalContent, {
//       opacity: 1,
//       y: 0,
//       duration: 0.6,
//       ease: "power2.out",
//       delay: 0.3,
//     });
//   };

//   window.addEventListener("wheel", (e) => {
//     if (isScrolling) return;
//     isScrolling = true;

//     if (e.deltaY > 0) {
//       if (currentIndex === 0 && !animationPlayed) {
//         shrinkHero();
//       } else if (currentIndex === 1) {
//         scrollToSection2WithScrollEffect();
//       } else if (currentIndex === 2) {
//         scrollToSection3();
//       } else if (currentIndex === 3 && cardIndex < overlayCards.length) {
//         showNextCard();
//       } else if (cardIndex === overlayCards.length && currentIndex === 3) {
//         fanOutCards();
//         currentIndex = 4;
//       } else if (currentIndex === 4) {
//         alignCardsAndShowText();
//         currentIndex = 5;
//       }
//     } else {
//       if (currentIndex === 5) {
//         gsap.to(finalContent, {
//           opacity: 0,
//           y: -50,
//           duration: 0.4,
//           ease: "power2.in",
//         });
//         currentIndex = 4;
//       } else if (currentIndex === 4) {
//         gsap.to("#section-3", { y: "0vh", duration: 1, ease: "power2.inOut" });
//         gsap.to(overlayCards, {
//           x: 0,
//           y: 0,
//           scale: 1,
//           bottom: "50%",
//           duration: 0.6,
//           ease: "power2.inOut",
//         });
//         currentIndex = 3;
//       } else if (cardIndex > 0) {
//         cardIndex--;
//         const card = overlayCards[cardIndex];
//         gsap.to(card, {
//           bottom: "-100%",
//           opacity: 0,
//           duration: 0.6,
//           ease: "power2.in",
//         });
//       } else if (currentIndex === 3) {
//         scrollUpFromSection3();
//       } else if (currentIndex === 2) {
//         goToCardState();
//       } else if (currentIndex === 1) {
//         expandHero();
//       }
//     }

//     setTimeout(() => {
//       isScrolling = false;
//     }, 1000);
//   });

//   const hamburger = document.getElementById("hamburger");
//   const mobileMenu = document.getElementById("mobileMenu");
//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("open");
//     mobileMenu.style.display =
//       mobileMenu.style.display === "flex" ? "none" : "flex";
//   });

//   updateNavbarStyle();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   let isInHeroExpandedState = true;
//   let currentIndex = 0;
//   let isScrolling = false;
//   let animationPlayed = false;
//   let cardIndex = 0;

//   const navbar = document.getElementById("navbar");
//   const navLogo = document.getElementById("nav-logo");
//   const overlay = document.getElementById("hero-overlay");
//   const overlayCards = document.querySelectorAll(".overlay-card");
//   const finalContent = document.getElementById("final-content");

//   gsap.set(".section", { autoAlpha: 0 });
//   gsap.set("#section-1", { autoAlpha: 1 });
//   gsap.set(overlayCards, { opacity: 0, bottom: "-100%" });
//   gsap.set(finalContent, { opacity: 0, y: -50 });

//   const updateNavbarStyle = () => {
//     if (isInHeroExpandedState) {
//       navbar.classList.remove("scrolled");
//       navLogo.src = `${THEME_ASSETS_URI}/Novel Logo White.png`;
//       overlay.style.opacity = "1";
//     } else {
//       navbar.classList.add("scrolled");
//       navLogo.src = `${THEME_ASSETS_URI}/Novel Logo Color.png`;
//       overlay.style.opacity = "0";
//     }
//   };

//   const animateCardsIn = () =>
//     gsap.fromTo(
//       ".card",
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: { each: 0.2, from: "random" },
//         duration: 0.6,
//         ease: "power2.out",
//       }
//     );

//   const animateCardsOut = () =>
//     gsap.to(".card", {
//       y: -80,
//       opacity: 0,
//       stagger: { each: 0.1, from: "end" },
//       duration: 0.4,
//       ease: "power2.in",
//     });

//   const shrinkHero = () => {
//     isInHeroExpandedState = false;
//     updateNavbarStyle();
//     isScrolling = true;

//     const tl = gsap.timeline({
//       onComplete: () => {
//         isScrolling = false;
//         animationPlayed = true;
//         currentIndex = 1;
//       },
//     });
//     tl.to("#hero-image", {
//       width: "30vw",
//       height: "70vh",
//       borderRadius: "20px",
//       marginTop: "7vh",
//       duration: 0.8,
//       ease: "power2.inOut",
//     });
//     tl.to("#cards", { opacity: 1, duration: 0.3 }, "<0.2");
//     tl.add(animateCardsIn(), "<0.1");
//   };

//   const expandHero = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         isScrolling = false;
//         animationPlayed = false;
//         currentIndex = 0;
//         isInHeroExpandedState = true;
//         updateNavbarStyle();
//       },
//     });
//     tl.add(animateCardsOut(), 0);
//     tl.to("#cards", { opacity: 0, duration: 0.3 }, "<");
//     tl.to(
//       "#hero-image",
//       {
//         width: "100vw",
//         height: "100vh",
//         borderRadius: "0px",
//         scale: 1,
//         y: "0vh",
//         duration: 0.6,
//         ease: "power2.inOut",
//       },
//       "<+0.1"
//     );
//     tl.set(".card", { clearProps: "all" });
//   };

//   const goToCardState = () => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 1;
//         isScrolling = false;
//       },
//     });

//     tl.to(".trusted-section-content", { opacity: 0, duration: 0.1 });

//     tl.set("#section-2", { autoAlpha: 0 });
//     tl.set("#section-1", { autoAlpha: 1 });

//     tl.to("#section-1", { y: "0vh", duration: 0.1 });
//     tl.to("#hero-image", { scale: 1, y: "0vh", duration: 1 }, "<");

//     resetCardTransforms();
//     tl.set("#cards", { opacity: 1 });
//     tl.add(animateCardsIn(), "<");
//     updateNavbarStyle();
//   };
//   const scrollToSection2WithScrollEffect = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 2;
//         isScrolling = false;
//       },
//     });
//     tl.to("#section-1", { y: "-100vh", duration: 1, ease: "power2.inOut" }, 0);
//     tl.to("#hero-image", { scale: 1.2, y: "-50vh", duration: 1 }, 0);
//     tl.set("#section-1", { autoAlpha: 0 });
//     tl.set("#section-2", { autoAlpha: 1 });
//     tl.fromTo(
//       ".trusted-section-content",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 0.6, delay: 0.2 },
//       "<"
//     );
//     updateNavbarStyle();
//   };

//   const scrollToSection3 = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 3;
//         isScrolling = false;
//       },
//     });
//     tl.to("#section-2", { autoAlpha: 0, duration: 0.4 });
//     tl.set("#section-3", { autoAlpha: 1 });
//     tl.fromTo("#section-3", { opacity: 0 }, { opacity: 1, duration: 0.3 });
//     tl.from(
//       ".chat-bubble",
//       {
//         y: -100,
//         opacity: 0,
//         stagger: { each: 0.2, from: "random" },
//         duration: 0.7,
//         ease: "power2.out",
//       },
//       "-=0.3"
//     );
//     tl.from(
//       ".headline",
//       { y: -60, opacity: 0, duration: 0.5, ease: "power2.out" },
//       "-=0.5"
//     );
//     updateNavbarStyle();
//   };

//   const scrollUpFromSection3 = () => {
//     isScrolling = true;
//     const tl = gsap.timeline({
//       onComplete: () => {
//         currentIndex = 2;
//         isScrolling = false;
//       },
//     });
//     tl.to(".chat-bubble", {
//       y: -80,
//       opacity: 0,
//       stagger: { each: 0.1, from: "end" },
//       duration: 0.4,
//       ease: "power2.in",
//     });
//     tl.to(
//       ".headline",
//       { y: -60, opacity: 0, duration: 0.4, ease: "power2.in" },
//       "-=0.3"
//     );
//     tl.to("#section-3", { autoAlpha: 0, duration: 0.3 });
//     tl.set("#section-2", { autoAlpha: 1 });
//     tl.fromTo("#section-2", { opacity: 0 }, { opacity: 1, duration: 0.5 });
//     tl.set(".chat-bubble", { clearProps: "all" });
//     tl.set(".headline", { clearProps: "all" });
//     updateNavbarStyle();
//   };

//   const showNextCard = () => {
//     if (cardIndex >= overlayCards.length) return;

//     const card = overlayCards[cardIndex];
//     gsap.to(card, {
//       bottom: "50%",
//       yPercent: 50,
//       opacity: 1,
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     cardIndex++;
//   };

//   const fanOutCards = () => {
//     gsap.to(overlayCards, {
//       x: (i) => (i - 2) * 60,
//       y: (i) => (i % 2 === 0 ? -30 : 30),
//       scale: 0.95,
//       stagger: 0.1,
//       duration: 0.6,
//       ease: "power2.out",
//     });
//     gsap.to("#section-3", {
//       y: "-100vh",
//       duration: 1,
//       ease: "power2.inOut",
//     });
//   };

//   const alignCardsAndShowText = () => {
//     gsap.to(overlayCards, {
//       x: (i) => i * 160 - 320,
//       y: 0,
//       scale: 1,
//       bottom: "30%",
//       duration: 0.6,
//       ease: "power2.out",
//     });
//     gsap.to(finalContent, {
//       opacity: 1,
//       y: 0,
//       duration: 0.6,
//       ease: "power2.out",
//       delay: 0.3,
//     });
//   };

//   window.addEventListener("wheel", (e) => {
//     if (isScrolling) return;
//     isScrolling = true;

//     if (e.deltaY > 0) {
//       if (currentIndex === 0 && !animationPlayed) {
//         shrinkHero();
//       } else if (currentIndex === 1) {
//         scrollToSection2WithScrollEffect();
//       } else if (currentIndex === 2) {
//         scrollToSection3();
//       } else if (currentIndex === 3 && cardIndex < overlayCards.length) {
//         showNextCard();
//       } else if (cardIndex === overlayCards.length && currentIndex === 3) {
//         fanOutCards();
//         currentIndex = 4;
//       } else if (currentIndex === 4) {
//         alignCardsAndShowText();
//         currentIndex = 5;
//       }
//     } else {
//       if (currentIndex === 5) {
//         const tl = gsap.timeline({
//           onComplete: () => {
//             currentIndex = 4;
//           },
//         });

//         tl.to(finalContent, {
//           opacity: 0,
//           y: -50,
//           duration: 0.4,
//           ease: "power2.in",
//         });

//         tl.to(
//           overlayCards,
//           {
//             x: (i) => (i - 2) * 60,
//             y: (i) => (i % 2 === 0 ? -30 : 30),
//             scale: 0.95,
//             bottom: "50%",
//             duration: 0.6,
//             ease: "power2.out",
//           },
//           "<+0.1"
//         );
//       } else if (currentIndex === 4) {
//         gsap.to("#section-3", { y: "0vh", duration: 1, ease: "power2.inOut" });
//         gsap.to(overlayCards, {
//           x: 0,
//           y: 0,
//           scale: 1,
//           bottom: "50%",
//           duration: 0.6,
//           ease: "power2.inOut",
//         });
//         currentIndex = 3;
//       } else if (cardIndex > 0) {
//         cardIndex--;
//         const card = overlayCards[cardIndex];
//         gsap.to(card, {
//           bottom: "-100%",
//           opacity: 0,
//           duration: 0.6,
//           ease: "power2.in",
//         });
//       } else if (currentIndex === 3) {
//         scrollUpFromSection3();
//       } else if (currentIndex === 2) {
//         goToCardState();
//       } else if (currentIndex === 1) {
//         expandHero();
//       }
//     }

//     setTimeout(() => {
//       isScrolling = false;
//     }, 1000);
//   });

//   const hamburger = document.getElementById("hamburger");
//   const mobileMenu = document.getElementById("mobileMenu");
//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("open");
//     mobileMenu.style.display =
//       mobileMenu.style.display === "flex" ? "none" : "flex";
//   });

//   updateNavbarStyle();
// });

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let isInHeroExpandedState = true;
  let currentIndex = 0;
  let isScrolling = false;
  let animationPlayed = false;
  let cardIndex = 0;

  const navbar = document.getElementById("navbar");
  const navLogo = document.getElementById("nav-logo");
  const overlay = document.getElementById("hero-overlay");
  const overlayCards = document.querySelectorAll(".overlay-card");
  const finalContent = document.getElementById("final-content");

  gsap.set(".section", { autoAlpha: 0 });
  gsap.set("#section-1", { autoAlpha: 1 });
  gsap.set(overlayCards, { opacity: 0, bottom: "-100%" });
  gsap.set(finalContent, { opacity: 0, y: -50 });

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

  const animateCardsIn = () =>
    gsap.fromTo(
      ".card",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: { each: 0.2, from: "random" },
        duration: 0.6,
        ease: "power2.out",
      }
    );

  const animateCardsOut = () =>
    gsap.to(".card", {
      y: -80,
      opacity: 0,
      stagger: { each: 0.1, from: "end" },
      duration: 0.4,
      ease: "power2.in",
    });

  const shrinkHero = () => {
    isInHeroExpandedState = false;
    updateNavbarStyle();
    isScrolling = true;

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
    tl.add(animateCardsIn(), "<0.1");
  };

  const expandHero = () => {
    isScrolling = true;
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
      { y: -60, opacity: 0, duration: 0.5, ease: "power2.out" },
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
      { y: -60, opacity: 0, duration: 0.4, ease: "power2.in" },
      "-=0.3"
    );
    tl.to("#section-3", { autoAlpha: 0, duration: 0.3 });
    tl.set("#section-2", { autoAlpha: 1 });
    tl.fromTo("#section-2", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl.set(".chat-bubble", { clearProps: "all" });
    tl.set(".headline", { clearProps: "all" });
    updateNavbarStyle();
  };

  // const showNextCard = () => {
  //   if (cardIndex >= overlayCards.length) return;

  //   const card = overlayCards[cardIndex];
  //   gsap.to(card, {
  //     bottom: "50%",
  //     yPercent: 50,
  //     opacity: 1,
  //     duration: 0.8,
  //     ease: "power3.out",
  //   });

  //   cardIndex++;
  // };

  // const showNextCard = () => {
  //   if (cardIndex >= overlayCards.length) return;

  //   const card = overlayCards[cardIndex];
  //   gsap.to(card, {
  //     opacity: 1,
  //     y: "0%",
  //     duration: 0.8,
  //     ease: "power3.out",
  //   });

  //   cardIndex++;
  // };

  const showNextCard = () => {
    if (cardIndex >= overlayCards.length) return;

    const card = overlayCards[cardIndex];
    gsap.fromTo(
      card,
      {
        y: window.innerHeight, // Start from bottom of screen
        opacity: 0,
      },
      {
        y: 0, // Animate into center (already positioned at 50% via CSS)
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      }
    );

    cardIndex++;
  };

  // const fanOutCards = () => {
  //   gsap.to(overlayCards, {
  //     x: (i) => i * 180 - 360, // adds 20px spacing between cards
  //     y: 0,
  //     scale: 1,
  //     bottom: "10%",
  //     duration: 0.6,
  //     ease: "power2.out",
  //   });

  //   gsap.to("#section-3", {
  //     y: "-100vh",
  //     duration: 1,
  //     ease: "power2.inOut",
  //   });
  // };

  const fanOutCards = () => {
    const tl = gsap.timeline();

    tl.to(
      overlayCards,
      {
        x: (i) => (i - 2) * 60,
        y: (i) => (i % 2 === 0 ? -30 : 30),
        scale: 0.95,
        bottom: "50%",
        duration: 0.6,
        ease: "power2.out",
      },
      "<+0.1"
    );

    // Section scroll
    tl.to(
      "#section-3",
      {
        y: "-100vh",
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    ); // Sync timing
  };

  // const alignCardsAndShowText = () => {
  //   gsap.to(overlayCards, {
  //     x: (i) => i * 220 - 440, // 200px width + 20px spacing * 5 cards
  //     y: 140, // Move them **down**
  //     scale: 1,
  //     duration: 0.6,
  //     ease: "power2.out",
  //   });

  //   gsap.to(finalContent, {
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.6,
  //     ease: "power2.out",
  //     delay: 0.3,
  //   });
  // };

  // const alignCardsAndShowText = () => {
  //   const spacingX = 220; // horizontal spacing between cards
  //   overlayCards.forEach((card, i) => {
  //     gsap.to(card, {
  //       x: (i - 2) * spacingX, // center-align
  //       y: i % 2 === 0 ? 0 : 30, // stagger: every 2nd card lower
  //       scale: 1,
  //       zIndex: 1,
  //       duration: 0.6,
  //       ease: "power2.out",
  //     });
  //   });

  //   gsap.to(finalContent, {
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.6,
  //     ease: "power2.out",
  //     delay: 0.3,
  //   });
  // };

  const alignCardsAndShowText = () => {
    const spacingX = 220; // horizontal spacing between cards
    const verticalOffset = 120; // move all cards down by 120px

    overlayCards.forEach((card, i) => {
      gsap.to(card, {
        x: (i - 2) * spacingX,
        y: i % 2 === 0 ? verticalOffset : verticalOffset + 30, // stagger and offset
        scale: 1,
        zIndex: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    gsap.to(finalContent, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3,
    });
  };

  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) {
      if (currentIndex === 0 && !animationPlayed) {
        shrinkHero();
      } else if (currentIndex === 1) {
        scrollToSection2WithScrollEffect();
      } else if (currentIndex === 2) {
        scrollToSection3();
      } else if (currentIndex === 3 && cardIndex < overlayCards.length) {
        showNextCard();
      } else if (cardIndex === overlayCards.length && currentIndex === 3) {
        fanOutCards();
        currentIndex = 4;
      } else if (currentIndex === 4) {
        alignCardsAndShowText();
        currentIndex = 5;
      }
    } else {
      if (currentIndex === 5) {
        const tl = gsap.timeline({
          onComplete: () => {
            currentIndex = 4;
          },
        });

        tl.to(finalContent, {
          opacity: 0,
          y: -50,
          duration: 0.4,
          ease: "power2.in",
        });

        tl.to(
          overlayCards,
          {
            x: (i) => (i - 2) * 60,
            y: (i) => (i % 2 === 0 ? -30 : 30),
            scale: 0.95,
            bottom: "50%",
            duration: 0.6,
            ease: "power2.out",
          },
          "<+0.1"
        );
      } else if (currentIndex === 4) {
        gsap.to("#section-3", { y: "0vh", duration: 1, ease: "power2.inOut" });
        gsap.to(overlayCards, {
          x: 0,
          y: 0,
          scale: 1,
          bottom: "50%",
          duration: 0.6,
          ease: "power2.inOut",
        });
        currentIndex = 3;
      } else if (cardIndex > 0) {
        cardIndex--;
        const card = overlayCards[cardIndex];

        gsap.to(card, {
          y: window.innerHeight,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(card, { y: 0 }); // reset so next `fromTo` works cleanly
          },
        });
      } else if (currentIndex === 3) {
        scrollUpFromSection3();
      } else if (currentIndex === 2) {
        goToCardState();
      } else if (currentIndex === 1) {
        expandHero();
      }
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  });

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });

  updateNavbarStyle();
});
