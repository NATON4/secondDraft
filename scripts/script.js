const prevButton = document.querySelector('.top-nav__prev-button');
const nextButton = document.querySelector('.top-nav__next-button');

function deleteCatalog() {
    let featuredHousesItems = document.querySelector('.featured-houses__items');
    while (featuredHousesItems.firstChild) {
        featuredHousesItems.removeChild(featuredHousesItems.firstChild);
    }
}

const housesButton = document.getElementById('housesChangeButton');
const villasButton = document.getElementById('villasChangeButton');
const apartmentsButton = document.getElementById('apartmentsChangeButton');

function deactivateAllButtons() {
    housesButton.classList.remove('active-button');
    document.querySelector('.button-label_type-house').style.color = '';

    villasButton.classList.remove('active-button');
    document.querySelector('.button-label_type-villa').style.color = '';

    apartmentsButton.classList.remove('active-button');
    document.querySelector('.button-label_type-apartment').style.color = '';
}
housesButton.addEventListener('click', function() {
    deleteCatalog();

    let featuredHousesItems = document.querySelector('.featured-houses__items');

    for (let i = 0; i < 5; i++) {
        let newItem = document.createElement('div');
        newItem.classList.add('item__carcass');

        newItem.innerHTML = `
                <div class="item-carcass__header">
                    <div class="item-header">
                        <img class="item-header__image" src="images/house-for-sale-image.png">
                        <div class="item-image__preferences_type-popular">
                            <img class="item-preference__ico" src="images/item-image-fire-ico.svg">
                            <h5 class="item-preference__label">Popular</h5>
                        </div>
                    </div>
                </div>
                <div class="item-carcass__main">
                    <h5 class="item-main__title">Roselands House</h5>
                    <h5 class="item-main__price">$ 30.000.000</h5>
                </div>
                <div class="item-carcass__footer">
                    <img class="item-footer__image" src="images/girl-seller-image.png">
                    <div class="item-footer-seller">
                        <h5 class="item-seller__name">Dianne Russell</h5>
                        <h5 class="item-seller__location">Manchester, Kentucky</h5>
                    </div>
                </div>
        `;

        featuredHousesItems.appendChild(newItem);
    }
    deactivateAllButtons();
    housesButton.classList.add('active-button');
    document.querySelector('.button-label_type-house').style.color = '#10B981';
    document.querySelector('.button-image_type-house').src = 'images/ico-house-green.svg';
    document.querySelector('.button-image_type-villa').src = 'images/ico-villa.svg';
    document.querySelector('.button-image_type-apartment').src = 'images/ico-apartment.svg';
    housesButton.disabled = true;
    villasButton.disabled = false;
    apartmentsButton.disabled = false;
    prevButton.style.backgroundColor = '#10B981';
    nextButton.style.backgroundColor = '';
    nextButton.disabled = false;
    prevButton.disabled = true;
});

villasButton.addEventListener('click', function() {

    deleteCatalog();

    let featuredHousesItems = document.querySelector('.featured-houses__items');

    for (let i = 0; i < 5; i++) {
        let newItem = document.createElement('div');
        newItem.classList.add('item__carcass');

        newItem.innerHTML = `
                <div class="item-carcass__header">
                    <div class="item-header">
                        <img class="item-header__image" src="images/villa-for-sale-image.png">
                        <div class="item-image__preferences_type-new-house">
                            <img class="item-preference__ico" src="images/item-image-house-ico.svg">
                            <h5 class="item-preference__label">New house</h5>
                        </div>
                    </div>
                </div>
                <div class="item-carcass__main">
                    <h5 class="item-main__title">Woodlandside</h5>
                    <h5 class="item-main__price">$ 20.000.000</h5>
                </div>
                <div class="item-carcass__footer">
                    <img class="item-footer__image" src="images/blue-seller-men.png">
                    <div class="item-footer-seller">
                        <h5 class="item-seller__name">Robert Fox</h5>
                        <h5 class="item-seller__location">Dr. San Jose, South Dakota</h5>
                    </div>
                </div>
        `;

        featuredHousesItems.appendChild(newItem);
    }
    deactivateAllButtons();
    villasButton.classList.add('active-button');
    document.querySelector('.button-label_type-villa').style.color = '#10B981';
    document.querySelector('.button-image_type-villa').src = 'images/ico-villa-green.svg';
    document.querySelector('.button-image_type-apartment').src = 'images/ico-apartment.svg';
    document.querySelector('.button-image_type-house').src = 'images/ico-house.svg';
    housesButton.disabled = false;
    villasButton.disabled = true;
    apartmentsButton.disabled = false;
    prevButton.style.backgroundColor = '';
    nextButton.style.backgroundColor = '';
    nextButton.disabled = false;
    prevButton.disabled = false;
});

