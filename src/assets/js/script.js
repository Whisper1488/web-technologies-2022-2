class BurgerMenu {
    burgerButton;
    mobileMenu;
    mobileCross;

    constructor(burgerButton, mobileMenu, mobileCross) {
        this.burgerButton = burgerButton;
        this.mobileMenu = mobileMenu;
        this.mobileCross = mobileCross;

        burgerButton.addEventListener('click', function () {
            mobileMenu.classList.remove('inactive');
            mobileMenu.classList.add('active');
        });

        mobileCross.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            mobileMenu.classList.add('inactive');
        });
    }
}

class ProjectsPagedSlider {
    selectorList;

    constructor(selectorList) {
        this.selectorList = selectorList;
        let selectorElems = Array.prototype.slice.call(selectorList);

        selectorElems.forEach(element => element.addEventListener('click', function () {
            selectorElems.forEach(element => element.classList.remove('active'));
            element.classList.add('active');
            let projectName = document.getElementById('project-name');
            projectName.innerHTML = element.innerHTML;
        }));
    }
}

class FaqElement{
    faqButton;
    faqText;

    constructor(faqButton, faqText) {
        this.faqButton = faqButton;
        this.faqText = faqText;

        this.faqButton.addEventListener('click', function () {
            if (faqText.classList[faqText.classList.length - 1] === 'active'){
                faqText.classList.remove('active');
                faqButton.classList.remove('active');
                let faqButtonSvg = faqButton.getElementsByTagName('svg')[0];
                faqButtonSvg.setAttribute('fill', '#2D66EE');
            } else {
                faqText.classList.add('active');
                faqButton.classList.add('active');
                let faqButtonSvg = faqButton.getElementsByTagName('svg')[0];
                faqButtonSvg.setAttribute('fill', '#98A2B3');
            }
        })
    }
}

class FaqItems {
    itemsList;
    faqItemsList;

    constructor(itemsList) {
        this.itemsList = itemsList;
        this.faqItemsList = [];

        for (let i = 0; i < itemsList.length; i++){
            let faqText = itemsList[i].getElementsByClassName('faq--list--item--text')[0];
            let title = itemsList[i].getElementsByClassName('faq--list--item--title');
            let faqButton = title[0].getElementsByClassName('faq--list--item--title--svg')[0];

            this.faqItemsList.push(new FaqElement(faqButton, faqText));
        }
    }
}

new FaqItems(Array.prototype.slice.call(document.getElementsByClassName('faq--list--item')));

new ProjectsPagedSlider(document.getElementsByClassName('projects--examples--window--selector--list--item'));

new BurgerMenu(document.getElementById('header__burger'),
    document.getElementById('mobile__menu'),
    document.getElementById('mobile__menu--cross'));