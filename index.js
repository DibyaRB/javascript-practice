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

//What is prototype?
//Whenever we create an object, js engine automatically puts hidden properties into and object and attaches it to your object, and that is how you get access to those properties and methods.

// let object ={
//     name:"Ak",
//     city: "Dehradun"
// };

// let object2={
//     name: "Dibya"
// };

// object2.__proto__=object;

// delete object2.city;

// console.log(object2.name);

//polyfill for bind method

// Function.prototype.mybind= function(...args){
//     let obj = this;
//     params = args.slice(1);

//     return function(...args2){
//         obj.apply(args[0],[...params,...args2]);
//     }
// }

// let printName=function(hometown,state){
//     console.log(this.fname + " " +this.lname + " " + hometown );
// }

// let name={
//     fname:"dibya",
//     lname:"Ranjan"
// };

// let printMyName= printName.mybind(name,["bpd","odisha"]);
// printMyName();

// Function.prototype.mybind= function(...args){
//     let obj=this;
//     let params= args.slice(1);
//     return function(...args2){
//         obj.apply(args[0],[...params,...args2]);
//     }
// }


// function getData() {
//     console.log("Fetching Data...");
// }


// const debounce = function (fn, delay) {
//     let context = this;
//     args = arguments;
//     let timer;
//     clearTimeout(timer);
//     return function () {
//         timer = setTimeout(() => {
//           fn.apply(context,arguments);
//         }, delay);

//     }
// }

// const debouncedFn = debounce(getData, 500);

// const debounceMyfn =function(fn,delay){
//     let context =this;
//     let args=arguments;

//     let timer;

//     clearTimeout(timer);
//     return function(){
//         setTimeout(()=>{
//             fn.apply(context,args);
//         },delay)
//     }
// }

// const throttle = function(fn,limit) {
//     let flag =true;

//     return function(){
//         let context = this;
//         args=arguments;
//         if(flag){
//             fn.apply(context,args);
//             flag=false;
//             setTimeout(()=>{
//              flag= true;
//             },limit);
//         }
//     }
// }


// const throttle =function(fn,limit){
//     let flag = true;

//     return function(){
//         let context = this;
//         let args= arguments;
//         if(flag){
//             fn.apply(context,args);
//             flag= false;
//             setTimeout(()=>{
//                 flag= true;
//             },limit);
//         }
//     }

// }

let promise1 = new Promise(function(resolve,reject){

    setTimeout(()=>{
        resolve('resolved1')
    },1000);
});


let promise2 = new Promise(function(resolve,reject){

    setTimeout(()=>{
        resolve('resolved2')
    },1000);
});


let promise3 = new Promise(function(resolve,reject){

    setTimeout(()=>{
        resolve('resolved3')
    },1000);
});


let promise4 = new Promise(function(resolve,reject){

    setTimeout(()=>{
        resolve('resolved5')
    },2000);
});


let promise5 = new Promise(function(resolve,reject){

    setTimeout(()=>{
        resolve('resolved4')
    },1000);
});

let promiseArray= [promise1,promise2,promise3,promise4,promise5];

Promise.myAll= function(promiseArr){
    let results=[];

    let errResp=[];

    return new Promise(function(resolve,reject){
            promiseArr.forEach(async (p,index)=>{

                try{
                    let resp = await p;
                    results.push(resp);
                     if(index==results.length-1){
                        if(errResp.length){
                            reject(errResp);
                        }
                        else
                        resolve(results);
                    }
                }
                catch(err){
                    errResp.push(err);
                }
               
            });
    });
}

Promise.myAll(promiseArray).then(function(response){
    console.log(response);
});

//Code for flattening an array

const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

//Code for Prototypal Inheritance using classes

//prototypal inheritance

function Bike(name){
    this.name= name;
}

Bike.prototype.displayName =function(){
    console.log(this.name);
}

var b1= new Bike("Yamaha");
b1.displayName();

class Bike{
    constructor(name){
        this.name=name;
    }
    displayName(){
        console.log(this.name);
    }
}

var b1= new Bike("Yamaha");
b1.displayName();


// let sumf= sum(1)(2)(3)(4)(5)(); // output : 6
// console.log(sumf);

// function z(){
//     let a=10;
//     return function y(){
//         console.log(a);
//     }
// }


function myCalc(val){
    
  
        this.value= val;


}

myCalc.prototype.lakhs=function(l){
    this.value=this.value + (l* 100000);
        return this;
}

myCalc.prototype.thousand=function(t){
    this.value=this.value + (t* 1000);
        return this;
}

myCalc.prototype.hundred=function(h){
    this.value=this.value + (h* 100);
        return this;
}

myCalc.prototype.done=function(){
    return this.value;
}

var b= new myCalc(5);
console.log(b.lakhs(2).done());



// function getData(){
//     //this function is basically a heavy function, and maybe calls an api
//     console.log("invoked");
// }
// // document.getElementById('inp').addEventListener('keyup',()=>{
// //     getData();
// // });

// const debounceMyFn= (fn,limit) =>{

//     let timer;
//     return function(){

//         let context= this;
//         let args= arguments;
//         clearTimeout(timer);
//         timer= setTimeout(()=>{
//             fn.apply(context,args);
//         },limit);
//     }
// }

// let debouncedFn= debounceMyFn(getData,500);

// // document.getElementById('inp').addEventListener('keyup', debouncedFn);

