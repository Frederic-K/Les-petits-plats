/* eslint-disable require-jsdoc, max-len*/
// / Import ///
import RecipeCard from './RecipeCard.js';

// / Class ///
export default class Search {
  constructor(data) {
    // / DOM ///
    this.mainSearchBarFilter = document.getElementsByClassName('main__searchbar--input')[0];
    this.mainSearchBarFilterBtn = document.getElementsByClassName('main__searchbar--icon')[0];

    this.recipeNotfoundMsg = document.getElementsByClassName('search__message')[0];

    this.advanceSearchBarFilters = document.querySelectorAll('.filter__header--input');

    this.filterIngredients = document.getElementById('filterIngredients');
    this.filterAppliances = document.getElementById('filterAppliances');
    this.filterUstensils = document.getElementById('filterUstensils');
    this.displayFilterMenuBtns = document.querySelectorAll('.filter__header--chevronDown');
    this.hideFilterMenuBtns = document.querySelectorAll('.filter__header--chevronUp');

    this.tagFilterParking = document.getElementsByClassName('tag__parking')[0];
    this.ingredientsFilterList = document.getElementsByClassName('tag__filter--list')[0];
    this.appliancesFilterList = document.getElementsByClassName('tag__filter--list')[1];
    this.ustensilsFilterList = document.getElementsByClassName('tag__filter--list')[2];

    this.searchMessage = document.getElementsByClassName('search__message')[0];

    this.cardSection = document.getElementsByClassName('recipes__section')[0];

    // / Data ///
    this.arrayAllRecipes = data;
    this.arrayRecipes = [];
    this.arrayActiveFilters = [];
    this.arrayIngredients = [];
    this.arrayAllIngredients = [];
    this.arrayAppliances = [];
    this.arrayAllAppliances = [];
    this.arrayUstensils = [];
    this.arrayAllUstensils = [];
    this.arrayFilteredRecipes = [];
    this.mainSearchInput = [];
    this.arrayMainSearchInputs = [];
    this.historyArrayActiveFilters = [];
    this.historySearch = '';


    // / Function ///
    // / Show all recipes when page loads ///
    this._initDisplay();

    // / Searchbar ///
    this.processChangeMain = this._debounce(() => this._mainSearch());
    this.processChangeAdvance = this._debounce(() => this._advanceSearch());


    // / Listener ///
    this.bindEvent();
  };

  bindEvent() {
    // / Set listener for searchbar ///
    if (this.mainSearchBarFilter !== 0) {
      this.mainSearchBarFilter.addEventListener('keyup', this.processChangeMain);
    }

    if (this.advanceSearchBarFilters.length > 0) {
      for (const advanceSearchBarFilter of this.advanceSearchBarFilters) {
        advanceSearchBarFilter.addEventListener('keyup', this.processChangeAdvance);
      }
    }

    // / Set listener for dropdown tag menu ///
    // / Show dropdown menu ///
    if (this.displayFilterMenuBtns.length > 0) {
      for (const displayFilterMenuBtn of this.displayFilterMenuBtns) {
        displayFilterMenuBtn.addEventListener('click', (e) => {
          const displayMenuBtn = e.target.parentElement.id;
          if (displayMenuBtn === 'displayIndgredientsBtn') {
            this._switchListFilter('ingredients', 'display');
          } else if (displayMenuBtn === 'displayAppliancesBtn') {
            this._switchListFilter('appliances', 'display');
          } else if (displayMenuBtn === 'displayUstensilsBtn') {
            this._switchListFilter('ustensils', 'display');
          }
        });
      }
    }

    // / Hide dropdown menu ///
    if (this.hideFilterMenuBtns.length > 0) {
      for (const hideFilterMenuBtn of this.hideFilterMenuBtns) {
        hideFilterMenuBtn.addEventListener('click', (e) => {
          const hideFilterMenuBtn = e.target.parentElement.id;
          if (hideFilterMenuBtn === 'hideIngredientsBtn') {
            this._switchListFilter('ingredients', 'hide');
          } else if (hideFilterMenuBtn === 'hideAppliancesBtn') {
            this._switchListFilter('appliances', 'hide');
          } else if (hideFilterMenuBtn === 'hideUstensilsBtn') {
            this._switchListFilter('ustensils', 'hide');
          }
        });
      }
    }
  };

