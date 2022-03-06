function findMaxDate(array) {
    const dates = [];
    let maxElement = -1;
    if (array.length <= 0) {
        console.log('Err');
        return null;
    }
    else {
        for (let element in array) {
            dates[element] = array[element].split('-');
        }
        for (let element in dates) {
            if (maxElement < 0) maxElement = element;
            else {
                for (let i = 0; i < 3; i++) {
                    if (dates[maxElement][i] < dates[element][i]) maxElement = element;
                    else if (dates[maxElement][i] > dates[element][i]) break;
                }
            }
        }
    }
    return maxElement;
}
const array = ['2022-02-28', '2020-01-10', '2002-12-10', '2020-10-16', '2019-08-01']
console.log(`In this array: ${array}\nThe max date is ${array[findMaxDate(array)]}`)
