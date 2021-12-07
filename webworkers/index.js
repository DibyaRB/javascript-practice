// Web Workers

// Web Workers is implemented in all major browsers, and you can use them right now. Web workers provide you to
// create a multi threaded like enivronment in Javascript

const worker = new Worker('worker.js');

// Worker.js would be the file in which we are going to write our worker code, once we do that the browser behind the scenes would perform
// an http request, it will download and compile it, and start it as a different js file in a different thread

worker.addEventListener('message', ({data}) =>{
    if(data.action=== 'countTo2Billion'){
        console.log('We are done without blocking the main thread');
    }
    console.log('Worker sent ',data)
});



 const now= performance.now();

//So the obvious thing would be to move heavy computations to worker thread

// for(let i=0;i<2000000000;i++){
//     count++;
// }



worker.postMessage({type: 'cmd', action: 'countTo2Billion'});

console.log(performance.now()-now + "ms");

alert("Something on UI thread");

//worker.postMessage("hello there from main script!");