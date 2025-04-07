import gsap from 'gsap'

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: 1.52,
        y: 0.77,
        z: -1.08,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.sound-section-content', {
        opacity: 100,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })

    // tl.to(position, {
    //     x: 3.19,
    //     y: 8.36,
    //     z: -0.03,
    //     scrollTrigger: {
    //         trigger: '.display-section',
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: 2,
    //         immediateRender: false
    //     },
    //     onUpdate
    // })
    // .to(target, {
    //     x: 0.67,
    //     y: -0.11,
    //     z: -0.06,
    //     scrollTrigger: {
    //         trigger: '.display-section',
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: 2,
    //         immediateRender: false
    //     },
    // })
}