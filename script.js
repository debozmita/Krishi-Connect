function buyCrop(cropName) {
    alert("Thank you! Your request to buy " + cropName + " directly from the farmer has been submitted.");
}

function rentEquipment(itemName) {
    alert("Rental request for " + itemName + " submitted. The machinery owner will contact you shortly.");
}

function bookAdvisory(serviceName) {
    alert("Appointment booked for " + serviceName + ". An agricultural specialist will reach out to you.");
}

function openContact() {
    alert("Welcome to Krishi-Connect! Navigation is active.");
}

function filterItems() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let cardText = cards[i].innerText.toLowerCase();
        if (cardText.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function filterCategory(category) {
    let cards = document.querySelectorAll('#cropGrid .card');
    let buttons = document.getElementsByClassName('filter-btn');

    for (let btn of buttons) {
        btn.classList.remove('active');
    }
    event.target.classList.add('active');

    for (let i = 0; i < cards.length; i++) {
        let cardCategory = cards[i].getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}