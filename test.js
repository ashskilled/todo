//declare a constant variable called mongoose
//set it equal to require the value of mongoose
//require is built in function for node.js that can translate it from other files
const mongoose = require('mongoose'); 

//access the conect methor if the mongoose object
//pass it the local host database
//and some options inside of another object
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});



//const var db
//set it equal to connection prop of the mongoose object
const db = mongoose.connection;

//but then we access the on and once methods of our connection property form our mongoose object 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");
    //schema
    const kittySchema = new mongoose.Schema({
        name : String
    });
    

    //
    kittySchema.methods.speak = function() {
        let greeting;
        if (this.name){
            greeting = "Meow name is " + this.name;
        } else {
            greeting = "I don't have a name";
        }
        console.log(greeting);
    }

    kittySchema.statics.play = function(){
        console.log("Fun!"); 
    }
    
    kittySchema.virtual("firstName").get(function(){
        //to get the first name out of hte string and return it 
        //["John", "Smith"]
        return this.FullName.join(' ')[0] 
        return this.name + "apala flaherty"; 
    });

    //model
    const Kitten = mongoose.model('Kitten', kittySchema);
    //documents 
    const silence = new Kitten ({name: "Silence"});
    console.log(silence.name);
    const fluffy = new Kitten({name : "Fluffy"});

    fluffy.speak();
    silence.speak();
    silence.fullName

    //save after creating/ updating
    fluffy.save(function(err, cat){
        if (err) return console.error(err);
        cat.speak();
    });
    silence.save(function(err, cat){
        if (err) return console.error(err);
        cat.speak();
    });
    //static method- attached directly to our model/class

    silence.find()
    Kitten.find(function(err, kittens){
        if (err) return console.error(err);
        console.log(kittens);
    })



});