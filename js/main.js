window.addEventListener('DOMContentLoaded', () => {

    const switchTripSelector = ({ target }) => {
        document.querySelector('.trips__list__selectors-item.active').classList.remove('active');
        target.classList.add('active');

        const filterValue = target.getAttribute('data-filter');
        console.log(filterValue)

        document.querySelector('.trips__list-item.active').classList.remove('active');
        document.querySelector(`.trips__list-item[data-filter='${filterValue}']`).classList.add('active')
    };

    document.querySelectorAll('.trips__list__selectors-item').forEach((item) => {
        item.addEventListener('click', (e) => switchTripSelector(e))
    });

    const switchTripPreviewNext = ({ target }) => {
        const parent = target.closest('.trips__list__selectors');
        const previewsParent = parent.closest('.trips__list-item-preview__list');
        let counter = parent.getAttribute('data-counter');
        const previewsLength = previewsParent.querySelectorAll('.trips__list-item-preview__list-item').length;
        

        if(counter == previewsLength){
            return
        }else{
            ++counter;

            target.closest('.trips__list__selectors').setAttribute('data-counter', counter);
            previewsParent.querySelector('.trips__list-item-preview__list-item.active').classList.remove('active');
            previewsParent.querySelector(`.trips__list-item-preview__list-item[data-number='${counter}']`).classList.add('active');
        }
    };

    const switchTripPreviewPrev = ({ target }) => {
        const parent = target.closest('.trips__list__selectors');
        const previewsParent = parent.closest('.trips__list-item-preview__list');
        let counter = parent.getAttribute('data-counter');
        const previewsLength = previewsParent.querySelectorAll('.trips__list-item-preview__list-item').length;
        

        if(counter == 1){
            return
        }else{
            --counter;

            target.closest('.trips__list__selectors').setAttribute('data-counter', counter)
            previewsParent.querySelector('.trips__list-item-preview__list-item.active').classList.remove('active');
            previewsParent.querySelector(`.trips__list-item-preview__list-item[data-number='${counter}']`).classList.add('active');
        }
    };

    document.querySelectorAll('.trips__list__selector.prev').forEach((item) => {
        item.addEventListener('click', (e) => switchTripPreviewPrev(e))
    });

    document.querySelectorAll('.trips__list__selector.next').forEach((item) => {
        item.addEventListener('click', (e) => switchTripPreviewNext(e))
    });

    const menuBtn = document.querySelector('.menu-btn');
    const menuList = document.querySelector('.menu__list');
    const sectionTopContent = document.querySelector('.section-top__content');

    const menuHandler = ({ target }) => {
        if(target.getAttribute('data-clicked') === 'false'){
            menuList.classList.add('active');
            sectionTopContent.classList.add('hidden');
            target.setAttribute('data-clicked', 'true');
            target.innerText = 'CLOSE';
        }else{
            menuList.classList.remove('active');
            sectionTopContent.classList.remove('hidden');
            target.setAttribute('data-clicked', 'false');
            target.innerText = 'MENU';
        };
    };

    menuBtn.addEventListener('click', (e) => menuHandler(e));

    document.querySelectorAll('.menu__list-link').forEach((item) => {
        item.addEventListener('click', (e) => scrollToSection(e));
    });

    const scrollToSection = ({ target }) => {
        document.querySelector(`.${target.getAttribute('data-to')}`).scrollIntoView({behavior: 'smooth'});
        menuBtn.innerText = 'MENU';
        sectionTopContent.classList.remove('hidden');
        menuList.classList.remove('active');
    };
});