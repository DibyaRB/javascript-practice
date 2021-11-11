//polyfill for map

Array.prototype.myMap =function(callbackFn){
    var arr=[];

    for(var i=0;i<this.length;i++){
        arr.push(callbackFn(this[i],i,this));
    }
    return arr;s
}

//polyfill for filter

Array.prototype.myFilter = function(callbackFn){
    var arr=[];
    for(var i=0;i<this.length;i++){
        if(callbackFn(this,this[i],i,this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

//pollyfill for reduce

Array.prototype.myReduce= function(callbackFn, initialValue){
    var accumulator = initialValue;


for(var i=0;i<this.length;i++){
    if(accumulator){
        accumulator= callbackFn.call(undefined,accumulator,this[i]);
    }
    else{
        accumulator=this[i];
    }
    return accumulator;
}

}

//pollyfill for debounce and throttle

const debouncedFn = debounce(getData, 500);

const debounceMyfn =function(fn,delay){
    let context =this;
    let args=arguments;

    let timer;

    clearTimeout(timer);
    return function(){
        setTimeout(()=>{
            fn.apply(context,args);
        },delay)
    }
}

const throttle = function(fn,limit) {
    let flag =true;

    return function(){
        let context = this;
        args=arguments;
        if(flag){
            fn.apply(context,args);
            flag=false;
            setTimeout(()=>{
             flag= true;
            },limit);
        }
    }
}

//polyfill for bind method

Function.prototype.mybind= function(...args){
    let obj = this;
    params = args.slice(1);

    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}