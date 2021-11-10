//var x=1;

// function a(){
//     var x=10;
//     console.log(x);
// }



// function b(){
//     var x= 100;
//     console.log(x);
// }
// console.log(x);
// a();
// b();

// var x = 1;
// console.log(x);


//ReferenceError
//console.log(hdfdfh);


//SyntaxError:  will throw an error Identifier 'a' has been already declared
// var a = 10;
// let a = 10;

// let a =10;
// const b =1000;

// let a;

//  a= 10;

//  console.log(a);





//Uncaught SyntaxError: Missing initializer in const declaration

// const a;

// a=10;


//Uncaught TypeError: Assignment to constant variable.
// const a =10;

// console.log(a);

// a = 11;

//Example of block scope, why let and const are block scoped?

// {
//     var a =10;
// let b =10;
// const c=10;
// }


//Illegal Shadowing: doesn't throw error because we are not redeclaring a inside the block scope for let

// var a =20;

// {
// let a =20;
// }



//Closures

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// z();


//setTimeOut
//  function x(){
//      var i =1;
//      for(var i=1;i<=5;i++){

//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             },i*1000);
//         }
//         close(i);
//      }  
//  }

//  x();


// function outer(b){
//     function inner(){
//         console.log(a,b);
//     }
//     let a =10;
//     return inner;
// }

// var z = outer("hello");

// z();

// function outest(){
//     var c =20;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c);
//         }
//         let a =10;
//         return inner;
//     }
//     return outer;
// }

// var fn=outest()("hello");
// fn();


//Data hiding and encapsulation using closure


//Suppose we have a variable and we want to have some data privacy on it so that other pieces of code cannot have access to that piece of data.


// var counter = 0;

// function incrementCounter(){
//     counter++;
// }

// incrementCounter();

// console.log(counter);

// ^^ Major flaw with this code is anybody can access our counter and can change it


//So we have to ensure nobody else can change the value of counter other than incrementCounter function



// function counter(){
//     var count =0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1= counter();
// counter1(); //1
// counter1(); //2
// counter1(); //3
// counter1(); //4

// var counter2= counter();

// counter2(); //1
// counter2();//2

//Scalable and better version with both increment and decrement counter

// function counter(){
//     var count =0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = function(){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();




//Disadvantages of closure

// There could be overconsumption of memory, everytime a clousre is formed it consumes memory and those closed over variables are not garbage collected, if not handled properly it can lead to memory leaks

//Garbage Collector:

// It's a program in the browser or the JS engine which frees up the unutilized memory. JS is a high level Programming Language, in languages like C or C++ its upto developers on how to
//free memory, but in JS its handled by garbage Collector. Whenever there are unused variables the garbage collector frees them up.

// Relation b/w Garbage Collection and closures

// function a(){
//     var b =0;
//     var t =0;
//     function c(){
//         console.log(b); //b shows output as 0, but t is undefined as it was garbage collected
//     }
//     return c;
// }

// var z =a();
// z();



//function statement

// function a(){
//     console.log("aa");
// }

// //function expression
// var b= function (){
//     console.log("bb");
// }

//major difference b/w statement and expression is hoisting, we can call as before we define it, but for b undefined is stored instead of a function

// var b = function xyz(){
//     console.log("fn");
//     console.log(xyz);
// }

// b();

//xyz(); // will throw an error, as its not in outer scope but instead is created as a local variable

//Functions are First Class Citizens: It means functions are first class, ability to use function as values


// var count =0;

// document.getElementById('clickMe').addEventListener('click',function(){
//     console.log('clicked',++count);
// });

// function attachEventListeners(){
//     let count =0; 
//     document.getElementById('clickMe').addEventListener('click',function(){
//     console.log('clicked',++count);
// });
// }

// attachEventListeners();

// const arr= [5,1,3,2,6];
// let initialParameter = 0;

// const output= arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },initialParameter);

// console.log(output);

// Find max in array

//  const arr= [5,1,3,2,6];

//  const output = arr.reduce(function(max,curr){
//     if(curr > max){
//         max= curr;
//     }

//  }, 0);

//  console.log(output);
