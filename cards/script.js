document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');

    const cards = [
        { title: 'Card 1', description: 'This is the first card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 2', description: 'This is the second card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 3', description: 'This is the third card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 4', description: 'This is the fourth card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 5', description: 'This is the fifth card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 6', description: 'This is the sixth card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 7', description: 'This is the seventh card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 8', description: 'This is the eighth card.', imageUrl: 'https://via.placeholder.com/250' },
        { title: 'Card 9', description: 'This is the ninth card.', imageUrl: 'https://via.placeholder.com/250' }
    ];

    cardContainer.innerHTML = cards.map(card => `
        <div class="card">
            <img src="${card.imageUrl}" alt="${card.title}">
            <div class="card-content">
                <h3 class="card-title">${card.title}</h3>
                <p class="card-description">${card.description}</p>
            </div>
        </div>
    `).join('');
});
