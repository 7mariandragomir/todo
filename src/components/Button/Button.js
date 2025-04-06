export { Button };
import './Button.css';

class Button {
    constructor({text, onClick}) {
        this.el = document.createElement('button');
        this.el.classList.add('button');
        this.el.innerHTML = text;


        this.el.addEventListener('click', onClick);
    }

    render(parent = document.body) {
        parent.appendChild(this.el);
    }
}