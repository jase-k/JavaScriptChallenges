// Creates a Pizza Object
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza ={
        crust: crustType,
        sauce: sauceType,
        cheese: cheeses,
        toppings: toppings
    }
    return pizza
}

//Sample Pizza Objects
var pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions'])
var pizza3 = pizzaOven('thin', 'bbq', ['mozzerella', 'mexican'], ['pineapple', 'ham', 'red pepper', 'green pepper'])
var pizza4 = pizzaOven('original', 'alfredo', ['mozzerella', 'gouda'], ['chicken', 'red pepper', 'onion'])

console.log(pizza1, pizza2, pizza3, pizza4)


//Creates a Pizza with Random Toppings. 
function randomPizza(numberOfCheeses, numberOfToppings){
    if(numberOfCheeses > 3){
        return "Pizza can only have 3 cheese servings. Please retry with less cheeses."
    }
    else if(numberOfToppings > 6){
        return "Pizza can only have 6 toppings. Please retry with less toppings."
    };

    var crustTypes = ['thin', 'original', 'hand tossed', 'deep dish', 'pan', 'stuffed'];
    var sauceTypes = ['marinara', 'bbq', 'alfredo'];
    var cheeseTypes = ['gouda', 'mozzerella', 'mexican', 'munster', 'feta'];
    var toppingTypes = ['pepperoni', 'ham', 'chicken', 'beef', 'lobster', 'sausage', 'onions', 'red peppers', 'green peppers', 'pineapple'];

    var crust = crustTypes[Math.floor(Math.random()*crustTypes.length)];
    var sauce = sauceTypes[Math.floor(Math.random()*sauceTypes.length)];
    var cheese = [];
    var toppings = [];
    
    for(var i = 0; i < numberOfCheeses; i++){
        var type = cheeseTypes[Math.floor(Math.random()*cheeseTypes.length)]
        if (cheese.includes(type)){ //checks to see if type is already on the pizza
            var index =cheese.findIndex((element) => element == type)
            cheese[index] = "Double " + type;
            break;
        }
        cheese.push(type);
    }
    
    for(var i = 0; i < numberOfToppings; i++){
        var type = toppingTypes[Math.floor(Math.random()*toppingTypes.length)]
        if (toppings.includes(type)){ //Checks to see if element is already in the array
            var index = toppings.findIndex((element) => element == type)
            toppings[index] = "Double " + type;
        }
        else{
            toppings.push(type);
        }
    };
    return   pizzaOven(crust, sauce, cheese, toppings)
}

var pizz5 = randomPizza(3,6);

console.log("random Pie: ", pizz5)