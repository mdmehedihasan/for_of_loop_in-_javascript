// getting  out put from an Array
console.log('getting  out put from an Array');

let Array1 = [12, 43, 56, 77];
let Array2 = ['mehdi', 'hasan', 'rubel'];

// read array1 value
for (const value_of_array_1 of Array1) {
    console.log(value_of_array_1);
}

// read array2 value
for (const value_of_array_2 of Array2) {
    console.log(value_of_array_2);
}

// printing value with array also
console.log('printing value with array also');
for (const [indexNum, value] of Array1.entries()) {
    console.log(indexNum, value);
}
for (const [indexNum, value] of Array2.entries()) {
    console.log(indexNum, value);
}

//printing value of selected array
const selectedIndexValue = Array1[0];
console.log('Selected index value is: ', selectedIndexValue);
