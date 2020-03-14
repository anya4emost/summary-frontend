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



let и const всплывают, но будет ошибка. Имеют блочную область видимости.