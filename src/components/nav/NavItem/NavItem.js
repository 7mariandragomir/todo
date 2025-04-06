export { NavItem };
import './NavItem.css';

class NavItem {
    constructor({text, borderOn, iconOn, icon, onClick, iconOnClick}) {
        this.el = document.createElement('div');
        this.el.classList.add('navitem');

        if (borderOn === true) {
            this.el.classList.add('hasborder');
        }
        
        this.span = document.createElement('span');
        this.span.innerHTML = text;
        this.el.appendChild(this.span);

        if (iconOn === true) {
            this.icon = document.createElement('button');
            this.icon.classList.add('button');
            this.icon.innerHTML = icon;

            this.icon.addEventListener('click', iconOnClick);
            this.el.appendChild(this.icon);
        }

        if (onClick) {
            this.el.classList.add('hashover');
            this.el.addEventListener('click', onClick)
        }


    }

    render(parent = document.body) {
        parent.appendChild(this.el);
    }
}