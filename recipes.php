<?


$name = $_GET["recipeName"];

$list = $_GET["recipeList"];

if ($name == "Lemon Panko Crusted Salmon") {  
  if ($list == "ingredients") {
    include "ingredients.html";
    
  } elseif ($list == "equipment") {
    include "equipment.html";
    
  } elseif ($list == "directions") {
    include "directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Classic Tiramisu") {
  if ($list == "ingredients") {
    include "tiramisu-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "tiramisu-equipment.html";
    
  } elseif ($list == "directions") {
    include "tiramisu-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Smashed Avocado-Chicken Burgers") {
  if ($list == "ingredients") {
    include "burger-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "burger-equipment.html";
    
  } elseif ($list == "directions") {
    include "burger-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Pesto Pasta") {
  if ($list == "ingredients") {
    include "pesto-ingredients.html";
    
  } elseif ($list == "directions") {
    include "pesto-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Reuben Sandwich") {
  if ($list == "ingredients") {
    include "reuben-ingredients.html";
    
  } elseif ($list == "directions") {
    include "reuben-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Tomato Soup") {
  if ($list == "ingredients") {
    include "tomato-ingredients.html";
    
  } elseif ($list == "directions") {
    include "tomato-directions.html";
    
  } else {
    echo "1";
     
  } 
  
} elseif ($name == "Chicken Salad") {
  if ($list == "ingredients") {
    include "chicken-ingredients.html";
    
  } elseif ($list == "directions") {
    include "chicken-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Sloppy Joes") {
  if ($list == "ingredients") {
    include "sloppy-ingredients.html";
    
  } elseif ($list == "directions") {
    include "sloppy-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Cobb Salad") {
  if ($list == "ingredients") {
    include "cobb-ingredients.html";
    
  } elseif ($list == "directions") {
    include "cobb-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Apple Squares") {
  if ($list == "ingredients") {
    include "apple-ingredients.html";
    
  } elseif ($list == "directions") {
    include "apple-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Oyakodon") {
  if ($list == "ingredients") {
    include "oyakodon-ingredients.html";
    
  } elseif ($list == "directions") {
    include "oyakodon-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Maple Salmon") {
  if ($list == "ingredients") {
    include "maple-ingredients.html";
    
  } elseif ($list == "directions") {
    include "maple-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Baked Tilapia") {
  if ($list == "ingredients") {
    include "tilapia-ingredients.html";
    
  } elseif ($list == "directions") {
    include "tilapia-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Empanadas") {
  if ($list == "ingredients") {
    include "empanadas-ingredients.html";
    
  } elseif ($list == "directions") {
    include "empanadas-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Potatoes") {
  if ($list == "ingredients") {
    include "potatoes-ingredients.html";
    
  } elseif ($list == "directions") {
    include "potatoes-directions.html";
    
  } else {
    echo "1";
     
  }
 
} else {
  
  echo "0";
  
}




























