const dataKeyboard = [
    [
        {
            en: {
                value: "`",
                altValue : "~",
            },
            ru: {
                value: "ё",
            },
            className: "keyboard__btn",
            code:"Backquote",
        },
        {
            value: "1",
            altValue : "!",
            className: "keyboard__btn",
            code: "Digit1",
        },
        {
            value: "2",
            ru: {altValue : "\""},
            en: {altValue : "@"},
            className: "keyboard__btn",
            code: "Digit2",
        },
        {
            value: "3",
            ru: {altValue : "№"},
            en: {altValue : "#"},
            className: "keyboard__btn",
            code: "Digit3",
        },
        {
            value: "4",
            ru: {altValue : ";"},
            en: {altValue : "$"},
            className: "keyboard__btn",
            code: "Digit4",
        },
        {
            value: "5",
            altValue : "%",
            className: "keyboard__btn",
            code: "Digit5",
        },
        {
            value: "6",
            ru: {altValue : ":"},
            en: {altValue : "^"},
            className: "keyboard__btn",
            code: "Digit6",
        },
        {
            value: "7",
            ru: {altValue : "?"},
            en: {altValue : "&"},
            className: "keyboard__btn",
            code: "Digit7",
        },
        {
            value: "8",
            altValue : "*",
            className: "keyboard__btn",
            code: "Digit8",
        },
        {
            value: "9",
            altValue : "(",
            className: "keyboard__btn",
            code: "Digit9",
        },
        {
            value: "0",
            altValue : ")",
            className: "keyboard__btn",
            code: "Digit0",
        },
        {
            value: "-",
            altValue : "_",
            className: "keyboard__btn",
            code: "Minus",
        },
        {
            value: "=",
            altValue : "+",
            className: "keyboard__btn",
            code: "Equal",
        },
        {
            value: "Backspace",
            className: "keyboard__btn  keyboard__btn-action",
            code: "Backspace",
        },
    ],
    [
        {
            value: "Tab",
            className: "keyboard__btn  keyboard__btn-action",
            code: "Tab",
        },
        {
            en: {value: "q"},
            ru: {value: "й"},
            className: "keyboard__btn",
            code: "KeyQ",
        },
        {
            en: {value: "w"},
            ru: {value: "ц"},
            className: "keyboard__btn",
            code: "KeyW",
        },
        {
            en: {value: "e"},
            ru: {value: "у"},
            className: "keyboard__btn",
            code: "KeyE",
        },
        {
            en: {value: "r"},
            ru: {value: "к"},
            className: "keyboard__btn",
            code: "KeyR",
        },
        {
            en: {value: "t"},
            ru: {value: "е"},
            className: "keyboard__btn",
            code: "KeyT",
        },
        {
            en: {value: "y"},
            ru: {value: "н"},
            className: "keyboard__btn",
            code: "KeyY",
        },
        {
            en: {value: "u"},
            ru: {value: "г"},
            className: "keyboard__btn",
            code: "KeyU",
        },
        {
            en: {value: "i"},
            ru: {value: "ш"},
            className: "keyboard__btn",
            code: "KeyI",
        },
        {
            en: {value: "o"},
            ru: {value: "щ"},
            className: "keyboard__btn",
            code: "KeyO",
        },
        {
            en: {value: "p"},
            ru: {value: "з"},
            className: "keyboard__btn",
            code: "KeyP",
        },
        {
            en: {
                value: "[",
                altValue: "{"
            },
            ru: {
                value: "х",
            },
            className: "keyboard__btn",
            code: "BracketLeft",
        },
        {
            en: {
                value: "]",
                altValue: "}"
            },
            ru: {
                value: "ъ",
            },
            className: "keyboard__btn",
            code: "BracketRight",
        },
        {
            value: "Del",
            className: "keyboard__btn  keyboard__btn-action",
            code: "Delete",
        },
    ],
    [
        {
            value: "CapsLock",
            className: "keyboard__btn  keyboard__btn-action",
            code: "CapsLock",
        },
        {
            en: {value: "a"},
            ru: {value: "ф"},
            className: "keyboard__btn",
            code: "KeyA",
        },
        {
            en: {value: "s"},
            ru: {value: "ы"},
            className: "keyboard__btn",
            code: "KeyS",
        },
        {
            en: {value: "d"},
            ru: {value: "в"},
            className: "keyboard__btn",
            code: "KeyD",
        },
        {
            en: {value: "f"},
            ru: {value: "а"},
            className: "keyboard__btn",
            code: "KeyF",
        },
        {
            en: {value: "g"},
            ru: {value: "п"},
            className: "keyboard__btn",
            code: "KeyG",
        },
        {
            en: {value: "h"},
            ru: {value: "р"},
            className: "keyboard__btn",
            code: "KeyH",
        },
        {
            en: {value: "j"},
            ru: {value: "о"},
            className: "keyboard__btn",
            code: "KeyJ",
        },
        {
            en: {value: "k"},
            ru: {value: "л"},
            className: "keyboard__btn",
            code: "KeyK",
        },
        {
            en: {value: "l"},
            ru: {value: "д"},
            className: "keyboard__btn",
            code: "KeyL",
        },
        {
            en: {
                value: ";",
                altValue: ":",    
            },
            ru: {value: "ж"},
            className: "keyboard__btn",
            code: "Semicolon",
        },
        {
            en: {
                value: "'",
                altValue: "\"",    
            },
            ru: {value: "э"},
            className: "keyboard__btn",
            code: "Quote",
        },
        {
            value: "\\",
            altValue: "|",
            className: "keyboard__btn",
            code: "Backslash",
        },
        {
            value: "Enter",
            className: "keyboard__btn  keyboard__btn-action",
            code: "Enter",
        },
    ],
    [
        {
            value: "Shift",
            className: "keyboard__btn  keyboard__btn-action",
            code: "ShiftLeft",
        },
        {
            en: {value: "z"},
            ru: {value: "я"},
            className: "keyboard__btn",
            code: "KeyZ",
        },
        {
            en: {value: "x"},
            ru: {value: "ч"},
            className: "keyboard__btn",
            code: "KeyX",
        },
        {
            en: {value: "c"},
            ru: {value: "с"},
            className: "keyboard__btn",
            code: "KeyC",
        },
        {
            en: {value: "v"},
            ru: {value: "м"},
            className: "keyboard__btn",
            code: "KeyV",
        },
        {
            en: {value: "b"},
            ru: {value: "и"},
            className: "keyboard__btn",
            code: "KeyB",
        },
        {
            en: {value: "n"},
            ru: {value: "т"},
            className: "keyboard__btn",
            code: "KeyN",
        },
        {
            en: {value: "m"},
            ru: {value: "ь"},
            className: "keyboard__btn",
            code: "KeyM",
        },
        {
            en: {
                value: ",",
                altValue: "<",
            },
            ru: {value: "б"},
            className: "keyboard__btn",
            code: "Comma",
        },
        {
            en: {
                value: ".",
                altValue: ">",
            },
            ru: {value: "ю"},
            className: "keyboard__btn",
            code: "Period",
        },
        {
            en: {
                value: "/",
                altValue: "?",
            },
            ru: {
                value: ".",
                altValue: ",",
            },
            className: "keyboard__btn",
            code: "Slash",
        },
        {
            value: "↑",
            className: "keyboard__btn ",
            code: "ArrowUp",
        },
        {
            value: "Shift",
            className: "keyboard__btn  keyboard__btn-action",
            code: "ShiftRight",
        },
    ],
    [
        {
            value: "Ctrl",
            className: "keyboard__btn  keyboard__btn-action",
            code: "ControlLeft",
        },
        {
            value: "Win",
            className: "keyboard__btn  keyboard__btn-action",
            code: "MetaLeft",
        },
        {
            value: "Alt",
            className: "keyboard__btn  keyboard__btn-action",
            code: "AltLeft",
        },
        {
            value: " ",
            className: "keyboard__btn  keyboard__btn_space",
            code: "Space",
        },
        {
            value: "Alt",
            className: "keyboard__btn  keyboard__btn-action",
            code: "AltRight",
        },
        {
            value: "←",
            className: "keyboard__btn ",
            code: "ArrowLeft",
        },
        {
            value: "↓",
            className: "keyboard__btn ",
            code: "ArrowDown",
        },
        {
            value: "→",
            className: "keyboard__btn ",
            code: "ArrowRight",
        },
        {
            value: "Ctrl",
            className: "keyboard__btn  keyboard__btn-action",
            code: "ControlRight",
        },
    ]
];

export default dataKeyboard;