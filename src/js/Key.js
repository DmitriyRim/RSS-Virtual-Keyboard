class Key {
    constructor(data, lang) {
        this.value = data[lang]?.value ? data[lang].value : data.value;
        this.className = data.className;
    }
    create() {
        const key = document.createElement("div");

        key.innerText = this.value;
        key.className = this.className;

        return key;
    }
}

export default Key;