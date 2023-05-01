import Key from "./Key.js";
import dataKeyboard from "./keyboardData.js";

class VirtualKeyboard {
    constructor(boxSelector, data) {
        this.data = data;
        this.container = document.querySelector(boxSelector);
        this.textArea = null;
        this.keyboard = null;
        this.buttons = null;
        this.capsLock = false;
        !localStorage.getItem("lang") ? localStorage.setItem("lang", "en") : null;
    }
    init(){
        const title = document.createElement("h1");
        const message = document.createElement("ul");

        title.innerText = "RSS Виртуальная клавиатура";
        title.classList.add("keyboard__title");

        this.textArea = document.createElement("textarea");
        this.textArea.classList.add("keyboard__textarea");
        this.textArea.addEventListener("chenge", (e) => {
            e.preventDefault();
        });

        this.keyboard = document.createElement("div");
        this.keyboard.classList.add("keyboard__buttons");

        message.classList.add("keyboard__description");
        message.innerHTML = "<li>Клавиатура создана в операционной системе Windows</li>";
        message.innerHTML += "<li>Комбинация для переключения языка: ctrl + alt</li>";

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("wrapper", "keyboard");
        this.wrapper.append(title, this.textArea, this.keyboard, message);

        this.container.append(this.wrapper);
        this.render();
        window.addEventListener("keydown", e => {
            this.switchBackroundBtn(e, e.code);
            this.clickHandlerDown(e, e.code);
        });
        window.addEventListener("keyup", e => {
            this.switchBackroundBtn(e, e.code);
            this.clickHandler(e, e.code);
            this.clickHandlerUp(e, e.code);
        });
        this.keyboard.addEventListener("mousedown", e => {
            if(e.target.classList.contains("keyboard__btn")){
                let code = e.target.dataset.code;

                this.switchBackroundBtn(e, code);
                this.clickHandlerDown(e, code);
            }
        });
        this.keyboard.addEventListener("mouseup", e => {
            if(e.target.classList.contains("keyboard__btn")){
                let code = e.target.dataset.code;

                this.switchBackroundBtn(e, code);
                this.clickHandler(e, code);
                this.clickHandlerUp(e, code);
            }
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
    switchBackroundBtn(e, code){
        const elem = this.buttons[code];

        if(elem && code !== "CapsLock") {
            e.preventDefault();
            e.type === "keyup" || e.type === "mouseup" && elem.classList.contains("keyboard__btn_down") ?  elem.classList.remove("keyboard__btn_down") : null; 
            e.type === "keydown" || e.type === "mousedown"? elem.classList.add("keyboard__btn_down") : null;
        } else if(code == "CapsLock" && elem.dataset.code == "CapsLock"){
            this.capsLock ? elem.classList.add("keyboard__btn_down") : elem.classList.remove("keyboard__btn_down");
        }

    }
    clickHandler(e, code) {
        if((e.altKey && (code === "ControlLeft" || code === "ControlRight")) 
        || (e.ctrlKey && (code === "AltLeft" || code === "AltRight"))){
            let lang = localStorage.getItem("lang") === "en" ? "ru" : "en";

            localStorage.setItem("lang", lang);
            this.switchButtons();
        }
    }
    clickHandlerDown(e, code) {
        switch (code) {
        // case "ArrowUp":
                
        //     break;
        // case "ArrowDown":
                
        //     break;
        case "ArrowRight":
            this.textArea.selectionEnd = ++this.textArea.selectionStart;
            break;
        case "ArrowLeft":
            this.textArea.selectionEnd = this.textArea.selectionEnd > 0 ? --this.textArea.selectionStart : 0;
            break;
        case "Tab":
            this.editTextAreaContent("write", "\t");
            break;
        case "CapsLock":
            this.switchCapsLock();
            break;
        case "ShiftLeft":
        case "ShiftRight":
            this.switchShift();
            break;
        case "ControlLeft":
        case "ControlRight":  
            break;
        case "MetaLeft":
                
            break;
        case "AltLeft":
        case "AltRight":     
            break;
        case "Backspace":
            this.editTextAreaContent("backspace");
            break;
        case "Delete":
            this.editTextAreaContent("del");
            break;
        case "Space":
            this.editTextAreaContent("write", " ");
            break;
        case "Enter":
            this.editTextAreaContent("write", "\n");
            break;
        default:
            this.editTextAreaContent("write", this.buttons[code]?.innerText);
            break;
        }
    }
    clickHandlerUp(e, code){
        switch (code) {
        case "ShiftLeft":
        case "ShiftRight":
            this.switchButtons();
            break;
        }
    }
    writeСharacter(char){
        this.textArea.focus();
        this.textArea.value += char;
    }
    editTextAreaContent(mode, char) {
        this.textArea.focus();
        let posStart = this.textArea.selectionStart;
        let arr = this.textArea.value.split("");

        if(mode === "backspace" && posStart > 0){
            arr.splice(posStart - 1, 1);
            this.textArea.value = arr.join("");
            this.textArea.selectionStart, this.textArea.selectionEnd = posStart - 1;
        }
        if(mode === "write"){
            arr.splice(posStart , 0, char);
            this.textArea.value = arr.join("");
            this.textArea.selectionStart, this.textArea.selectionEnd = posStart + 1;
        }
        if(mode === "del"){
            arr.splice(posStart, 1);
            this.textArea.value = arr.join("");
            this.textArea.selectionStart, this.textArea.selectionEnd = posStart;
        }
    }
    switchButtons(){
        let lang = localStorage.getItem("lang");

        for(let i = 0; i < this.data.length; i++) {
            this.data[i].forEach(elem => {
                let code = elem.code;

                if(elem[lang]?.value){
                    this.buttons[code].innerText = this.capsLock ? elem[lang].value.toUpperCase() : elem[lang].value;
                } else {
                    this.buttons[code].innerText = elem.value;
                }
            });
        }
    }
    switchShift(){
        for(let i = 0; i < this.data.length; i++) {
            this.data[i].forEach(elem => {
                let code = elem.code;
                let btn = this.buttons[code];

                if(elem[localStorage.getItem("lang")]?.altValue){
                    btn.innerText = elem[localStorage.getItem("lang")].altValue;
                } else if(!btn.classList.contains("keyboard__btn-action")){
                    btn.innerText = elem.altValue ? elem.altValue : this.capsLock ? btn.innerText.toLowerCase() : btn.innerText.toUpperCase();
                }
            });
        }
    }
    switchCapsLock() {
        this.capsLock = this.capsLock ? false : true;
        this.switchButtons();
    }
}

const keyboard = new VirtualKeyboard( "body" , dataKeyboard);

keyboard.init();