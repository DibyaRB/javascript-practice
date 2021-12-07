// DOM access is not available in workers, hence we use self instead of window.
// The reason why it is not available is because DOM API is not thread safe,and you are very likely to run into race conditions, 
// if you try to manipulate DOM

//So if you want to modify anything in DOM from the worker, you have to post a message back and do it in main script which is running in UI thread


addEventListener('message', ({data})=>{
    console.log('Main script sent', data);
    let count =0;
    if(data.action == 'countTo2Billion'){
        for(let i=0;i<2000000000;i++){
    count++;
}
    }
    postMessage({action:'countTo2Billion', status: 'done'}); // You can send objects as well, not just strings
})