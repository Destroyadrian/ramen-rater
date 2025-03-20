const ramens = [
    { 
        id: 1, 
        name: "Shoyu Ramen", 
        restaurant: "Ichiran", 
        image: "images/shoyu.jpg", 
        rating: 5, 
        comment: "Delicious!" 
    },
    { 
        id: 2, 
        name: "Miso Ramen", 
        restaurant: "Menya", 
        image: "images/miso.jpg", 
        rating: 4, 
        comment: "Very flavorful!" 
    },
    { 
        id: 3, 
        name: "Tonkotsu Ramen", 
        restaurant: "Ramen-ya", 
        image: "images/tonkotsu.jpg" 
    },
    { 
        id: 4, 
        name: "Nirvana Ramen", 
        restaurant: "Pyongyang", 
        image: "images/nirvana.jpg" 
    },
    { 
        id: 5, 
        name: "Naruto Ramen", 
        restaurant: "Seongnam", 
        image: "images/naruto.jpg" 
    },
    { 
        id: 6, 
        name: "Kojiro Ramen", 
        restaurant: "Longthin'", 
        image: "images/kojiro.jpg" 
    },
    { 
        id: 7, 
        name: "Gyukotsu Ramen", 
        restaurant: "Kotsu", 
        image: "images/gyukotsu.jpg" 
    }
];

function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        menu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detailImage = document.querySelector('.detail-image');
    const name = document.querySelector('.name');
    const restaurant = document.querySelector('.restaurant');
    const rating = document.querySelector('.rating span');
    const comment = document.querySelector('.comment span');

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    name.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    rating.textContent = ramen.rating || 'N/A';
    comment.textContent = ramen.comment || 'No comment yet';
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById('name').value,
            restaurant: document.getElementById('restaurant').value,
            image: document.getElementById('image').value,
            rating: document.getElementById('rating').value,
            comment: document.getElementById('comment').value
        };

        ramens.push(newRamen);
        
        const menu = document.getElementById('ramen-menu');
        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener('click', () => handleClick(newRamen));
        menu.appendChild(img);

        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);