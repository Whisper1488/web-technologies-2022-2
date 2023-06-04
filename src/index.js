class PizzaObject {

    constructor(name, price, calories) {
        this.name = name
        this._price = price
        this._calories = calories
    }
}

class PizzaType extends PizzaObject {
    constructor(name, price, calories) {
        super(name, price, calories);
    }
}

class Size extends PizzaObject {

    constructor(name, price, calories) {
        super(name, price, calories);
    }

}

class Topping extends PizzaObject {

    constructor(name, smallPrice, bigPrice, smallCalories, bigCalories, counterId) {
        super(name, null, null);
        this.smallPrice = smallPrice
        this.bigPrice = bigPrice
        this.smallCalories = smallCalories
        this.bigCalories = bigCalories
        this.counterId = counterId
    }

}

class Pizza extends PizzaObject {

    constructor(type, size, toppings) {
        super(type.name + ' ' + size.name, null, null);
        this.size = size
        this.stuffing = type
        this._toppings = toppings
    }

    addTopping(topping) {
        this._toppings.push(topping)
    }

    removeTopping(topping){
        let found = false
        for (let i = 0; i < this._toppings.length; i++) {
            if (topping === this._toppings[i]){
                found = true
                this._toppings.splice(i, 1);
                break
            }
        }
        if (!found){
            console.log("Топпинг не найден!");
        }
    }

    getToppingNames(){
        let toppingNames = "";
        this._toppings.forEach(x => toppingNames += x.name + ", ")
        toppingNames = toppingNames.slice(0, -2)
        return toppingNames;
    }

    getToppings(){
        return this._toppings
    }

    getSize(){
        return this.size.name
    }

    getStuffing(){
        return this.stuffing.name
    }

    calculateCalories(){
        let calories = 0;
        calories += this.size._calories + this.stuffing._calories
        this._toppings.forEach(x => calories += x._calories)
        return calories
    }

    calculatePrice(){
        switch (this.size.name) {
            case "Маленькая":
                for (let i = 0; i < this._toppings.length; i++) {
                    this._toppings[i]._calories = this._toppings[i].smallCalories
                    this._toppings[i]._price = this._toppings[i].smallPrice
                }
                break
            case "Большая":
                for (let i = 0; i < this._toppings.length; i++) {
                    this._toppings[i]._calories = this._toppings[i].bigCalories
                    this._toppings[i]._price = this._toppings[i].bigPrice
                }
                break
            default:
                console.log('Неизвестный размер');
        }
        let price = 0;
        price += this.size._price + this.stuffing._price
        this._toppings.forEach(x => price += x._price)
        return price
    }
}

const margarita = new PizzaType("Маргарита", 500, 300)
const pepperoni = new PizzaType("Пепперони", 800, 400)
const bavarian = new PizzaType("Баварская", 700, 450)

const big = new Size("Большая", 200, 200)
const small = new Size("Маленькая", 100, 100)

const mozzarella = new Topping("Моцарелла", 50, 100, 0, 0, 'mozzarellaCount')
const cheeseBoard = new Topping("Сырный борт", 150, 300, 50, 50, 'cheeseBoardCount')
const cheddarAndParmesan = new Topping("Чеддер и пармезан", 150, 300, 50, 50, 'cheddarAndParmesanCount')

let pizzaOrder = new Pizza(pepperoni, small, [])

const pizzaPrice = document.querySelector('#pizzaPrice')
const pizzaCalories = document.querySelector('#pizzaCalories')

function getPizzaSize(){
    let bigOption = document.querySelector('#big')
    if (bigOption.classList.contains('selected')){
        return big
    }
    return small
}

function getPizzaType(){
    let pepperoniOption = document.querySelector('#pepperoni')
    let margaritaOption = document.querySelector('#margarita')

    if (pepperoniOption.classList.contains('selected')){
        return pepperoni
    } else if (margaritaOption.classList.contains('selected')){
        return margarita
    } else {
        return bavarian
    }
}

function setPizzaType(type){
    let pizzas = Array.from(document.getElementsByClassName('pizza-type-option'))
    for (const pizza of pizzas) {
        if (pizza.classList.contains('selected')){
            pizza.classList.remove('selected')
        }
    }
    for (const pizza of pizzas) {
        if (pizza.id === type){
            pizza.classList.add('selected')
        }
    }
    changePizza()
}

function setPizzaSize(size){
    let bigSize = document.querySelector('#big')
    let smallSize = document.querySelector('#small')
    if (size === big){
        if (!bigSize.classList.contains('selected')){
            bigSize.classList.add('selected')
            smallSize.classList.remove('selected')
        }
    } else {
        if (!smallSize.classList.contains('selected')){
            smallSize.classList.add('selected')
            bigSize.classList.remove('selected')
        }
    }
    changePizza()
}

function addTopping(topping){
    pizzaOrder.addTopping(topping)
    let counter = document.querySelector('#'+topping.counterId)
    counter.innerHTML = countTopping(topping).toString()
    changePizza()
}

function removeTopping(topping){
    pizzaOrder.removeTopping(topping)
    let counter = document.querySelector('#'+topping.counterId)
    counter.innerHTML = countTopping(topping).toString()
    changePizza()
}

function countTopping(topping){
    let allTopings = pizzaOrder.getToppings()
    let count = 0
    for (let currentTopping of allTopings) {
        if (currentTopping === topping) count++
    }
    return count
}

function changePizza() {
    let size = getPizzaSize()
    let pizzaType = getPizzaType()
    let toppings = pizzaOrder.getToppings();
    pizzaOrder = new Pizza(pizzaType, size, toppings)
    pizzaPrice.innerHTML = pizzaOrder.calculatePrice()
    pizzaCalories.innerHTML = pizzaOrder.calculateCalories()
}

changePizza()