export default class TestTagFilter {
    constructor(data) {
        console.log('TestTagFilter', data);
        /// DOM ///
        // this.filterListbox = document.getElementsByClassName("tag__filter--listbox")[0];
        this.filterListbox = document.querySelectorAll(".tag__filter--listbox");
        // console.log('filterListbox', this.filterListbox);
        // this.filterTitle = document.getElementsByClassName("filter__header--title")[0];
        this.filterTitle = document.querySelectorAll(".filter__header--title");
        // console.log('this.filterTitle', this.filterTitle);
        this.filterInput = document.getElementsByClassName("filter__header--input")[0];
        this.filterBtn = document.getElementsByClassName("filter__header--chevron")[0];
        this.filterChevronDown = document.getElementsByClassName("filter__header--chevronDown")[0];
        this.filterChevronUp = document.getElementsByClassName("filter__header--chevronUp")[0];
        this.filterList = document.getElementsByClassName("tag__filter--list")[0];

        /// Data ///

        /// Functions ///
        // this._colorDropdownMenu();
        /// Listener /// 
        // this.bindEvent();
    };

    // bindEvent() {
    //     if (this.filterBtn) {
    //         this.filterBtn.addEventListener("click", _expandDropdowFilter())
    //     }
    // };

    // _colorDropdownMenu() {
    //     for (this.title of this.filterTitle) {
    //         if (this.title.textContent === "Ingredients") {
    //             this.title.parentElement.parentElement.classList.add("filter__bckground--blue")
    //         } else if (this.title.textContent === "Appareils") {
    //             this.title.parentElement.parentElement.classList.add("filter__bckground--green")
    //         } else if (this.title.textContent === "Ustenciles") {
    //             this.title.parentElement.parentElement.classList.add("filter__bckground--red")
    //         }
    //     }
    // };

    // _expandDropdowFilter() {

    // }
};