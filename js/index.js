import Search from "./factory/Search.js";
async function init() {
    const recipes = await getRecipesData()
    new Search(recipes);
};

init();