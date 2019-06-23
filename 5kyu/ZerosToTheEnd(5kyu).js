/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

var moveZeros = function (arr) {
    const myfilterZero = arr.filter(e => e === 0);
    const notZero = arr.filter(e => e !== 0)
    return [...notZero,...myfilterZero]
}
