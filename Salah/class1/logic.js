let number = 5; 
let number2 = 5;


// Condition evaluates the bigger of 2 numbers
if(number > number2){
    console.log("number 1 is greater");
} 
else if(number == number2){
    console.log("number 2 is eaqual to number 1");
}
else {
    console.log("number 2 is greater");
}

// loop that repeats 20 times
for(let i=0; i<20; i++){
    console.log('me gusta el espagnol '+i);
}


// Function add 2 numbers
function my_addition(a, b){
    let result = a+b;
    alert('the result of the addition is : '+result);
}
// my_addition(6, 2);


// Function multiply 3 numbers
function multiply(a, b, c){
    let result = a * b * c;
    alert("The result of multiplying is: " + result);
}
// multiply(2, 4, 5);


// Function evaluates if a number is positive or negative
function pos_neg (number){
    if (number > 0){
        alert(`the number ${number} is positive`);
    }
    else if (number < 0) {
        alert(`the number ${number} is negative`);
    }
    else {
        alert(`the number ${number} is null`);
    }
}
//pos_neg(10); 



// Function evaluates if a number is odd or even
function odd_eve (number){
    if(number % 2 == 1) {
        return `the number ${number} is odd`;
    }
    else{
        return `the number ${number} is even`;
    }
}
let str ="";
str += "hey Jordy";
str +="\nhey Salah\n";
str += odd_eve(10)+"\n";
str += odd_eve(7)+"\n";
str += odd_eve(540)+"\n";
str += odd_eve(875)+"\n";
// alert(str);



// function adds the 1st and last elements of an array
function first_last(my_array){
    let fist_element = my_array[0];
    let last_element = my_array[my_array.length-1];
    return fist_element + last_element;
}
//alert(first_last([54, 32, 21, 675, 3]));



// Function adds all the elements of an array
function sumUp_array(array){
    let total = 0;
    for (let i=0; i < array.length; i++) {
        total += array[i];
    }
    return total
}
//alert(sumUp_array([54, 32, 21, 675, 3]));



// Function adds only negative values of an array
function sumUp_array_neg(array) {
    let total = 0;
    for (let i=0; i<array.length; i++){
        if (array[i] < 0) {
            total += array[i];
        }
    }
    return `The total of negative numbers of the array is ${total}`;
}
// alert(sumUp_array_neg([54, 32, -21, 675, -3]));



// Function adds only the half of elements of the array
function sumUp_first_half_array(array){
    let total = 0
    for (let i=0; i < array.length/2; i++) {
        total += array[i];
    }
    return total
}
//alert(sumUp_first_half_array([54, 32, 21, 675, 3]));