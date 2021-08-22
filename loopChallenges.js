// 1. Print odds 1-20; 
console.log("1. Print odds 1-20:")

for(var i = 1; i < 21; i += 2){
    console.log(i);
}

// 2. Decreasing Multiples of 3
console.log("2. Decreasing Multiples of 3")

for(var i = 100; i >= 0; i--){
    if(i%3 == 0){
        console.log(i)
    }
}

// 3. Print the sequence
console.log("3. Print the sequence")

var array = [4, 2.5, 1, -0.5, -2, -3.5]

for(var i = 0; i < array.length; i++){
    console.log(array[i])
}

// 4. Sigma
console.log("4. Sigma")

var sum = 0; 

for(var i = 1; i < 101; i++){
    sum += i;
}

console.log(sum)

// 5. Factorial
console.log("5. Factorial")

function factorial(num){
    if(num == 1){
        return 1;
    }

    return num*factorial(num-1)
}

console.log(factorial(12))