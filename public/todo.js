async function getToDoList(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/items", requestOptions); 
    return response; 

}

function clickButton(){
    getToDoList().then(function(response){
        if(response.status === 200){
            document.body.append(response); 
            console.log("We made it!"); 
    }
    }).catch(function(err){
        console.log(err); 
    }); 
}