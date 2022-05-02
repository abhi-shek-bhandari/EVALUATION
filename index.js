// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector("masaiForm")
var userData = JSON.parse(localStorage.getItem("UserData"));
masaiForm.addEventListener("submit",function(event){
    event.preventDefault();

    var data={
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    localStorage.setItem("index",JSON.stringify(data))
    window.location.href = "index.html"

})