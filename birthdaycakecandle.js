function birthdayCakeCandles(candles) {
    var myArray = ['a', 'b', 'c', 'c', 'b', 'd'];
    var elementCounts = {};
    myArray.forEach(function (element) {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
    });
    console.log(elementCounts);
}
birthdayCakeCandles([4, 2, 4, 1]);
