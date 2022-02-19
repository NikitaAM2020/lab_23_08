let mas = [2, 10, 7, 22, 14, 12, 89, 56];

console.log(binarySerch(mas, 10));
function binarySerch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let md = Math.floor((start + end)/2);
        if (target === arr[md]) {
            return md;
        }
        if (target > arr[md]) {
            start = md + 1;
        } else {
            end = md - 1;
        }
    }
    return -1;
}