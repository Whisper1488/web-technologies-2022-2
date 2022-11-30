class Task1 {
    constructor(array, propName) {
        console.log(this.pickPropArray(array, propName))
    }

    pickPropArray(array, propName){
        let result = []
        for (const item of array) {
            if (item.hasOwnProperty(propName)) result.push(item[propName])
        }
        return result
    }
}

class Task2 {
    createCounter(){
        let counter = 1
        return function (){
            console.log(counter++)
        }
    }
}

class Task3 {
    constructor(string) {
        console.log(this.spinWords(string))
    }

    spinWords(string){
        let words = string.split(" ")
        let result = []
        words.forEach(word => word.length >= 5 ? result.push(word.split('').reverse().join('')) : result.push(word))
        return result.join(" ")
    }
}

class Task4 {
    constructor(nums, target) {
        console.log(this.targetSum(nums, target))
    }

    targetSum(nums, target){
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
               if (nums[i] + nums[j] === target) return [i, j]
            }
        }
    }
}

/*class Task5 {
    constructor(strings) {
        if (strings.length > 0) console.log(this.prefixes(strings))
    }

    prefixes(strings){
        let minLen = Number.MAX_VALUE;
        for (const string of strings) if (string.length < minLen) minLen = string.length
        for (let i = 0; i < minLen; i++) {

        }
    }
}*/

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

new Task1(students, 'name')

const counter1 = new Task2().createCounter()
counter1() // 1
counter1() // 2

const counter2 = new Task2().createCounter()
counter2() // 1
counter2() // 2

new Task3("Привет от Legacy")
new Task3("This is a test")

new Task4([2,7,11,15], 9)

