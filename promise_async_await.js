const addCoffee = function (name) {
    return new Promise(function (resolve) {
        setTimeout(()=>{
            resolve(name);
        }, 500);
    });
};

const coffeeMaker = async function(){
    let coffeeList = "";
    const _addCoffee = async function (name) {
        coffeeList += (coffeeList ? ", " : " ") + await addCoffee(name)
    };
    await _addCoffee("Espresso");
    console.log(coffeeList);
    await _addCoffee("Americano");
    console.log(coffeeList);
    await _addCoffee("Mocha");
    console.log(coffeeList);
    await _addCoffee("Latte");
    console.log(coffeeList);
};
coffeeMaker()