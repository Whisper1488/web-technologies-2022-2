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

    constructor(name, smallPrice, bigPrice, smallCalories, bigCalories) {
        super(name, null, null);
        this.smallPrice = smallPrice
        this.bigPrice = bigPrice
        this.smallCalories = smallCalories
        this.bigCalories = bigCalories
    }

}

class Pizza extends PizzaObject {

    constructor(type, size) {
        super(type.name + ' ' + size.name, null, null);
        this.size = size
        this.stuffing = type
        this._toppings = []
    }

    addTopping(topping) {
        switch (this.size.name) {
            case "Маленькая":
                topping._calories = topping.smallCalories
                topping._price = topping.smallPrice
                break
            case "Большая":
                topping._calories = topping.bigCalories
                topping._price = topping.bigPrice
                break
            default:
                console.log('Неизвестный размер');
        }
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

    getToppings(){
        let toppingNames = "";
        this._toppings.forEach(x => toppingNames += x.name + ", ")
        toppingNames = toppingNames.slice(0, -2)
        return toppingNames;
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
        let calories = 0;
        calories += this.size._price + this.stuffing._price
        this._toppings.forEach(x => calories += x._price)
        return calories
    }
}

let margarita = new PizzaType("Маргарита", 500, 300)
let pepperoni = new PizzaType("Пепперони", 800, 400)
let bavarian = new PizzaType("Баварская", 700, 450)

let big = new Size("Большая", 200, 200)
let small = new Size("Маленькая", 100, 100)

let mozzarella = new Topping("Моцарелла", 50, 100, 0, 0)
let cheeseBoard = new Topping("Сырный борт", 150, 300, 50, 50)
let cheddarAndParmesan = new Topping("Чеддер и пармезан", 150, 300, 50, 50)

let pizzaOrder = new Pizza(pepperoni, big)
pizzaOrder.addTopping(cheeseBoard)
pizzaOrder.addTopping(mozzarella)
pizzaOrder.removeTopping(mozzarella)
pizzaOrder.removeTopping(cheddarAndParmesan)
console.log(pizzaOrder.name)
console.log(pizzaOrder.getStuffing())
console.log(pizzaOrder.getSize())
console.log(pizzaOrder.getToppings())
console.log(pizzaOrder.calculateCalories())
console.log(pizzaOrder.calculatePrice())
