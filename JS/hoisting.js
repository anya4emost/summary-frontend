function foo4() {
    var b = 10;

    function b() {
        return 5;
    }

    console.log(b);

    function b() {
        return 15;
    }
}

foo4();

Фаза компиляции: сначала всплывает первая функция b, потом она перезаписывается на вторую функцию, var b - игнорируется
Фаза выполнения: в b присваивается значение 10, функция "return 5" уже всплыла console.log(b) выводит 10;

Теория

сначала поднимаются функции, а потом переменные.
    Поэтому, если функция и переменная имеет одно и то же название, то первой всплывет функция,
    а когда дойдет дело до переменной, то движок посмотрит, что это дубликат названия и просто
проигнорирует переменную. Но при этом последующие объявления функции перекрывают предыдущие


let и const всплывают, но будет ошибка. Имеют блочную область видимости.