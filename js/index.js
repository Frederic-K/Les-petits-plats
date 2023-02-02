import Search from "./factory/Search.js";
//import TagFilterCopy from "./factory/MenuTagFilter.js";
//import RecipeCard from "./factory/RecipeCard.js";
//import TagFilter from "./factory/TagFilter.js";

async function init() {
    const recipes = await getRecipesData()
    new Search(recipes);
    //new TagFilter(recipes);
    //new TagFilterCopy(recipes);
    //new RecipeCard(recipes);
};

init();