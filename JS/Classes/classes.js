class A {
    static b = 5;// нельзя переопределить

    static staticMethod(){
        console.log(this.b); // 5
        console.log(A.b);    // 5
    }

    myMethod(){
        console.log(this.b);  // undefined
        console.log(A.b);     // 5
    }
}

const instance = new A();
A.staticMethod();
instance.myMethod();


статический метод можно вызвать извне, но нельзя вызвать у экземпляра класса

Это как

function f() {

}

f.t = 5;

 у инстанса нет prototype, есть __proto__
 prototype есть у функции-конструктора


class B {
    method(){
        console.log('base class method');
    }
}

class A extends B {
    method() {
        console.log('class A method');
    }

    myMethod() {
        // Как тут вызвать метод базового класса?
        super.method()
    }
}

const instance = new A();
instance.myMethod();




class B {
    b;


    constructor(b) {
        this.b = b;
    }

    method(){
        console.log('base class method');
    }
}

class A extends B {
    a;

    constructor(a, b) {//сделать так, чтоб сюда записалось и а, и b
        super(b);
        this.a = a
    }

    method() {
        console.log('class A method');
    }

    myMethod() {
        // Как тут вызвать метод базовго класса?
        super.method()
    }
}

const instance = new A(1,2);
instance.myMethod();


function A() {
    this.t = 5;
}

function B() {
    this.t = 10;
}

function C() {
}

var a = new A();
B.prototype = a;
C.prototype = a;

var instance = new B();
var instance2 = new C();

//удалить у instance2 свойство t
delete C.prototype.t

или

delete instance2.__proto__.t


a= {
    t:5

}

instance={
    t:10
}


instance2={
    t:5
}







Читать классы