// const throttleMyFn= (fn,limit)=>{

//     let inThrottle = false;

//     return function(){
//         let context= this;
//         let args= arguments;

//         if(!inThrottle){
//             fn.apply(context,args);
//             inThrottle = true;
//             setTimeout(()=>{
//                 inThrottle= false;
//             },limit);
//         }
//     }
// }

// let throttledFn= throttleMyFn(getData,1000);
// document.getElementById('inp').addEventListener('keyup', throttledFn);

//Implement GroupBy Function



// let obj1={
//     key1:'a',
//     key2:'b'
// };

// let obj2={
//     key1:'k',
//     key2:'b'
// };

// let obj3={
//     key1:'b',
//     key2:'c'
// };

// let obj4 = {
//     key1:'b',
//     key2:'d'
// };

// // returned obj ={
// //     a:[obj1],
// //     k:[obj2],
// //     b:[obj3,obj4]
// // }



// // returned object = {
// //     a:an array of object 1 and object 2,
// //     b: array of object3
// // }


// // return an object, key will be the key I pass, and value is an array of objects which has this key
// // array of obj and should be grouped by the key i pass

// let arr1=[obj1,obj2,obj3,obj4];

// function groupBy(arr,keyStr){
//     let returnObj={

//     };
//     //returnObj[keyStr]=[];
//     let keyArr=[];
//     let map={

//     };
//     for(let i=0;i<arr.length;i++){
//         // if(arr[i].hasOwnProperty(keyStr)){
//         //             returnObj[keyStr].push(arr[i]);
//         // }
//         if(!map[arr[i][keyStr]])
//         {
//             keyArr.push(arr[i][keyStr]);
//             map[arr[i][keyStr]]= true;
//         }
     

//     }

//     console.log(keyArr);

//     for( let i=0;i<keyArr.length;i++){

//         returnObj[keyArr[i]]=[];

//         let val= keyArr[i];
        
//         for( let j=0;j<arr.length;j++){
//             if(arr[j][keyStr]=== val){
//                 returnObj[keyArr].push(arr[j]);
//             }
//         }
//     }

//     return returnObj;


// }

// let result= groupBy(arr1,'key1');

// console.log(result);


// Given 2 sorted arrays nums1 and nums2 of size m and n 
// return the median of the two sorted arrays

// Example 1:
// Input: nums1 = [1,3] , nums2 = [2]
// Output: 2
// Explanation merged array = [1,2,3] , median : 2

// Example2:
// Input: nums1=[1,2], nums2 = [3,4]
// Output: 2.5
// Explanation= merged array = [1,2,3,4]. median = (2+3)/2 = 2.5

// function getMedian(nums1,nums2){

//     let i=0;
//     let j=0;
//     const res=[];

//     while(i<nums1.length &&j<nums2.length){
//         if(nums1[i]<nums2[j]){
//             res.push(nums1[i]);
//             i++;
//         }
//         else if(nums1[i]>nums2[j]){
//             res.push(nums2[j]);
//             j++;
//         }
//         else
//         {
//             res.push(nums1[i]);
//             res.push(nums2[j]);
//             i++;
//             j++;
//         }
//     }

//     while(i<nums1.length){
//         res.push(nums1[i]);
//         i++;
//     }

//     while(j<nums2.length){
//         res.push(nums2[j]);
//         j++;
//     }

//     console.log(res);

//     if(res.length%2){
//         return res[Math.floor(res.length/2)];
//     }
//     else{
//         return (res[ (res.length)/2 -1 ] + res[(res.length/2)] )/2;
//     }
// }

// let arr1=[1,2];
// let arr2=[3,4];



// console.log(getMedian(arr1,arr2));

// arr1=[1,3];
// arr2=[2];

// console.log(getMedian(arr1,arr2));

// function getData(){
//     console.log("invoked getData()");
// }

// const debounceMyFn = (fn,limit)=>{

//     let timer;
//     return function(){
//         let context= this;
//         let args= arguments;
//         clearTimeout(timer);

//         timer= setTimeout(()=>{
//             fn.apply(context,args);
//         },limit);

//     }
// }

// const debouncedFn = debounceMyFn(getData, 500);

// document.getElementById('inp').addEventListener('keyup',debouncedFn);

// let arr=[1,2,3,4,5];

// function callbackFn(item)
// {

//     //even odd logic;

//     return (item%2 && item>2);

// }


// // let arr2=arr.reduce(function(acc,item){
// //     if(isEven(item)){
// //         acc.push(item);
// //     }
// //     return acc;
// // },[]);

// // console.log(arr2);

// Array.prototype.filterUsingReduce = function(callbackFn){
//     let arr=this;

//     let res= arr.reduce(function(acc,item){
//         if(callbackFn(item)){
//             acc.push(item);
//         }
//         return acc;
//     },[]);

//     return res;
// }

// console.log(arr.filterUsingReduce(callbackFn));

let arr= [1,2,3,4,5];

function delay(delayinSec){
    return new Promise(function(res,rej){
        setTimeout(()=>{
            // console.log(element);
            res();
    
        },1000*delayinSec)
    });
    
}

async function doSomething(){
    for(let i=1;i<=arr.length;i++){
        //    console.log(i);
           await delay(2);
           console.log(i);
        }
} 

doSomething();



// arr.forEach(async (elem,index)=>{
//         await delay(5);
//         console.log(index);
// })
