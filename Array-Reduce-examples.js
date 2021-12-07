//console.log("ss");

const people =[
    {id: "1", name: "Leigh", age: 35},
    {id: "2", name: "Jenny", age: 30},
    {id: "3", name: "Heather", age: 28}
];

let result;

// //count the number of people in this array

result = people.reduce((acc,currPerson)=>{
    acc= acc+1;
    return acc;
},0);

//Sum of all the ages

result = people.reduce((acc, currPerson)=>{
    acc= acc+ currPerson.age;
    return acc;
},0);

// Use reduce similar to map

result = people.reduce((acc,person)=>{
    acc.push(person.name);
    return acc;
},[]);

// //or

result = people.reduce((acc, person)=>[...acc,person.name],[]);

//convert to id => person lookup (dictionary)

result = people.reduce((acc, person)=>{
    acc[person.id]= person.name;
    return acc;
},{})

//max age

result = people.reduce((acc, person)=>{
        if(person.age>acc){
            return person.age;  
        }
        else return acc;
},0);

//find by Name

result = people.reduce((acc, person)=>{
        if(acc!==null){
            return acc;
        }
        if(person.name=== "Leigh") return person;
        return null;
}, null);

//all over 18

result = people.reduce((acc,person)=>{
    if(!acc) return false;
    return person.age > 18;
},true);

// any over 18

result = people.reduce((acc, person)=>{
    if(acc) return true;
    return person.age>18;
}, false);   





const orders = [
    {id: "1", status: "pending"},
    {id: "2", status: "pending"},
    {id: "3", status: "cancelled"},
    {id: "4", status: "shipped"}
];

result = orders.reduce((acc,order)=>{
    return {...acc,[order.status] : (acc[order.status] || 0) +1};
},{});


const folders=[
    "index.js",
    ["flatten.js","map.js"],
    ["any.js" , ["all.js","count.js"]]

];

function flatten(acc, item){
    if(Array.isArray(item)){
        return [...acc,...item.reduce(flatten,[])];
    }
    return [...acc, item];
}

result = folders.reduce(flatten,[]);




console.log(result);