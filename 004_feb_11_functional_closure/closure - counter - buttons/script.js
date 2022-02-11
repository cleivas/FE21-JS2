(function () {
    function count() {
        let counter = 0;
        function countUp() {
            return ++counter;
        }
        return countUp;
    }
    //Skapa två stycken knappar som räknar uppåt när man trycker på dem
    //Varje knapps räknare ska göras med closure

    const counter1 = count();
    const counter2 = count();

    document.querySelector("#b1").addEventListener('click', (e) => {
        e.target.innerText = counter1();
    });

    document.querySelector("#b2").addEventListener('click', (e) => {
        e.target.innerText = counter2();
    })
})();