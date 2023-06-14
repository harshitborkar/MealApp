let favm = document.getElementById("meal-detail");
// here we will write function when user click on detail button and we will fetch current meal saved in local storage and display it.
function rendermeal() {
  let mealList = document.querySelector("#meal-detail");
  if (mealList) mealList.innerHTML = "";
  let favmeal = localStorage.getItem("current_meal");
  console.log(favmeal);
  let savedmeal = JSON.parse(favmeal);
  if (savedmeal == null) {
    favmeal = [];
  } else {
    
      const avatar = savedmeal.meals[0].strMeal;
      const imgsrc = savedmeal.meals[0].strMealThumb;
      const plot = savedmeal.meals[0].strInstructions;
      favm.innerHTML += `
      <div class="container-meal">
      <div class="card cen" style="width: 25rem;">
      <img src="${imgsrc}" class="card-img-top  img-mov  " alt="...">
      <div class="card-body">
        <h5 class="card-title">Title: ${avatar}</h5>
        <p class="card-text">Plot: ${plot}</p>
      </div>
            
    </div>
    </div>`;

      
      
    
  }
}
rendermeal();