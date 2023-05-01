import Key from "./Key.js";
import dataKeyboard from "./keyboardData.js";

class VirtualKeyboard {
    constructor(boxSelector, data) {
        this.data = data;
        this.container = document.querySelector(boxSelector);
        this.textArea = null;
        this.keyboard = null;
        this.buttons = null;
        !localStorage.getItem("lang") ? localStorage.setItem("lang", "en") : null;
    }
    init(){
        const title = document.createElement("h1");

        title.innerText = "RSS Виртуальная клавиатура";
        title.classList.add("keyboard__title");

        this.textArea = document.createElement("textarea");
        this.textArea.classList.add("keyboard__textarea");
        this.textArea.addEventListener("chenge", (e) => {
            e.preventDefault();
        });

        this.keyboard = document.createElement("div");
        this.keyboard.classList.add("keyboard__buttons");

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("wrapper", "keyboard");
        this.wrapper.append(title, this.textArea, this.keyboard);

        this.container.append(this.wrapper);
        this.render();
        window.addEventListener("keydown", this.switchBackroundBtn.bind(this));
        window.addEventListener("keyup", e => {
            this.switchBackroundBtn(e);
            this.clickHandler(e);
        });
    }
    render() {
        let lang = localStorage.getItem("lang");

        this.keyboard.innerHTML ="";
        this.buttons = {};
        
        for(let i = 0; i < this.data.length; i++) {
            const rowBox = document.createElement("div");
            let buttons = null;
            rowBox.classList.add("keyboard__row");
            buttons = this.data[i].map(elem => {
                const key = new Key(elem, lang);
                const btn = key.create();

                this.buttons[elem.code] = btn;
                return btn;
            });
            rowBox.append(...buttons);
            this.keyboard.append(rowBox);
        }
    }
    switchBackroundBtn(e){
        const elem = this.buttons[e.code];
        
        if(elem) {
            e.preventDefault();
            e.type === "keyup" && elem.classList.contains("keyboard__btn_down") ?  elem.classList.remove("keyboard__btn_down") : null; 
            e.type === "keydown" ? elem.classList.add("keyboard__btn_down") : null;
        }
    }
    clickHandler(e) {
        if((e.altKey && (e.code === "ControlLeft" || e.code === "ControlRight")) 
        || (e.ctrlKey && (e.code === "AltLeft" || e.code === "AltRight"))){
            this.switchingLang();
        }
    }
    switchingLang(){
        let lang = localStorage.getItem("lang") === "en" ? "ru" : "en";

        localStorage.setItem("lang", lang);
        for(let i = 0; i < this.data.length; i++) {
            this.data[i].forEach(elem => {
                if(elem[lang]?.value){
                    let code = elem.code;
                    this.buttons[code].innerText = elem[lang].value;
                }
            });
        }
    }
}

const keyboard = new VirtualKeyboard( "body" , dataKeyboard);

keyboard.init();