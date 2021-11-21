//  https://www.youtube.com/watch?v=WyxU9MzUwOw&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=4


//determine if a function received the same number of arguments that it expects

function f(a,b){
    if(arguments.length=== f.length){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

f(1);
f(1,2);
f(1,2,3);