/// Import ///
import RecipeCard from "./RecipeCard.js";
import MenuTagFilter from "./MenuTagFilter.js";

/// Class ///
export default class Search {
    constructor(data) {
        //console.log('search', data);

        /// DOM ///

        //this.button = document.getElementsByClassName("toto")[0];
        //this.button2 = document.getElementsByClassName("toto");

        this.cardSection = document.getElementsByClassName("recipes__section")[0];

        /// Data ///
        this.arrayAllRecipes = data;
        this.arrayFilteredRecipes = [];

        /// Mes function ///

        //this.creatTest = (e) => this._creatTest(e);
        //this._displayAllRecipeCard = (e) => this._displayAllRecipeCard(e);
        //console.log('displayAllRecipeCard', this._displayAllRecipeCard());
        //this.displayRecipeCard = (e) => this._displayRecipeCard(e);

        this._initDisplayRecipeCard(this.arrayAllRecipes);
        this._initDisplayTagFilter(this.arrayAllRecipes);
  
        /// Listener ///
        //this.bindEvent();


    };

    // bindEvent() {
    //     //initiliser tous les addEventListener ici
    //     // // Pour clic sur un unique button
    //     // // Vérification que le button existe
    //     // //
    //     // if (this.button) {
    //     //     this.button.addEventListener("click", this.creatTest(e));
    //     // }
    //     // // Pour clic sur button d'une liste = 
    //     // if (this.button2.length > 0) {
    //     //     for (const bouton2 of this.button2) {
    //     //         bouton2.addEventListener("click", console.log('Tarlatata'));
    //     //     }
    //     // }

    // };

    _initDisplayTagFilter(data) {
        new MenuTagFilter(data)
    };

    _initDisplayRecipeCard(data) {
        this._displayRecipeCard(data)
    };
    
    _displayRecipeCard(data) {
        // console.log('recipeCardData', data);
        let recipeCard = ""
        for (const recipe of data) {
            recipeCard += new RecipeCard(recipe).recipeCardContent
        }
        this.cardSection.innerHTML = recipeCard
    };


};