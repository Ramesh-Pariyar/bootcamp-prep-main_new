### Deeper Copy

Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-
dimensional array.

```javascript
let myArray = [1, [2, 3]];
// 2d deep copy
let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]


//shallow copy example
let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]
```
