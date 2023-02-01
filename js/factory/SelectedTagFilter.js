/*export default*/ class SelectedTagFilter {
    constructor(data) {
        //console.log('data', data.target);
        this.wrapper = document.createElement("div")
        this.originFilter = data.target.parentElement
        //console.log('color', this.originFilter);
        this.filter = data.target.textContent; 
        //this._createFilter();
    };
    _createFilter() {
        this.filterTagContent = `
            <li class="selectedFilter">${this.filter}</li>
            <span class="fa-regular fa-circle-xmark circleCrossBtn"></span>
        `
        this.wrapper.innerHTML = this.filterTagContent
        this.wrapper.classList.add("tag__parking--items")
        this.wrapper.setAttribute("tabindex", "0")
        this.wrapper.setAttribute("aria-label", `${this.filter}`)
        if (this.originFilter.classList.contains("filter__ustensils--list")) {
            this.wrapper.classList.add("bckground-red")
        }
        else if (this.originFilter.classList.contains("filter__appliances--list")) {
            this.wrapper.classList.add("bckground-green")
        }
        else if (this.originFilter.classList.contains("filter__ingredients--list")) {
            this.wrapper.classList.add("bckground-blue")
        }
        return this.wrapper
    };

};

function displaySelectedFilter(event) {
    const tagParking = document.getElementsByClassName("tag__parking")[0];
    tagParking.classList.remove("hidden");
    const newSelectedFilter = new TestSelectTag(event);
    const selectedFilter = newSelectedFilter._createFilter();
    tagParking.appendChild(selectedFilter);
};