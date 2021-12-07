const person ={
    first: 'Bear',
    last: 'McBearison'
}

const cleverPerson = new Proxy(person,{
    get: function(target,prop){
        if(!(prop in target)){
            prop.split('_').map(function (part){
                console.log(part);
                return target[part];
            }).join(' ');
        }

        return target[prop];
    }
});

console.log(cleverPerson.first_last);