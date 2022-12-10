// JavaScript for tp7

// function to load a file from the URL "fromFile" into the object indentified by "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}

//new recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#header h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#header").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }
 
}
  
  LemonPankoCrustedSalmon = new Recipe(
    "Lemon Panko Crusted Salmon", 
    "Samuel Tan", 
    "images/salmon.jpg", 
    "ingredients.html", 
    "equipment.html", 
    "directions.html"
  );

  Tiramisu = new Recipe(
    "Classic Tiramisu", 
    "Alison Roman", 
    "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-master768.jpg?w=1280&q=75", 
    "tiramisu-ingredients.html", 
    "tiramisu-equipment.html", 
    "tiramisu-directions.html"
  );

  Burger = new Recipe(
    "Smashed Avocado-Chicken Burgers", 
    "Yasmin Fahr", 
    "https://static01.nyt.com/images/2022/04/18/dining/yf-chicken-avocado-burgers/merlin_205536372_0d3102af-f082-4900-bfd2-176105d53a42-articleLarge.jpg?w=1280&q=75", 
    "burger-ingredients.html", 
    "burger-equipment.html", 
    "burger-directions.html"
  );

  Pesto = new Recipe(
    "Pesto Pasta",
    "John Doe",
    "images/pesto.jpg",
    "pesto-ingredients.html",
    "pesto-directions.html"
  );

  Reuben = new Recipe(
    "Reuben Sandwich",
    "Colette G.",
    "images/reuben.jpg",
    "reuben-ingredients.html",
    "reuben-directions.html"
  );

  Tomato = new Recipe(
    "Tomato Soup",
    "Charlotte",
    "images/tomato.jpg",
    "tomato-ingredients.html",
    "tomato-directions.html"
  );

  Chicken = new Recipe(
    "Chicken Salad",
    "Jackie M.",
    "images/chicken.jpg",
    "chicken-ingredients.html",
    "chicken-directions.html"
  );
 
window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    LemonPankoCrustedSalmon.displayRecipe();
  }
  document.querySelector("#secondRecipe").onclick = function() {
    Tiramisu.displayRecipe();
  }
  document.querySelector("#thirdRecipe").onclick = function() {
    Burger.displayRecipe();
  }
  document.querySelector("#fourthRecipe").onclick = function() {
    Pesto.displayRecipe();
  }
  document.querySelector("#fifthRecipe").onclick = function() {
    Reuben.displayRecipe();
  }
  document.querySelector("#sixthRecipe").onclick = function() {
    Tomato.displayRecipe();
  }
  document.querySelector("#seventhRecipe").onclick = function() {
    Chicken.displayRecipe();
  }

}

// end window.onload