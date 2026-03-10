// window.addEventListener("load", function () {

//  if (window.innerWidth <= 480) return;

//   gsap.registerPlugin(ScrollTrigger);

//   // ── GSAP SMOOTH SCROLL ────────────────────────────────
//   let currentY = 0;
//   let targetY = 0;
//   const lerp = (a, b, t) => a + (b - a) * t;

//   window.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     targetY += e.deltaY * 0.8;
//     targetY = Math.max(0, Math.min(targetY, document.documentElement.scrollHeight - window.innerHeight));
//   }, { passive: false });

//   gsap.ticker.add(() => {
//     currentY = lerp(currentY, targetY, 0.06);
//     window.scrollTo(0, currentY);
//     ScrollTrigger.update();
//   });

//   gsap.ticker.lagSmoothing(0);

//   // ── HERO ──────────────────────────────────────────────
//   gsap.set(".nav",        { opacity: 0, y: -30 });
//   gsap.set(".topname-text h1", { opacity: 0, y: 60 });
//   gsap.set(".hero-logo", { opacity: 0, scale: 0.8 });
//   gsap.set(".middle h3",  { opacity: 0, y: 20 });
//   gsap.set(".middlebtn",  { opacity: 0, y: 20 });

//   gsap.timeline({ defaults: { ease: "power4.out" } })
//     .to(".nav",        { opacity: 1, y: 0, duration: 1 })
//     .to(".hero-logo", { opacity: 1, scale: 1, duration: 1, ease: "power4.out" }, "-=0.8")
//     .to(".topname-text h1", { opacity: 1, y: 0, duration: 1.1, stagger: 0.15 }, "-=0.5")
//     .to(".middle h3",  { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
//     .to(".middlebtn",  { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");

//   // ── STATS ROLLER ──────────────────────────────────────
//   const FRAME_H = 90;
//   const stats = [
//     { id: "roll-0", frames: ["0000","1200","1600","1850","1950","1985","1992"] },
//     { id: "roll-1", frames: ["0","500","1K+","2K+","3.5K+","10K+"] },
//     { id: "roll-2", frames: ["0","40","100","180","230","265+"] },
//     { id: "roll-3", frames: ["—","MK","MKC","MKCL"] },
//   ];

//   stats.forEach(stat => {
//     const el = document.getElementById(stat.id);
//     stat.frames.forEach(val => {
//       const s = document.createElement("span");
//       s.textContent = val;
//       el.appendChild(s);
//     });
//   });

//   stats.forEach((stat, i) => {
//     const el = document.getElementById(stat.id);
//     const endY = -(stat.frames.length - 1) * FRAME_H;
//     ScrollTrigger.create({
//       trigger: "#stats",
//       start: "top 75%",
//       once: true,
//       onEnter: () => gsap.to(el, { y: endY, duration: 1.8, delay: i * 0.2, ease: "power4.out" })
//     });
//   });

//   // ── STATS REVEAL ─────────────────────────────────────
//   gsap.set(".eyebrow",      { opacity: 0 });
//   gsap.set(".stat-item",    { opacity: 0, y: 40 });
//   gsap.set(".stat-divider", { opacity: 0, scaleY: 0 });
//   gsap.set(".ticker-wrap",  { opacity: 0 });

//   gsap.to(".eyebrow",      { opacity: 1, duration: 1, ease: "power3.out",
//     scrollTrigger: { trigger: "#stats", start: "top 80%" } });
//   gsap.to(".stat-item",    { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out",
//     scrollTrigger: { trigger: ".stats-row", start: "top 80%" } });
//   gsap.to(".stat-divider", { opacity: 1, scaleY: 1, duration: 1.2, stagger: 0.15, ease: "power3.out",
//     scrollTrigger: { trigger: ".stats-row", start: "top 80%" } });
//   gsap.to(".ticker-wrap",  { opacity: 1, duration: 1, delay: 0.6,
//     scrollTrigger: { trigger: ".stats-row", start: "top 80%" } });

//   // ── MAGNETIC HOVER ───────────────────────────────────
//   document.querySelectorAll(".stat-item").forEach(item => {
//     item.addEventListener("mousemove", e => {
//       const r = item.getBoundingClientRect();
//       gsap.to(item, { x: (e.clientX - r.left - r.width / 2) * 0.05, y: (e.clientY - r.top - r.height / 2) * 0.05, duration: 0.4, ease: "power2.out" });
//     });
//     item.addEventListener("mouseleave", () => {
//       gsap.to(item, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
//     });
//   });

//    const reveals = document.querySelectorAll('.reveal');
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry, i) => {
//       if (entry.isIntersecting) {
//         setTimeout(() => entry.target.classList.add('visible'), i * 180);
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.1 });
//   reveals.forEach(el => observer.observe(el));
//   // btn1 → scroll to courses
// document.querySelector(".btn1").addEventListener("click", function () {
//   const courses = document.querySelector("#courses");
//   if (courses) targetY = courses.offsetTop;
// });

// // btn2 → enquiry page
// document.querySelector(".btn2").addEventListener("click", function () {
//   window.location.href = "enquiry.html";
// });

// // contact-btn → scroll to contact section
// document.querySelector(".contact-btn").addEventListener("click", function () {
//   const contact = document.querySelector(".contact-section");
//   if (contact) targetY = contact.offsetTop;
// });



