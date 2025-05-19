document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    console.log('Designed and developed with love by Dinh Trong Nghia =)) ');
    console.log('Load xong gsap');
    console.log('v1.0.2: Update more Works');
    
    const indexPreloader = gsap.timeline();
    const titleText = SplitType.create('#hero-title',{ type: 'words'});
    const titleWords = titleText.words;
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
    }, "+=2")
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
        opacity:0,
        ease: "power3.inOut",
      })
    .to(".preloader",{
        display:"none",
    })
    .fromTo (
        titleWords,
        {
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
      }
    )

    .fromTo (".hero-subtitle, .hero-description",{
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
    })
    
    .fromTo (".small-blue-circle, .small-pink-circle, .md-pink-circle, .big-blue-circle",{
        scale: 0,
        opacity: 0,
    },
    {
        scale: 1,
        delay: 0.2,
        stagger: 0.2,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
    })
    .fromTo (".main-nav, .hero-scroll-btn-row",{
        y: -60,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
    });

    gsap.to(".small-blue-circle",{
        y: -420,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: ".about-section",
            markers: false,
            scrub: 1,
            start: "top bottom",
        }
    })
    gsap.to(".md-pink-circle",{
        y: -220,
        duration: 1,
        delay: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-section",
            markers: false,
            scrub: 1,
            start: "top bottom",
        }
    })
    gsap.to(".small-pink-circle",{
        y: -180,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-section",
            markers: false,
            scrub: 1,
            start: "top bottom",
        }
    })
    gsap.to(".big-blue-circle",{
        y: -180,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-section",
            markers: false,
            scrub: 1,
            start: "top bottom",
        }
    });
    // about section 

    const aboutWrap = gsap.fromTo (".about-wrap",{ 
        scale: 0.6,
        opacity: 0.8,
    },
    {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
    })

    ScrollTrigger.create({
        trigger: ".about-section",
        scrub: true,
        markers: false,
        animation: aboutWrap,
    })
    const aboutTl = gsap.timeline();
    aboutTl.fromTo (".about-content-title, .about-content-description, .about-cta",{
        y: -60,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.2,
        duration: 2,
        ease: "power3.out",
    })
    .fromTo (".about-card-col,.about-card",{
        x: 160,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 0.5,
        duration: 2,
        ease: "power3.out",
    })
    ScrollTrigger.create({
        trigger: ".about-section",
        scrub: true,
        markers: false,
        animation: aboutTl,
        start: "10% center",
        end: "center center",
    })
    gsap.to(".about-pink-circle",{
        y: 100,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-section",
            markers: false,
            scrub: 1,
            start: "top center",
            end: "bottom top",
        }
    })
    gsap.to(".about-blue-circle",{
        y:-20,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-section",
            markers: false,
            scrub: 1,
            start: "top center",
            end: "bottom top",
        }
    })


    // works-section
   ScrollTrigger.create ({
        trigger: "#storecake",
        pin: "#storecake",
        markers: false,
        start: "center center",
        endTrigger: ".other-works-section",
        end: "top bottom",
        scrub: 1,
   })

   ScrollTrigger.create ({
    trigger: "#webcake",
    pin: "#webcake",
    markers: false,
    start: "center 55%",
    endTrigger: ".other-works-section",
    end: "top bottom",
    scrub: 1,
    })

    ScrollTrigger.create ({
        trigger: "#tikop",
        pin: "#tikop",
        markers: false,
        start: "center 54%",
        endTrigger: ".other-works-section",
        end: "top bottom",
        scrub: 1,
    })

    ScrollTrigger.create ({
        trigger: "#goodcars",
        pin: "#goodcars",
        markers: false,
        start: "center 56%",
        endTrigger: ".other-works-section",
        end: "top bottom",
        scrub: 1,
    })

    ScrollTrigger.create ({
        trigger: "#social",
        pin: "#social",
        markers: false,
        start: "center 58%",
        endTrigger: ".other-works-section",
        end: "top bottom",
        scrub: 1,
    })

    // other-works-row 

    gsap.to(".other-works-row",{
        x: -600,
        scrollTrigger: {
            trigger: ".other-works-section",
            scrub: 1,
            markers: false,
            start: "top center",
            end: "bottom center",
        }
    })

    // other-works-btn 

    gsap.fromTo(".all-works-btn", {
        scale: 1,
        opacity: 0.6,
    }
    ,{
        scale: 1.5,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".all-works-section",
            start: "top 80%",
            end: "bottom center",
            markers: false,
            scrub: 1,
        }
    }
)

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

    // lenis scroll
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 500)
    })

    gsap.ticker.lagSmoothing(0)
    // gsap code here!
   });