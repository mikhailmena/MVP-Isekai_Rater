$.get("https://express-api-7mpi.onrender.com/api/memo", (data) => {
    console.log(data)
    
    // for (let i =0; i < data.length; i++){
    //     $('#display').prepend(data[i].description)
    // }
     //prepends data from get call to display ---- I need to make a for loop to display all of it
});