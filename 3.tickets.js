function manageDatabase(array, criterion) {

    let resultArray = [];
    let finalResult = [];

    for (const iterator of array) {
        resultArray.push(iterator.split('|'));
    }

    if (criterion === 'destination') {
        resultArray = resultArray.sort((a, b) => (a[0].localeCompare(b[0])));
    } else if (criterion === 'price') {
        resultArray = resultArray.sort((a, b) => (a[1] - b[1]));
    } else {
        resultArray = resultArray.sort((a, b) => (a[2].localeCompare(b[2])));
    }

    for (const i in resultArray) {
        let resultObject = { destination: '', price: '', status: '' };
        resultObject.destination = resultArray[i][0],
            resultObject.price = Number(resultArray[i][1]),
            resultObject.status = resultArray[i][2];

        finalResult.push(resultObject)
    }
    return (finalResult);
}
console.log(manageDatabase([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'status'
));