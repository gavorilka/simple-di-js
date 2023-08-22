class Dog {
    constructor(output) {
        this._output = output
    }
    bark(message) {
        this._output.print(message)
    }
}

class consoleOutput {
    print(message) {
        console.log(message)
    }
}

class pageOutput {
    #instBlock = "body"
    print(message) {
        document.querySelector(this.#instBlock).append(message)
    }
}

const consDog = new Dog(new consoleOutput());
consDog.bark('bow-wow');

const pageDog = new Dog(new pageOutput());
pageDog.bark('bow-wow');