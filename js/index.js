import Search from "./factory/Search.js";
import TagFilterCopy from "./factory/TagFilter-copy.js";
import TagFilter from "./factory/TagFilter.js";

async function init() {
    const recipes = await getRecipesData()
    new Search(recipes);
    //new TagFilter(recipes);
    new TagFilterCopy(recipes);
};

init();