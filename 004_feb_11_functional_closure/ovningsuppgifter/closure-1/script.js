function count(counter = 0){
    function countUp(){
        return ++counter;
    }
    return countUp;
}


const counter1 = count(30);
const counter2 = count(100);
const counter3 = count();
