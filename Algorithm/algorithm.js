var arr = ['hello'];
arr.push('world'); //O(1)
arr.unshift('my'); //O(n)

for (var l = 0; l < arr.length; l++) { //O(n)

}

for (var l = 0; l < arr.length; l++) { //O(n^2)
    for (var a = 0; a < arr.length; a++) {

    }
}


// Задачка
/**
 * Есть 2 отсортированных массива, надо узнать число,
 * которое будет посередине, если объединить эти массивы в один отсортированный массив
 * Надо постараться сделать оптимальный алгоритм
 * Определить сложность алгоритма
 *
 *
 * [1, 2, 3, 3, 4, 13, 15, 16, 20]
 * console.log(getMedian([1, 3, 15, 20], [2, 3, 4, 13, 16])); // 4
 **/

const getMedian = (arr1, arr2) => {
    let medianesIndex = Math.ceil((arr1.length + arr2.length)/2);
    let resultArr = [];

    while (medianesIndex) {
        medianesIndex--;

        if(!arr1.length){
            resultArr.push(arr2.shift());
            continue;
        }

        if(!arr2.length){
            resultArr.push(arr1.shift());
            continue;
        }

        if (arr1[0] < arr2[0]) {
            resultArr.push(arr1.shift());
        } else {
            resultArr.push(arr2.shift());
        }
    }

    return resultArr.pop();
};

console.log('', getMedian([1, 2, 3, 4, 5], [2, 7, 6, 8, 20, 22]));
