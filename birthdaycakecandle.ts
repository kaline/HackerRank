function birthdayCakeCandles(candles) {

    const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];

    const elementCounts = {};
    
    myArray.forEach(element => {
      elementCounts[element] = (elementCounts[element] || 0) + 1;
    });
    
    console.log(elementCounts);
}

birthdayCakeCandles([4,2,4,1])