apartmentsButton.addEventListener('click', function() {

    deleteCatalog();

    let featuredHousesItems = document.querySelector('.featured-houses__items');

    for (let i = 0; i < 5; i++) {
        let newItem = document.createElement('div');
        newItem.classList.add('item__carcass');

        newItem.innerHTML = `
                <div class="item-carcass__header">
                    <div class="item-header">
                        <img class="item-header__image" src="images/apartment-for-sale-image.png">
                        <div class="item-image__preferences_type-best-deals">
                            <img class="item-preference__ico" src="images/item-image-wallet-ico.svg">
                            <h5 class="item-preference__label">Best Deals</h5>
                        </div>
                    </div>
                </div>
                <div class="item-carcass__main">
                    <h5 class="item-main__title">The Old Lighthouse</h5>
                    <h5 class="item-main__price">$ 44.000.000</h5>
                </div>
                <div class="item-carcass__footer">
                    <img class="item-footer__image" src="images/blue-guy-house-seller.png">
                    <div class="item-footer-seller">
                        <h5 class="item-seller__name">Ronald Richards</h5>
                        <h5 class="item-seller__location">Santa Ana, Illinois</h5>
                    </div>
                </div>
        `;

        featuredHousesItems.appendChild(newItem);
    }
    deactivateAllButtons();
    apartmentsButton.classList.add('active-button');
    document.querySelector('.button-label_type-apartment').style.color = '#10B981';
    document.querySelector('.button-image_type-apartment').src = 'images/ico-apartment-green.svg';
    document.querySelector('.button-image_type-house').src = 'images/ico-house.svg';
    document.querySelector('.button-image_type-villa').src = 'images/ico-villa.svg';
    housesButton.disabled = false;
    villasButton.disabled = false;
    apartmentsButton.disabled = true;
    prevButton.style.backgroundColor = '';
    nextButton.style.backgroundColor = '#10B981';
    nextButton.disabled = true;
    prevButton.disabled = false;
});

let buttons = [
    document.getElementById('housesChangeButton'),
    document.getElementById('villasChangeButton'),
    document.getElementById('apartmentsChangeButton')
];

function getActiveButtonIndex() {
    let activeButton = document.querySelector('.active-button');
    if (activeButton) {
        return buttons.findIndex(button => button === activeButton);
    }
    return -1;
}

function goToNextButton() {
    let activeButtonIndex = getActiveButtonIndex();
    if (activeButtonIndex < buttons.length - 1) {
        activeButtonIndex++;
    }
    simulateButtonClick(activeButtonIndex);
}

function goToPrevButton() {
    let activeButtonIndex = getActiveButtonIndex();
    if (activeButtonIndex > 0) {
        activeButtonIndex--;
    }
    simulateButtonClick(activeButtonIndex);
}

function simulateButtonClick(index) {
    buttons[index].click();
}

prevButton.addEventListener('click', function() {
    goToPrevButton();
});

nextButton.addEventListener('click', function() {
    goToNextButton();
});

document.querySelector('#housesChangeButton').click();