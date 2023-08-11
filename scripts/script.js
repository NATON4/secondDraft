function deleteCatalog() {
    let featuredHousesItems = document.querySelector('.featured-houses__items');
    while (featuredHousesItems.firstChild) {
        featuredHousesItems.removeChild(featuredHousesItems.firstChild);
    }
}

function createNewItem() {
    // Створюємо елемент div з класом "item__carcass"
    let newItem = document.createElement('div');
    newItem.classList.add('item__carcass');

    // Додаємо HTML-структуру внутрішніх елементів
    newItem.innerHTML = `
        <div class="item-carcass__header">
            <div class="item-header__image">
                <div class="item-image-preference">
                    <img class="image-preference__ico" src="images/item-image-fire-ico.svg">
                    <h5 class="image-preference__label">Popular</h5>
                </div>
            </div>
        </div>
        <div class="item-carcass__main">
            <h5 class="item-main__title">Roselands House</h5>
            <h5 class="item-main__price">$ 35.000.000</h5>
        </div>
        <div class="item-carcass__footer">
            <img class="item-footer__image" src="images/girl-seller-image.png">
            <div class="item-footer-seller">
                <h5 class="item-seller__name">Dianne Russell</h5>
                <h5 class="item-seller__location">Manchester, Kentucky</h5>
            </div>
        </div>
    `;

    let featuredHousesItems = document.querySelector('.featured-houses__items');
    featuredHousesItems.appendChild(newItem);
}