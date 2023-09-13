console.log("Interview Question for Placement ");

// Question- 1 Given a string here and you have to reverse the reverse of the string array. 



                                // code for Ques-1

// var str = "Akgec is a Chutiya College in Ghaziabad";

// var strSaved=str.split(" ").map(function (word)
// {
//     return word.split("").reverse().join("")
// })

// console.log(strSaved.join(" "));



// Question 2 :-> If the given element is an array or an objct

// Note : We dont use typeof() function here to know type of the element because
// it returns array and object element both as an array type.




                           // code for Ques -2

// function CheckArray(elem)
// {
//     console.log(Array.isArray(elem));
// }


// CheckArray([]);

// CheckArray({});

// Method -2 

// function CheckArray(elem)
// {
//     return Array.isArray(elem);
// }


// console.log(CheckArray([]));

// console.log(CheckArray({}));

// Points to Note : isArray is a function which use to check whether the entered element is an array or not It returns true if it is otherwise it is false.


// Question -3 :-> How to empty an array in JS ?
   // Do not reset it to a new array, and do loop through to pop each value

                    // code for Ques -3

// var array = [1,2,3,4,5,6];

// array.length=0;
// console.log(array.length);




// Question-4 :-> How would you check if a number is a integer 
// Do not use isInteger in-built function  - Number.isInteger(number);
                // We will use the Modulo Operator with 1 to get the remainder 0 
                              // Code for Question - 4

// var num = 16.89;
// if(num%1 === 0)
// {
//     console.log("Integer");
// }
// else{
//     console.log("Not A Integer");
// }







// Question-5 :->  Duplicate the Array 
// Like if Arr = [1,2,3,4,5]


 // DuplArray = [1,2,3,4,5,1,2,3,4,5]


        // Code

        // function duplicate(arr)
        // {
        //     return arr.concat(arr);
        // }

        // console.log(duplicate([1,2,3,4,5]));

// Question-6 :-> Write a javascript Function that reverses the given number

                            // Method 1 using reverseNum function and convert to string then split then reverse then join

// function reverseNum(num)
// {                                            
//     return num.toString().split("").reverse().join("");
// }

// console.log(reverseNum(45));


//                     Method -2 Using while Loop

// function reverseNum(num)
// {   var rev=0;
//     while(num > 0)
//     {       var rem = num % 10;
//             rev = rev*10 + rem;
//             num = Math.floor(num /10);
//     }
//     return rev;
// }
// console.log(reverseNum(1045));





// Question-7 :-> Write a function to check whether string is Palindrome or Not ?


                     // Using Reverse logic

// function isPalindrome(str)
// {    str = str.toLowerCase();                                  
//     var rev=  str.toString().split("").reverse().join("");
    
//     if(rev == str) return true;
//     else return false;
// }

// console.log(isPalindrome("Naman"));

// console.log(isPalindrome("pool"));




// Question-8 :-> Write a Js Function which returns the passed string to
// the Aplhabetical order
// Ex- Harsh   Returned String : aHhrs

                         // Code 

                        
// function Alpha(str)
// {
//     return str.split("").sort();
// }
// console.log(Alpha("harsh"));



// Question-9 :-> Write a Js Function which accepts a string as a perimeter
// and converts the first letter of each word of the string in uppercase



                        // COde

// function AlphaFirst(str)
// {
//     var allwords =  str.split(" ").map(function(str)
//     {
//         return str.charAt(0).toUpperCase() + str.substring(1)
//     });
//     return allwords.join(" ");
// }
// console.log(AlphaFirst("harsh is a final year student at akgec"));






// Question-10 :-> Write a Js Function which count the frequency of the character in given string;
                        


                                // Code


// function occ(str)
// {
//     var occurences = {};
//     str.split("").forEach(function(elem)
//     {  if(occurences.hasOwnProperty(elem) === false) {
//             occurences[elem] =1;
//         }
//         else {
//             occurences[elem]++;
//         }

//     })
//     return occurences;
// }

// console.log(occ("apple"));




// Question-11 :-> loop and array all numbers of it

                        // code

// var arr =[1,2,3,4,5,6,7,8,9,10];
// var sum=0;

// for(var i=0; i<arr.length; i++)  OR   arr.forEach(function(elem)
                                
                                        //        {
                                                       // sum + = elem;
                                        //        })
