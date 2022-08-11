const btn =  document.getElementById("menu-btn");
const hBtn = document.querySelector(".h-btn");
const mobileBtn = document.querySelector(".mobile-btn");
const mobileHeritage = document.querySelector(".bobile-heritage");
const heritageBtn = document.querySelector(".heritage");
const nav = document.getElementById("menu");

btn.addEventListener('click', ()=>{

    btn.classList.toggle('open');
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// higher view ports
hBtn.addEventListener('click', ()=>{
    heritageBtn.classList.toggle('hidden')
    heritageBtn.classList.toggle('flex')
})
hBtn.addEventListener('mouseover', ()=>{
    heritageBtn.classList.toggle('hidden')
    heritageBtn.classList.toggle('flex')
})

// moile view
mobileBtn.addEventListener('click', ()=>{
    mobileHeritage.classList.toggle('hidden')
    mobileHeritage.classList.toggle('flex')
})
mobileBtn.addEventListener('mouseover', ()=>{
    mobileHeritage.classList.toggle('hidden')
    mobileHeritage.classList.toggle('flex')
})