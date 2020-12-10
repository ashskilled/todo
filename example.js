class Willie {
    constructor(){

    }

    //instance method 
    wave(){
        console.log("hello!"); 
    }

    //static methods 
    static silly(){
        console.log("jokes"); 
    }

}

me = new Willie();
otherWillie = new Willie(); 

me.wave(); //prints hello!
otherWillie.wave(); 

Willie.silly(); 

myObj = {
    example : "Object",
    with : "properties"
}; 

Object.entries(myObj); 