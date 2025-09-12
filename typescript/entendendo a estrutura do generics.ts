// 1. Função Genérica

function identity<T>(arg: T): T {
    return arg;
}

const num = identity(5);        // num é do tipo número
const str = identity("Hello");   // str é do tipo string

// 2. Classe Genérica

class Box<T> {
    private contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");

console.log(numberBox.getContents()); // 123
console.log(stringBox.getContents());  // Hello

// 3. Interface Genérica

interface Pair<K, V> {
    key: K;
    value: V;
}

const pair: Pair<number, string> = {
    key: 1,
    value: "One",
};