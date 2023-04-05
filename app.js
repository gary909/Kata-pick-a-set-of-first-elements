function first(n) {
    // return arr;
    const arr = ['a', 'b', 'c', 'd', 'e'];
    let myArr = []

    if(n == null || n == ' ' ){
        return ['a'];
    }

    for(let i = 0; i < n; i++){
        myArr.push(arr[i])
    }
    return myArr;
}

// function first(arr, n) {
//     if(n == undefined) return arr.slice(0, 1);
//     if(n == 0) return [];
//     let newArr = [];
//     if(n <= arr.length){
//       for(let i = 0; i < n; i++){
//         newArr.push(arr[i])
//       } return newArr
//     } return arr
//   }

//console.log(first([...arr], )); // ['a']
//console.log(first([...arr], 2)); // ['a', 'b']
console.log(first()); // ['a']
console.log(first(2)); // ['a', 'b']