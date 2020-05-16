class Typescript {
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string){
        return `[${name}]: Typescript  version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

//лаконичнее

class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string){}
}

//===================Модификаторы

class Animal {
    protected voice: string = '' //доступны в этом классе и во всех классах, наследуемых от этого. У инстанса класса это свойство уже недоступно
    public color: string = 'black' //по-умолчанию все public. Они доступны и для всех экземпляров

    constructor(){
        this.go()
    }

    privat go() { // доступны только в том классе, в котором определены
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log('cat.color', cat.color);

//============= Абстрактные классы - нужны на этапе разработки, чтобы от них наследоваться

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component{
    render(): void {
        console.log('Component on render');
    }

    info(): string{
        return 'This is info';
    }
}