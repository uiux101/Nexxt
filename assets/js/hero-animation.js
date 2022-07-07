

let tl = gsap.timeline()
gsap.registerPlugin("TextPlugin")
tl.from("#left-msg",{
    scale:0,
    transformOrigin:"center center ",
    delay:1.5,
    duration:.5,
    ease:"power4.inOut"
})
.to(".left-text",{
    text:"Hello , I have a question ?",
    duration:2,
    
})
.from("#right-msg",{
    scale:0,
    transformOrigin:"center center ",
    duration:.5,
    ease:"power4.inOut"
})

.to(".right-text",{
    text:"lorem ipsum dollar sign ",
    duration:2,
    
})