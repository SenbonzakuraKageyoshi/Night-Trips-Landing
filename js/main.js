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
});