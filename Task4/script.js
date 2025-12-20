
let currentIndex = 0;
const images = [
    "https://th.bing.com/th/id/OIP.FaRbwTk1duV45z8kNqhprQHaHa?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.mm.bing.net/th/id/OIP.XNbwfhrvMLSkLJCDhZfe4wHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://sourcesofinsight.com/wp-content/uploads/2022/10/Best-Motivational-Quotes.jpg",
    "https://th.bing.com/th/id/OIP.hiWrF7DxMCl9d1QsfDIfKgHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    
];

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    document.getElementById('carousel-img').src = images[currentIndex];
}

// 2. Fetch Data from API (Quotes)
const dataContainer = document.getElementById('data-container');
const fetchBtn = document.getElementById('fetch-btn');

async function fetchQuote() {
    try {
        dataContainer.innerHTML = "<p>Fetching...</p>";

        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        dataContainer.innerHTML = `<blockquote>"${data.slip.advice}"</blockquote>`;
    } catch (error) {
        dataContainer.innerHTML = "<p>Failed to load data.</p>";
    }
}

// Event Listeners
fetchBtn.addEventListener('click', fetchQuote);


fetchQuote();