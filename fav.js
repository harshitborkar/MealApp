let favm = document.getElementById("fav_meal");
// here we will write function when user click on favourite button and we will fetch favmeal by id saved in local storage and display it.
function rendermeal() {
  let mealList = document.querySelector("#fav_meal");
  if (mealList) mealList.innerHTML = "";
  let favmeal = localStorage.getItem("favmeal");

  let savedmeal = JSON.parse(favmeal);
  if (savedmeal == null) {
    favmeal = [];
  } else {
    savedmeal.forEach(function (el) {
      const avatar = el.meals[0].strMeal;
      const imgsrc = el.meals[0].strMealThumb;

      favm.innerHTML += ` 
   <ul>
    <li>
    <div class="card-body">
    <h5 class="card-title">${avatar}</h5>
    <img src="${imgsrc}"  class="img-mov"  >
    <button class="btn btn-primary" id="unfav">Unfavourite</button>
  </div>
  </li>
  <ul>`;
// here is the function for removing the meal from the favourite list
      let Unfavouritelist = document.querySelectorAll("#unfav");
      Unfavouritelist.forEach((unfav) => {
        unfav.addEventListener("click", function () {
          let favmeal = JSON.parse(localStorage.getItem("favmeal")) || [];
          let text = unfav.parentElement.innerText.split("\n")[0];
          
          let filteredFavmeal = favmeal.filter(
            (meal) => meal.meals[0].strMeal !== text
          );
          console.log("filtered array", filteredFavmeal);
          localStorage.setItem("favmeal", JSON.stringify(filteredFavmeal));
          rendermeal();
        });
      });
    });
  }
}
rendermeal();