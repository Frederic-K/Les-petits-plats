import Search from "./factory/Search.js";
import TestTagFilter from "./factory/TagFilter.js";

async function init() {
    const recipes = await getRecipesData()
    new Search(recipes);
    new TestTagFilter(recipes);
};

init();