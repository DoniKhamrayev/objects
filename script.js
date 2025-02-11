/////////////////////////////////task 1////////////////////////////////////////
const object1 = {
    name: "doni",
    age: 15,
    moreInfo: {
        city: "Samarkand",
        country: "Uzbekistan"
    }
};

console.log(object1);




const object2 = {
    name: "Andreww",
    age: 15,
    moreInfo: {
        city: "Ottava",
        country: "Canada"
    },
    
};

console.log(object2);


/////////////////////////////////task 2 ///////////////////////////////////////////
const newObject = { ...object1, ...object2 };
console.log(newObject);


/////////////////////////////////task 3 ///////////////////////////////////////////
const keys = Object.keys(newObject);
console.log(keys);

/////////////////////////////////task 4 ///////////////////////////////////////////
const values = Object.values(newObject);
console.log(values);



