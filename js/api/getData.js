
// Fonction Fetch

async function getData() {
    fetch("/data/recipes.json")
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
            return recipesData            
        })
        .catch(err => console.log("error"))
}; 

/*async function getData() {
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
}; */
