
export default class Search {
    constructor() {
        console.log('search');
        this.button = document.getElementsByClassName("toto")[0];
        this.button2 = document.getElementsByClassName("toto");

        this.creatTest = (e) => this._creatTest(e);

        this.bindEvent();
        this.getData();
    }

    bindEvent() {
        //initiliser tous les addEventListener ici
        if (this.button) {
            this.button.addEventListener("click", this.creatTest(e));
        }
        if (this.button2.length > 0) {
            for (const bouton2 of this.button2) {
                bouton2.addEventListener("click", console.log('Tarlatata'));
            }
        }
    }

    _creatTest(e) {
        console.log(e);
    }
}