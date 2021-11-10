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
 function x(){
     var i =1;
     for(var i=1;i<=5;i++){

        function close(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }
       

        close(i);


     }
     
     
 }

 x();










