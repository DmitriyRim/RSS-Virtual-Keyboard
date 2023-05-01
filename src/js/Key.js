class Key {
    constructor(data, lang) {
        this.value = data[lang]?.value ? data[lang].value : data.value;
        this.className = data.className;
        this.code = data.code;
    }
    create() {
        const key = document.createElement("div");

        key.innerText = this.value;
        key.className = this.className;
        key.dataset.code = this.code;

        return key;
    }
}

export default Key;