// });

window.addEventListener("load", function () {

  const isMobile = window.innerWidth <= 768;

  gsap.registerPlugin(ScrollTrigger);

  // ── GSAP SMOOTH SCROLL (desktop only) ─────────────────
  let currentY = 0;
  let targetY = 0;
  const lerp = (a, b, t) => a + (b - a) * t;

  if (!isMobile) {
    window.addEventListener("wheel", (e) => {
      e.preventDefault();
      targetY += e.deltaY * 0.8;
      targetY = Math.max(0, Math.min(targetY, document.documentElement.scrollHeight - window.innerHeight));
    }, { passive: false });

    gsap.ticker.add(() => {
      currentY = lerp(currentY, targetY, 0.06);
      window.scrollTo(0, currentY);
      ScrollTrigger.update();
    });

    gsap.ticker.lagSmoothing(0);
  }

  // ── HERO (desktop only) ───────────────────────────────
  if (!isMobile) {
    gsap.set(".nav",             { opacity: 0, y: -30 });
    gsap.set(".topname-text h1", { opacity: 0, y: 60 });
    gsap.set(".hero-logo",       { opacity: 0, scale: 0.8 });
    gsap.set(".middle h3",       { opacity: 0, y: 20 });
    gsap.set(".middlebtn",       { opacity: 0, y: 20 });

    gsap.timeline({ defaults: { ease: "power4.out" } })
      .to(".nav",             { opacity: 1, y: 0, duration: 1 })
      .to(".hero-logo",       { opacity: 1, scale: 1, duration: 1 }, "-=0.8")
      .to(".topname-text h1", { opacity: 1, y: 0, duration: 1.1, stagger: 0.15 }, "-=0.5")
      .to(".middle h3",       { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
      .to(".middlebtn",       { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");
  }

  // ── STATS ROLLER (all devices) ────────────────────────
  const FRAME_H = isMobile ? 70 : 90;

  const stats = [
    { id: "roll-0", frames: ["0000","1200","1600","1850","1950","1985","1992"] },
    { id: "roll-1", frames: ["0","500","1K+","2K+","3.5K+","10K+"] },
    { id: "roll-2", frames: ["0","40","100","180","230","265+"] },
    { id: "roll-3", frames: ["—","MK","MKC","MKCL"] },
  ];

  stats.forEach(stat => {
    const el = document.getElementById(stat.id);
    stat.frames.forEach(val => {
      const s = document.createElement("span");
      s.textContent = val;
      el.appendChild(s);
    });
  });

  stats.forEach((stat, i) => {
    const el = document.getElementById(stat.id);
    const endY = -(stat.frames.length - 1) * FRAME_H;
    ScrollTrigger.create({
      trigger: "#stats",
      start: "top 90%",
      once: true,
      onEnter: () => gsap.to(el, { y: endY, duration: 1.8, delay: i * 0.2, ease: "power4.out" })
    });
  });

  // ── STATS REVEAL (all devices) ────────────────────────
  if (!isMobile) {
    gsap.set(".eyebrow",      { opacity: 0 });
    gsap.set(".stat-item",    { opacity: 0, y: 40 });
    gsap.set(".stat-divider", { opacity: 0, scaleY: 0 });
    gsap.set(".ticker-wrap",  { opacity: 0 });
  }

  if (!isMobile) {
  gsap.to(".eyebrow",      { opacity: 1, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: "#stats", start: "top 90%" } });
  gsap.to(".stat-item",    { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out",
    scrollTrigger: { trigger: ".stats-row", start: "top 90%" } });
  gsap.to(".stat-divider", { opacity: 1, scaleY: 1, duration: 1.2, stagger: 0.15, ease: "power3.out",
    scrollTrigger: { trigger: ".stats-row", start: "top 90%" } });
  gsap.to(".ticker-wrap",  { opacity: 1, duration: 1, delay: 0.6,
    scrollTrigger: { trigger: ".stats-row", start: "top 90%" } });

  }

  // ── MAGNETIC HOVER (desktop only) ────────────────────
  if (!isMobile) {
    document.querySelectorAll(".stat-item").forEach(item => {
      item.addEventListener("mousemove", e => {
        const r = item.getBoundingClientRect();
        gsap.to(item, { x: (e.clientX - r.left - r.width / 2) * 0.05, y: (e.clientY - r.top - r.height / 2) * 0.05, duration: 0.4, ease: "power2.out" });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
      });
    });
  }

  // ── REVEAL OBSERVER (all devices) ────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 180);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // ── BUTTONS ───────────────────────────────────────────
  document.querySelector(".btn1").addEventListener("click", function () {
    const courses = document.querySelector("#courses");
    if (isMobile) {
      courses.scrollIntoView({ behavior: "smooth" });
    } else {
      if (courses) targetY = courses.offsetTop;
    }
  });

  document.querySelector(".btn2").addEventListener("click", function () {
    window.location.href = "enquiry.html";
  });

  document.querySelector(".contact-btn").addEventListener("click", function () {
    const contact = document.querySelector(".contact-section");
    if (isMobile) {
      contact.scrollIntoView({ behavior: "smooth" });
    } else {
      if (contact) targetY = contact.offsetTop;
    }
  });

});





  



