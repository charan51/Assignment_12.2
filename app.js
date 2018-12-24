const inputVal = [10,8,12,36];

function filterArray(data) {
    return data.map(item => item*2).filter(item => item > 20).reduce((acc, val) => acc+val);
}
console.log(filterArray(inputVal));