function validate(arr, val){
   try{

    if (!arr && !val) throw new ReferenceError('Invalid Parameters');
    
    if (typeof arr !== 'object') throw new TypeError('Array must be of object type');
    
    if (typeof val !== 'number') throw new TypeError('Num must be of number type');
    
    if (arr.length !== val) throw new RangeError('Invalid size!');

    return arr;

   }

   catch(e) {

        if(e instanceof ReferenceError){
            console.log("This error is a ReferenceError")
            console.log(e.message)
            console.log(e.name)
            console.log(e.stack)
        }  
        
        else if(e instanceof TypeError){
            console.log("This error is a TypeError")
            console.log(e.message)
        }  

        else if(e instanceof RangeError){
            console.log("This error is a RangeError")
            console.log(e.message)
        }    

        else {
            console.log ("Unexpected error type: " + e);
        }

    }

}

console.log(validate([1,2,3,4,5], 5));