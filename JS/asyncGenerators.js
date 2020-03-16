const getPromise = (num) => {
    return new Promise((res, rej) => setTimeout(() => {
        res(num);
    }, 1000));
};

async function* any() {
    const a = await getPromise(1);
    yield a;

    const b = await getPromise(2);
    yield b;
}

async function anonumous() {
    for await (let item of any()) {
        console.log('item', item);
    }
}

//anonumous();


// ниже 2 идентиичные записи
async function* anyyyyh() {

}

function* anyyyyh() {
    return Promise.resolve();
}

let a = {

    [Symbol.asyncIterator]() {
        return {
            counter: 0,
            async next() {
                if (this.counter < 3) {
                    await getPromise();
                    this.counter++;
                    return {value: this.counter, done: false};
                }
                return {value: undefined, done: true};
            }
        }
    }
};


async function anonumous2() {
    for await (let item of a) {
        console.log('asyncIterator', item);
    }
}

//anonumous2();
/**
д/з
1. завести учебный репозиторий с описанием
2. задача
 Надо реализовать асинхронный итератор, выводящий число от 1 до 5 каждую секунду

 let range = {
  from: 1,
  to: 5,
 };

 let range = [1,2,3,4,5]

 (async () => {
   for await (let value of range) { // (4)
     console.log(value); // 1,2,3,4,5
   }
 })();

 */

let rangeIterator = {

    [Symbol.asyncIterator]() {
        return {
            counter: 0,
            async next() {
                if (this.counter < 5) {
                    await getPromise();
                    this.counter++;
                    return {value: this.counter, done: false};
                }
                return {value: undefined, done: true};
            }
        }
    }
};

async function anonumous3() {
    for await (let item of rangeIterator) {
        console.log('rangeIterator', item);
    }
}

anonumous3();



/**
3. прочитать в js.ru про итераторы и symbol,  и рассказать учителю разницу
 **/