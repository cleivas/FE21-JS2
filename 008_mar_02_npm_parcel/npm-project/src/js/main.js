import anime from "../../node_modules/animejs/lib/anime.es.js";
console.log('anime')

anime({
    targets: 'h1',
    translateX: 270,
    direction: 'alternate',
    loop: true,
    duration: 3000
});