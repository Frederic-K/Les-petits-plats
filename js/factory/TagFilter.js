export default class TestTagFilter {
    constructor(data) {
        console.log('TestTAgFilter', data);
        /// DOM ///
        this.filterListbox = document.getElementsByClassName("tag__filter--listbox")

        /// Data ///

        /// Functions ///

        /// Listener /// 
        this.bindEvent();
    };


}