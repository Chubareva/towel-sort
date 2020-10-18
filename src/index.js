// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (!matrix || matrix.length == 0) {
        return res;
    } else {

        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 != 0) {
                for (let j = matrix[i].length-1; j >= 0; j--) {
                    let mas = matrix[i];

                    res.push(mas[j]);
                }
            } else {
                for (let j = 0; j < matrix[i].length; j++) {
                    let mas = matrix[i];

                    res.push(mas[j]);
                }
            }
        }
        return res;
    }
}