  // / Show all recipes ///
  _initDisplay() {
    this.arrayRecipes = this.arrayAllRecipes;
    this.arrayFilteredRecipes = this.arrayAllRecipes;
    this._displayRecipeCard();
    this._setIngredientsFilterList();
    this._setAppliancesFilterList();
    this._setUstensilsFilterList();
  };

  // / Show recipe card ///
  _displayRecipeCard() {
    let recipeCard = '';
    for (const recipe of this.arrayFilteredRecipes) {
      recipeCard += new RecipeCard(recipe).recipeCardContent;
    }
    this.cardSection.innerHTML = recipeCard;
  };

  // / Capitalized first letter of a word ///
  _setUpperCaseFirstChar(string) {
    return string && string[0].toUpperCase() + string.slice(1);
  };


  // / Generate ingredients, appliances nd ustensils array ///
  // / https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#remove_duplicate_elements_from_the_array

  _setIngredientsFilterList() {
    this.arrayAllIngredients = [];
    for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
      for (let x=0; x < this.arrayFilteredRecipes[i].ingredients.length; x++) {
        const ingredient = this.arrayFilteredRecipes[i].ingredients[x].ingredient;
        this.arrayAllIngredients.push(ingredient.toLowerCase());
      }
    }
    this.arrayIngredients = new Set(this.arrayAllIngredients.sort());
  };

  _setAppliancesFilterList() {
    this.arrayAllAppliances = [];
    for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
      const appliance = this.arrayFilteredRecipes[i].appliance;
      this.arrayAllAppliances.push(appliance.toLowerCase());
    }
    this.arrayAppliances = new Set(this.arrayAllAppliances.sort());
  };

  _setUstensilsFilterList() {
    this.arrayAllUstensils = [];
    for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
      for (let x=0; x < this.arrayFilteredRecipes[i].ustensils.length; x++) {
        const ustensil = this.arrayFilteredRecipes[i].ustensils[x];
        this.arrayAllUstensils.push(ustensil.toLowerCase());
      }
    }
    this.arrayUstensils = new Set(this.arrayAllUstensils.sort());
  };

  // / Show or hide dropdownmenu ///
  _switchListFilter(filter, task) {
    switch (filter) {
      case 'ingredients':
        if (task === 'display') {
          this.filterIngredients.classList.add('active', 'width-large');
          this.filterIngredients.classList.remove('width-small');
          this.filterAppliances.classList.remove('active');
          this.filterAppliances.classList.add('width-small');
          this.filterUstensils.classList.remove('active');
          this.filterUstensils.classList.add('width-small');
          this.advanceSearchBarFilters[1].value = '';
          this.advanceSearchBarFilters[2].value = '';
          this._displayFilterList(this.arrayIngredients);
        } else if (task === 'hide') {
          this.filterIngredients.classList.remove('active', 'width-large');
          this.filterIngredients.classList.add('width-small');
          this.advanceSearchBarFilters[0].value = '';
        }
        break;
      case 'appliances':
        if (task === 'display') {
          this.filterAppliances.classList.add('active', 'width-large');
          this.filterAppliances.classList.remove('width-small');
          this.filterIngredients.classList.remove('active');
          this.filterIngredients.classList.add('width-small');
          this.filterUstensils.classList.remove('active');
          this.filterUstensils.classList.add('width-small');
          this.advanceSearchBarFilters[0].value = '';
          this.advanceSearchBarFilters[2].value = '';
          this._displayFilterList(this.arrayAppliances);
        } else if (task === 'hide') {
          this.filterAppliances.classList.remove('active', 'width-large');
          this.filterAppliances.classList.add('width-small');
          this.advanceSearchBarFilters[1].value = '';
        }
        break;
      case 'ustensils':
        if (task === 'display') {
          this.filterUstensils.classList.add('active', 'width-large');
          this.filterUstensils.classList.remove('width-small');
          this.filterIngredients.classList.remove('active');
          this.filterIngredients.classList.add('width-small');
          this.filterAppliances.classList.remove('active');
          this.filterAppliances.classList.add('width-small');
          this.advanceSearchBarFilters[0].value = '';
          this.advanceSearchBarFilters[1].value = '';
          this._displayFilterList(this.arrayUstensils);
        } else if (task === 'hide') {
          this.filterUstensils.classList.remove('active', 'width-large');
          this.filterUstensils.classList.add('width-small');
          this.advanceSearchBarFilters[2].value = '';
        }
        break;
    }
  };

  // / Show dropdown menu content ///
  _displayFilterList(data) {
    if (data === this.arrayIngredients) {
      this.ingredientsFilterList.innerHTML = '';
      for (const ingredient of data) {
        this.ingredientFilterListItem = document.createElement('li');
        this.ingredientFilterListItem.classList.add('itemFilter', 'ingredientFilter');
        this.ingredientFilterListItem.setAttribute('data-filtertype', 'filterIngredient');
        this.ingredientFilterListItem.textContent = this._setUpperCaseFirstChar(ingredient);
        this.ingredientsFilterList.appendChild(this.ingredientFilterListItem);
        this._removeDropdownFilter('ingredients');
        this.ingredientFilterListItem.addEventListener('click', (e) => {
          this._switchListFilter('ingredients', 'hide');
          this._displaySelectedFilter(e);
        });
      }
    } else if (data === this.arrayAppliances) {
      this.appliancesFilterList.innerHTML = '';
      for (const appliance of data) {
        this.applianceFilterListitem = document.createElement('li');
        this.applianceFilterListitem.classList.add('itemFilter', 'applianceFilter');
        this.applianceFilterListitem.setAttribute('data-filtertype', 'filterAppliance');
        this.applianceFilterListitem.textContent = this._setUpperCaseFirstChar(appliance);
        this.appliancesFilterList.appendChild(this.applianceFilterListitem);
        this._removeDropdownFilter('appliances');
        this.applianceFilterListitem.addEventListener('click', (e) => {
          this._switchListFilter('appliances', 'hide');
          this._displaySelectedFilter(e);
        });
      }
    } else if (data === this.arrayUstensils) {
      this.ustensilsFilterList.innerHTML = '';
      for (const ustensil of data) {
        this.ustensilFilterListItem = document.createElement('li');
        this.ustensilFilterListItem.classList.add('itemFilter', 'ustensilFilter');
        this.ustensilFilterListItem.setAttribute('data-filtertype', 'filterUstensil');
        this.ustensilFilterListItem.textContent = this._setUpperCaseFirstChar(ustensil);
        this.ustensilsFilterList.appendChild(this.ustensilFilterListItem);
        this._removeDropdownFilter('ustensils');
        this.ustensilFilterListItem.addEventListener('click', (e) => {
          this._switchListFilter('ustensils', 'hide');
          this._displaySelectedFilter(e);
        });
      }
    }
  };

  // / Tag filter ///
  // / Show selected tag filter ///
  _displaySelectedFilter(e) {
    this.filterName = e.target.textContent;
    this.filterType = e.target.dataset.filtertype;
    this.selectedTagContainer = document.createElement('div');
    this.selectedFilterContent = `
            <span class="selectedFilter">${this.filterName}</span>
            <span class="fa-regular fa-circle-xmark circleCrossBtn"></span>   
        `;
    this.selectedTagContainer.innerHTML = this.selectedFilterContent;
    this.selectedTagContainer.classList.add('tag__parking--items', 'display-flex');
    this.selectedTagContainer.setAttribute('data-filtertype', `${this.filterType}`);

    if (this.filterType === 'filterIngredient') {
      this.selectedTagContainer.classList.add('filter__bckground--blue');
    } else if (this.filterType === 'filterAppliance') {
      this.selectedTagContainer.classList.add('filter__bckground--green');
    } else if (this.filterType === 'filterUstensil') {
      this.selectedTagContainer.classList.add('filter__bckground--red');
    }
    this.tagFilterParking.appendChild(this.selectedTagContainer);

    this.selectedFilterCloseBtns = document.querySelectorAll('.circleCrossBtn');
    for (this.filterCloseBtn of this.selectedFilterCloseBtns) {
      this.filterCloseBtn.addEventListener('click', (e) => {
        this._switchListFilter('ingredients', 'hide');
        this._switchListFilter('appliances', 'hide');
        this._switchListFilter('ustensils', 'hide');
        this._deleteSelectedFilter(e);
      });
    }
    this.arrayActiveFilters.push(this.filterName.toLowerCase());
    this._mainSearch();
  };

  // / Remove selected tag filter from dopdown menu content///
  _removeDropdownFilter(list) {
    for (const activFilter of this.arrayActiveFilters) {
      if (list === 'ingredients') {
        if (activFilter === this.ingredientFilterListItem.textContent.toLowerCase()) {
          this.ingredientFilterListItem.remove();
        }
      } else if (list === 'appliances') {
        if (activFilter === this.applianceFilterListitem.textContent.toLowerCase()) {
          this.applianceFilterListitem.remove();
        }
      } else if (list === 'ustensils') {
        if (activFilter === this.ustensilFilterListItem.textContent.toLowerCase()) {
          this.ustensilFilterListItem.remove();
        }
      }
    }
  };

  // / Remove selected tag filter ///
  _deleteSelectedFilter(e) {
    this.selectedFilter = e.target.parentElement;
    this.selectedFilter.remove('display-flex');
    this.selectedfilterItem = e.target.previousElementSibling.textContent.toLowerCase();

    let i = this.arrayActiveFilters.length;
    while (i--) {
      if (this.arrayActiveFilters[i] === this.selectedfilterItem) {
        this.arrayActiveFilters.splice(i, 1);
      }
    }

    this._mainSearch();
  };

  // / Main searchbar management ///
  // / JS Debounce ///
  _debounce(func, timeout = 2000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  // / Main searchbar ///
  _mainSearch() {
    this.arrayFilteredRecipes = [];
    this.mainSearchInput = this.mainSearchBarFilter.value.toLowerCase();

    if (this.mainSearchInput.length >= 3) {
      if (this.historySearch.includes(this.mainSearchInput) || this.arrayActiveFilters.includes(this.mainSearchInput)) {
        this._filterRecipes();
      } else {
        this.arrayActiveFilters = this.arrayActiveFilters.filter((filter) => filter != this.historySearch);
        this.historySearch = '';
        this.historySearch = this.mainSearchInput;
        this.arrayActiveFilters.push(this.mainSearchInput);
        this._filterRecipes();
      }
    } else if (this.mainSearchInput <= 0) {
      if (this.arrayActiveFilters.length > 0) {
        if (this.historySearch.length > 0) {
          let i = this.arrayActiveFilters.length;
          while (i--) {
            if (this.arrayActiveFilters[i] === this.historySearch) {
              this.arrayActiveFilters.splice(i, 1);
            }
          }
          this.historySearch = '';
          if (this.arrayActiveFilters.length > 0 ) {
            this._filterRecipes();
          } else {
            this.recipeNotfoundMsg.classList.add('hidden');
            this._initDisplay();
          }
        } else {
          this._filterRecipes();
        }
      } else {
        this.recipeNotfoundMsg.classList.add('hidden');
        this._initDisplay();
      }
    }
  };

  // / Tag filter searchbar ///
  _advanceSearch() {
    for (const advanceSearchBarFilter of this.advanceSearchBarFilters) {
      if (advanceSearchBarFilter.dataset.filtertype === 'ingredients') {
        const itemIngredientsFilterNodeList = document.querySelectorAll('.ingredientFilter');
        if (advanceSearchBarFilter.value.length > 0) {
          for (const ingredientFilter of itemIngredientsFilterNodeList) {
            if (ingredientFilter.innerHTML.toLowerCase().includes(advanceSearchBarFilter.value)) {
              ;
              ingredientFilter.classList.remove('hidden');
            } else {
              ingredientFilter.classList.add('hidden');
            }
          }
        } else {
          for (const ingredientFilter of itemIngredientsFilterNodeList) {
            ingredientFilter.classList.remove('hidden');
          }
        }
      } else if (advanceSearchBarFilter.dataset.filtertype === 'appliances') {
        const itemAppliancesFilterNodeList = document.querySelectorAll('.applianceFilter');
        if (advanceSearchBarFilter.value.length > 0) {
          for (const applianceFilter of itemAppliancesFilterNodeList) {
            if (applianceFilter.innerHTML.toLowerCase().includes(advanceSearchBarFilter.value)) {
              applianceFilter.classList.remove('hidden');
            } else {
              applianceFilter.classList.add('hidden');
            }
          }
        } else {
          for (const applianceFilter of itemAppliancesFilterNodeList) {
            applianceFilter.classList.remove('hidden');
          }
        }
      } else if (advanceSearchBarFilter.dataset.filtertype === 'ustensils') {
        const itemUstensilsFilterNodeList = document.querySelectorAll('.ustensilFilter');
        if (advanceSearchBarFilter.value.length > 0) {
          for (const ustensilFilter of itemUstensilsFilterNodeList) {
            if (ustensilFilter.innerHTML.toLowerCase().includes(advanceSearchBarFilter.value)) {
              ustensilFilter.classList.remove('hidden');
            } else {
              ustensilFilter.classList.add('hidden');
            }
          }
        } else {
          for (const ustensilFilter of itemUstensilsFilterNodeList) {
            ustensilFilter.classList.remove('hidden');
          }
        }
      }
    }
  };

_filterRecipes() {
  this.arrayRecipes = this.arrayAllRecipes;
  if (this.arrayActiveFilters.length > 0) {
    for(let i = 0;  i < this.arrayActiveFilters.length; i++) {
      let filter = this.arrayActiveFilters[i];   
      this.arrayFilteredRecipes = [];
      for(let i = 0; i < this.arrayRecipes.length; i++) {
        let recipe = this.arrayRecipes[i]
        let recipeUstensils = [];
        for(let i = 0;  i < recipe.ustensils.length; i++) {
          let ustensil = recipe.ustensils[i]
          recipeUstensils.push(ustensil.toLowerCase());
        }
        if (
          recipe.name.toLowerCase().includes(filter) ||
          recipe.description.toLowerCase().includes(filter) ||
          recipe.ingredients.some((ingredients) => ingredients.ingredient.toLowerCase().includes(filter)) ||
          recipe.appliance.toLowerCase().includes(filter) || 
          recipeUstensils.includes(filter)) 
        {
          this.arrayFilteredRecipes.push(recipe);
        }
      }
      this.arrayRecipes = [];
      this.arrayRecipes = this.arrayFilteredRecipes;
      }
      if (this.arrayRecipes.length <= 0) {
        this.recipeNotfoundMsg.classList.remove('hidden');
      } else {
        this.recipeNotfoundMsg.classList.add('hidden');
      }
      this._displayRecipeCard();
      this._setIngredientsFilterList();
      this._setAppliancesFilterList();
      this._setUstensilsFilterList();
    } else {
      this.recipeNotfoundMsg.classList.add('hidden');
      this._initDisplay();
    }
  };
};