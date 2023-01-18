
// Fonction Fetch

async function getRecipesData() {
    const recipeData = await fetch("/data/recipes.json")
        .then(response => {
            if (response.ok) {
            return response.json()
            } else {
                console.log('Une erreur est survenue');
            }
        })
        .catch(err => console.log("error"))
    console.log('recipeData', recipeData);       
    return recipeData    
};

/*async function getRecipesData() {
    await fetch("/data/recipes.json")
        .then(response => {
            if (response.ok) {
            return response.json()
            } else {
                console.log('Une erreur est survenue');
            }
        })
        .then(response => {
            const recipesData = response
            console.log('recipesData', recipesData)          
        })
        .catch(err => {
            console.log("error")
        })
};*/

/*async function getRecipesData () {
    const recipesData = await fetch('/data/recipes.json')
      .then(function (response) {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Une erreur est survenue')
        }
      })
      .then(function (recipesData) {
        console.log('toto', recipesData);
        return recipesData
      })
      .catch(function (error) {
        console.log("Une erreur est survenue avec l'opération fetch")
      })
    return recipesData
  };*/
