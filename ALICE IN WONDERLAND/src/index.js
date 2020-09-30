// Alice was bored that day,so she was sitting on the riverbank.
// Suddenly  she notices a talking, White Rabbit with a pocket watch. 
// It ran fast,and she followed it, down a rabbit hole.
// She fell into the hole and found a magical wonderland with dark trees, beautiful flowers.
// She found many ways numbered from 1,2,3,........18.
// she was confused which is the right way that will lead her to her home. 
// She found a cute bird, standing in one of the tree. 
// Alice asked the bird the way to go back to her home.
// The bird said a two digit number( say 23 ) and asked her to find the sum of its digits (2+3=5) and that numbered way will lead her to her home.
// Alice was already confused, so pls help Alice in finding the route to her home....


//Write a function to return the route to her home


function find_Route(number){
    let div;
    let sum = 0;
    var rem=0;
    if(number < 0) 
        return null;
    else if (number===0) {
            return 0;
        } 
    else{
       rem = number % 10;
            div = Math.floor(number / 10);
            sum = rem + div;
     return sum;
}
}
find_Route(number);

// function sumDigits(number) {
//     let sum = 0;
//     while (number) {
//         digit = number % 10;
//         sum += digit;
//         number = (number - digit) / 10;
//     }
//     return sum;
// }
// find_Route(number);

//Run SpecRunner.html to check the Test Case.