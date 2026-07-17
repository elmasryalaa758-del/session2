function greaterThanValue(arr, value) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > value) {
            result.push(arr[i]);
        }

    }

    return result;
}

console.log(greaterThanValue([5, 10, 15, 20, 25], 15));
console.log(greaterThanValue([1, 3, 7, 9, 12], 5));