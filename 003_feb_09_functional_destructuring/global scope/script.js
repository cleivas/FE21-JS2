(function(){
    let score = 0;

    function updateScore(){
        score++;
    }
    
    console.log(score);
    updateScore();
    updateScore();
    updateScore();
    updateScore();
    console.log(score);

    console.log('Den här funktionen anropas direkt');
})();

console.log(score);