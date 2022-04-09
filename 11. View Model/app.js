class Textbox {
    constructor(selector, regex) {
       
        this._elements = Array.from(document.querySelectorAll(selector));
        this._value = this._elements[0].value;
        this._invalidSymbols = regex;

        let s = 1;
        
        this._elements.forEach((el) => {
            el.value = `this is ${s++}`;

            el.addEventListener("input", () => {
                this._value = el.value;

                this._elements.forEach((item) => {
                    item.value = this._value;
                });
            });
        });
    }

    get elements() {
        return this._elements;
    }

    get value() {
        
        return this._value;
    }

    set value(txt) {
        console.log("from setter");
        this._value = txt;
        this._elements.forEach((el) => {
            el.value = txt;
        });
    }

    isValid() {
        if (this._invalidSymbols.exec(this.value) === null) {
            return true;
        } else {
            return false;
        }
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
