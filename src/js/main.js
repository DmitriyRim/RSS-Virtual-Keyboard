class VirtualKeyboard {
    constructor(boxSelector) {
        this.container = document.querySelector(boxSelector);
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
    }
}

const keyboard = new VirtualKeyboard( "body" );

keyboard.init();