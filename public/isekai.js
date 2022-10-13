var ratingScore = 0
alert("Rate these Isekai Anime from (1-10) and check to see if they match Marc's Ratings!")

function hideDiv(div) {
    div.hide()
}
hideDiv($("#trueRating"))
$("#MarcRating").click(function(){
    $("#trueRating").toggle("slow")

});

const url = 'https://isekai-api.onrender.com/api/ratings'
$.get('https://isekai-api.onrender.com/api/ratings', (data) => { //DOT NOT CHANGE!!!!!!!!!!!!!!
    console.log(data)    
    var Mytable = document.getElementById('my_rating_table'); //creates table based on database
    
    for (var i = 0; i < data.length; i++){
        var row = Mytable.insertRow(-1)
        var nameCell = row.insertCell(0)
        var ratingCell = row.insertCell(1)
        nameCell.innerText = data[i].isekainame
        ratingCell.innerHTML = data[i].my_rating 
    }
    
});
 
ratingObject = {
    Overlord: 0,
    SAO : 0,
    WMG : 0,
    Reincarnated : 0,
    Inuyasha : 0,
    ShieldHero: 0, 
    Konosuba : 0,
    Mushoku : 0,
    Saga : 0,
    Arifureta : 0
 }
 marcRatingObject = {
    Overlord: 8,
    SAO : 5,
    WMG : 10,
    Reincarnated : 2,
    Inuyasha : 9,
    ShieldHero: 4, 
    Konosuba : 7,
    Mushoku : 1,
    Saga : 6,
    Arifureta : 3
 }
 let submitButton = document.getElementById('submit')
 submitButton.addEventListener('click', createTable);

 var Mytable = document.getElementById('user_rating_table');
 function createTable(){
    for (var j = 0; j < 10; j++){
        var urow = Mytable.insertRow(-1)
        var unameCell = urow.insertCell(0)
        var uratingCell = urow.insertCell(1)
        unameCell.innerText = Object.keys(ratingObject)[j]
        uratingCell.innerHTML = Object.values(ratingObject)[j] 
       
    }
    
 
//  if(Object.values(ratingObject)[j] == 0){
//             alert('Uh Oh, you missed a rating')
// }

}
let scoreButton = document.getElementById('scoreBut');
scoreButton.addEventListener('click',scoreFunc);
const scoreDis = document.getElementById('scoreDisplay')
function scoreFunc(){
    for (let h = 0; h < 10; h++){
        
        if (Object.values(ratingObject)[h] = Object.values(marcRatingObject)[h] ){
            ratingScore++ 
        }
    }
$("#idDisplay").append(ratingScore)
    console.log(ratingScore)
}


const selectedRating = document.querySelectorAll('.rating'); //calls all elements with rating class
selectedRating.forEach(selectDiv => { //for each element with rating class
    var Utable = document.getElementById('user_rating_table');
    selectDiv.addEventListener('change', event => { //add event listener
        ratingObject[`${event.target.id}`] = event.target.value //updates the ratingOBject values
         
            })
})




let saveDiv = document.getElementById('savedJSON')//define saveDiv

let savebutton = document.getElementById('save');
savebutton.addEventListener('click', event => {
    event.preventDefault();
    const objectData = JSON.stringify(ratingObject);
    console.log(objectData)
    //fetch from page
    fetch('https://isekai-api.onrender.com/api/ratings', {method: 'POST',
    
    body: objectData}) //turns the form data into a string
    .then(response => {
        
        saveDiv.innerText = objectData //appends stringified object to display div
        console.log(response)

    })
})

let historyBut = document.getElementById('showHistory')
historyBut.addEventListener('click', event => {
    $.get('https://isekai-api.onrender.com/api/user/ratings', (historyData) => {
        console.log(historyData)
        var Histable = document.getElementById('HistoryTable'); //creates table based on database
    
        for (var j = 0; j < historyData.length; j++){
            var hrow = Histable.insertRow(-1)
            var hnameCell = hrow.insertCell(0)
            var hratingCell = hrow.insertCell(1)
            hnameCell.innerText = historyData[j].isekainame
            hratingCell.innerHTML = historyData[j].user_rating 
        }
})
});







// const pageData = document.querySelector('')
// fetch(' ', {method: 'POST',
//  headers: {'Content-Type':'application/json'}, body:JSON.stringify() }).then(response => {
//     //on submit, submit select input + div id to results div on bottom, push to database, and compare to my_ratings table

// })


