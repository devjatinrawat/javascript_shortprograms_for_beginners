// Get the elements
const prev = document.querySelector('.left_icon');
const next = document.querySelector('.right_icon');
const carosel_img = document.querySelector('.main_banner');

// Array of image URLs
const images = [
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=75&fm=jpg&w=1080&fit=max",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=75&fm=jpg&w=1080&fit=max"
];

// Track the current image index
let currentIndex = 0;

// Function to go backwards (previous image)
function backwards() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;  // Go to last image if out of bounds
    }
    carosel_img.src = images[currentIndex];  // Update image source
}

// Function to go forward (next image)
function forward() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;  // Go to first image if reached last img
    }
    carosel_img.src = images[currentIndex];  // Update image source
}

// Attach event listeners to buttons
prev.addEventListener('click', backwards);
next.addEventListener('click', forward);
