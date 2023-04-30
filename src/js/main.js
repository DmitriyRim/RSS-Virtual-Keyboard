import Key from "./Key.js";
import dataKeyboard from "./keyboardData.js";

class VirtualKeyboard {
    constructor(boxSelector, data) {
        this.data = data;
        this.container = document.querySelector(boxSelector);
        this.textArea = null;
        this.keyboard = null;
    }
    init(){
        const title = document.createElement("h1");

        title.innerText = "RSS Виртуальная клавиатура";
        title.classList.add("keyboard__title");

        this.textArea = document.createElement("textarea");
        this.textArea.classList.add("keyboard__textarea");

        this.keyboard = document.createElement("div");
        this.keyboard.classList.add("keyboard__buttons");

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("wrapper", "keyboard");
        this.wrapper.append(title, this.textArea, this.keyboard);

        this.container.append(this.wrapper);
        this.render();
    }
    render() {
        for(let i = 0; i < this.data.length; i++) {
            const rowBox = document.createElement("div");
            let keys = null;
            console.log(this.data[i]);
            rowBox.classList.add("keyboard__row");
            keys = this.data[i].map(elem => {
                const key = new Key(elem, "en");
                return key.create();
            });
            rowBox.append(...keys);
            this.keyboard.append(rowBox);
        }
    }
}

const keyboard = new VirtualKeyboard( "body" , dataKeyboard);

keyboard.init();