  



// const btn = document.getElementById("btn");
const search = document.getElementById("search");
const suggestion = document.getElementById("match-list");
let currentmeal = {};
// this function will add the clicked meal into the favourite list in local staorage 
function favmeal(e) {
  
  if (e.target.innerHTML == "Favourite") {
    e.target.innerHTML = "Unfavourite";
    let favmeal = JSON.parse(localStorage.getItem("favmeal")) || [];
    let results = JSON.parse(localStorage.getItem("results")) || [];
    favmeal.push(results[Number(e.target.id)]);
    localStorage.setItem("favmeal", JSON.stringify(favmeal));
    console.log(favmeal);
    e.target.value = " ";
    // var div = this.parentElement;
    // div.style.display = "none";
  }
}

function mealDetails(event) {
  let results = JSON.parse(localStorage.getItem("results")) || [];
  let current_meal = results[Number(event.target.id)];
  localStorage.setItem("current_meal", JSON.stringify(current_meal));
  window.location.assign("meal.html");
}
// this will fetch the api of words typed by the user whenever it enters the words in input tag
search.addEventListener("input", (e) => {
  const fetchApi = async function () {
    //  await fetch(`https://www.omdbapi.com/?t=${e.target.value}&apikey=${access_token}`)
    // .then(response => response.json())
    // .then((data => {
    //   console.log(data);
    // data = JSON.parse();
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
    );
    const data = await response.json();
    console.log(data);
    //  Object.entries(data).forEach(v => {
    let results = JSON.parse(localStorage.getItem("results")) || [];
    results.push(data);
    localStorage.setItem("results", JSON.stringify(results));
    const avatar = data.meals[0].strMeal;
    const imgsrc = data.meals[0].strMealThumb        
    currentmeal = data;
    suggestion.innerHTML += `
          <div class="card-body">
        <h5 class="card-title">${avatar}</h5>
        <img src="${imgsrc}" class="img-mov" >
        <button class="btn btn-primary" id="${results.length - 1}" name=${JSON.stringify(
      data
    )} onclick="favmeal(event)">Favourite</button>
        <button class="btn btn-primary" id="${
          results.length - 1
        }" onclick=mealDetails(event)>Details</button>
      </div>`;

   
  };

  fetchApi();
});