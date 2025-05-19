document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    const preloadetTl = gsap.timeline();
    preloadetTl
    .fromTo (".lava-lamp",{
        y:-2000,
        opacity: 0,
        scale: 0.2
    },
    {
        y:0,
        scale: 1,
        opacity:1,
        duration: 2,
        ease: "power3.out",
    })

    .to(".lava-lamp",{
        scale: 30,
        rotation: 90,
        duration: 2,
        ease: "power3.out",
    })
    .to(".bubble, .bubble1, .bubble2, .bubble3",{
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    })
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
        height: "0vh",
        borderBottomRightRadius: "90% 35%",
        borderBottomLeftRadius: "90% 35%",
        ease: "power3.inOut",
      })
    .to(".preloader",{
        display:"none",
    })
   });