// {
//         sum += arr[i];
// }

// console.log(sum);


// Question -12 :-> In an array of num and strings, add only those which are numbers only



// var arr= [1,2,"Harsh", 45, "Kannaujiya", 544, "Jatin sharma"];
// var sum =0;

// arr.forEach(function(elem)
// {
//         if(typeof elem === 'number')
//         {
//                 sum += elem;
//         }
// })
// console.log(sum);



// Question -12 :-> In an array, sort out all the values of objects having gender value == "Male";
                        
                        //  Code

// var arr = [
//         {name: "Harsh", gender : "male"},
//         {name: "Jatin", gender : "male"},
//         {name: "Chhavi", gender : "feale"},
//         {name: "Akash", gender : "male"},
//         {name: "Shubhika", gender : "female"}  
// ]


// var result = arr.filter(function(elem)
// {
//         return elem.gender === "male";
// })

// console.log(result);\

                      // Alternate method
                      //First count all the non male candidates 
                      // then make a code of removing 1 non male candidate 
                // then run a loop for all  eligible non male candidates


// var arr = [
//         {name: "Harsh", gender : "male"},
//         {name: "Jatin", gender : "male"},
//         {name: "Chhavi", gender : "feale"},
//         {name: "Akash", gender : "male"},
//         {name: "Shubhika", gender : "female"}  
// ]


// var count=0;
// arr.forEach(function(elem)
// {
//         if(arr[i] !== "male")
//         {
//                 count++;
//         }
// })

// for(var i=1; i<= count; i++)
// {
//         for(var j=0; j<arr.length; j++)
//         {
//                 if(arr[j].gender !== "male")
//                 {
//                         arr.splice(j,1);
//                 }
//         }
// }


// console.log(arr);








// Question 13 :->  Write a Javascript question to clone an array.

// function cloneArray(arr)
// {
//         return [...arr];    rest operator
// }

// var newArr = cloneArray([1,2,3,4,5]);
// console.log(newArr);





// Question 14 :-> Write a Js Program accepts an argument and returns the type of the
// argument Note : object, boolean,function,
// number, string and undefined. 



                                 // Code  

// function TypeTeller(elem)
// {
//         console.log(typeof elem);
// }

// console.log(TypeTeller(45));
// console.log(TypeTeller(null));


// console.log(TypeTeller(undefined));

// console.log(TypeTeller("Harsh"));



//Question 15 :->  Write a Js function to get the first element of the array.
// Passing a parameter 'n' will return the first 'n' elements of the array




// var arr = [1,2,3,4,5,6,7,8,9,10];
// function Arr(n)
// { for(var i=0; i<n; i++)
// {  console.log(arr[i]);
// }
// }
// var n= prompt("Enter the location you want to get the number in array");
// Arr(n);




// Question 16:-> Js program to find the most frequent item of an array

                        

                       // MOST IMPORTANT QUESTION



                        
// function freq(arr)
// {
//         var freq= {};

//         arr.forEach(function(elem) {
//                 if(freq.hasOwnProperty(elem)) 
//                 {  freq[elem]++;
//                 }
//                 else
//                 { freq[elem] =1;  // set the freq of array number to 1
//                 }
                
//         });

//         var ans = Object.keys(freq).reduce(function(acc,next)
//         {
//                 return freq[acc] > freq[next] ? acc : next;
//         })
//         console.log(ans);
// }


// freq([1,2,4,2,3,1,1,1,12,3,43,4,43,4,3,6,6,6,6,67,7,7,7,7,7,7]);






// Ques 17: -> Shuffling of the given array


                        //Code for 2nd Most Important Questions

// function Shuffle(arr)
// {      var TotalShuffleArea = arr.length;
//         while(TotalShuffleArea >0)
//         {      TotalShuffleArea--;
//                 var indexToChanged = Math.floor(Math.random() * TotalShuffleArea);
//                 var temp = arr[TotalShuffleArea];
//                 arr[TotalShuffleArea] = arr[indexToChanged];
//                 arr[indexToChanged]= temp;
//         }
//         return arr;
// }
// console.log(Shuffle([1,2,3,4,5,6,7]));




// Ques 18: -> Union of Two Arrays

                                  // Code

// function Union(arr1, arr2)
// {
//         return [...new Set(arr1.concat(arr2))];
// }

// console.log(Union([1,2,3], [4,5,6]));