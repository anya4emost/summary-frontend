function* any() {
    yield 1;

    yield 2;

    yield 3;
}

// const generator = any();

// console.log('generator.next()', generator.next());
//
//
//
// console.log('generator.next()', generator.next());
//
// console.log('generator.next()', generator.next());
// console.log('generator.next()', generator.next());

for (let item of [1, 2, 3]) {
    console.log('item', item);
}

for (let item of any()) {
    console.log('item', item);
}

let a = {

    [Symbol.iterator]() {
        return {
            counter: 0,
            next() {
                if (this.counter < 3) {
                    this.counter++;
                    return {value: this.counter, done: false};
                }
                return {value: undefined, done: true};
            }
        }
    }
};

for (let item of a) {
    console.log('item', item);
}