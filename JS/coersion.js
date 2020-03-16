5 + 2 + '5' = '75'

Number('54asd');// NaN
parseInt('54asd') // 54

'' == 0 // true
'' === 0 // false

'abc' > 'aac' // true посимвольно

null == undefined //true
null === undefined //false

{a:2} == {a:2}  //false
{} === {} //false

var t = '' + {
    valueOf(){
        return 'my custom string from object'
    }
}

var t = '' + {
    toString(){
        return 'my custom string from object'
    }
}

t
"my custom string from object"
var t = '' + {
}
undefined
t
"[object Object]"
var t = '' + {
    valueOf(){
        return 'my custom string from object'
    }
}

когда не находит toString(), то ищет valueOf() - для строки



var g = 5 + {
    valueOf(){
        return 5;
    }
}
g=10

когда не находит valueOf(), то ищет toString() - для числа наоборот
