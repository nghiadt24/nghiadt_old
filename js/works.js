document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    console.log("Designed and developed by NghiaDT");
    console.log("Dòng này không hiện là gẫy cmnr :3 ");
    // gsap code here!
 // lenis

 const lenis = new Lenis();

 lenis.on("scroll", (e) => {
 });

 lenis.on("scroll", ScrollTrigger.update);
 gsap.ticker.add((time) => {
   lenis.raf(time * 500);

 });
 
 gsap.ticker.lagSmoothing(0);

 // preloader
 const preloadetTl = gsap.timeline();
  preloadetTl
  .fromTo (".preloader-text-first, .preloader-text-second",{
      y: 30,
      opacity: 0,
  },
  {
      y:0,
      opacity: 1,
      stagger: 0.2,
      delay: 0.2,
      duration: 1,
      ease: "power3.out",
  })
  .to(".preloader", {
      duration: 0.8,
      opacity:0,
      ease: "power3.inOut",
    })
  .to(".preloader",{
      display:"none",
  })
       // footer
       const footerTitle = new SplitType ('#footerTitle', {type:'words'});
       const footertitleWords = footerTitle.words;
       const footerTl = gsap.timeline();
   
       footerTl
       .fromTo (".footer-content-card",{
           scale: 0.7,
           opacity: 0.7,
       },
       {
           scale: 1,
           opacity: 1,
           duration: 2,
           ease: "power3.out",
       })
       .fromTo (
           footertitleWords,
           {
               y: 60,
           opacity: 0,
           },
           {
               y: 0,
               opacity: 1,
               stagger: 0.2,
               delay: 0.2,
               duration: 1,
               ease: "power3.out",
           }
       )
       .fromTo (".footer-content-description, .footer-btn,.footer-contact",{
           y: 60,
           opacity: 0,
       },
       {
           y: 0,
               opacity: 1,
               stagger: 0.2,
               delay: 0.2,
               duration: 0.5,
               ease: "power3.out",
       })
       .fromTo (".copyright-mark,.footer-icon",{
           y: -60,
           opacity: 0,
       },
       {
           y: 0,
               opacity: 1,
               stagger: 0.2,
               delay: 0.2,
               duration: 0.5,
               ease: "power3.out",
       });
   
       ScrollTrigger.create ({
           trigger: ".footer-section",
           animation: footerTl,
           scrub: 4,
           start: "top center",
           end: "40$ center",
           markers: false,
       })
       gsap.to(".big-black-circle",{
           scale: 3,
           duration: 1,
           ease: "power3.out",
           scrollTrigger: {
               trigger: ".footer-section",
               scrub:1,
               markers: false,
               start: "top center",
               end: "center center",
           }
       })
   
   });

