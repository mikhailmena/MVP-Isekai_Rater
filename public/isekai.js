$.get("https://isekai-api.onrender.com/api/ratings", (data) => {
    console.log(data)
    
    for (let i =0; i < data.length; i++){
        $('#display').prepend(data[i].description)
    }
     //prepends data from get call to display ---- I need to make a for loop to display all of it
});

ratingObject = {
    orverlord: 0,
    SAO : 0,
    WMG : 0,
    Reincarnated : 0,
    inuyasha : 0,
    shieldHero: 0, 
    Konosuba : 0,
    Mushoku : 0,
    Saga : 0,
    Arifureta : 0
 }

const selectedRating = document.querySelectorAll('.rating'); //calls all elements with rating class

selectedRating.forEach(selectDiv => { //for each element with rating class
    selectDiv.addEventListener('change', event => { //add event listener
        ratingObject[`${event.target.id}`] = event.target.value
                ratingObject[event.target.id] = event.target.value 
                
            })
})



const formSub = document.querySelector('.form');


formSub.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formSub);
    let finalForm = Object.entries(ratingObject)
    const formInput = Object.fromEntries(finalForm);
    //  console.log(formSub)
    // console.log(ratingObject)
    // console.log(formData)
    // console.log(formInput)
    fetch('https://isekai-api.onrender.com/api/ratings', {method: 'POST', headers: {'Content-Type':'application/json'}
    ,body: JSON.stringify(formInput)}) //turns the form data into a string
    .then(response => {
    $('#display').append(formInput) //appends stringified form data to display div
    

})
})




// const pageData = document.querySelector('')
// fetch(' ', {method: 'POST',
//  headers: {'Content-Type':'application/json'}, body:JSON.stringify() }).then(response => {
//     //on submit, submit select input + div id to results div on bottom, push to database, and compare to my_ratings table

// })
