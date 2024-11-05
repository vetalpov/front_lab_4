const targetIndex = 4;
let firstClicked = false;
let colorIndex = 0;

const backgroundColors = ['#f0f0f0', '#d1c4e9', '#ffecb3', '#c8e6c9'];
const textColors = ['#ff5722', '#673ab7', '#ff9800', '#388e3c'];

document.querySelectorAll('[id^="item-"]').forEach((element, index) => {
    element.addEventListener('click', () => {
        if ((index + 1) === targetIndex && !firstClicked) {
            const firstElement = document.getElementById(`item-${targetIndex}`);
            firstElement.style.backgroundColor = backgroundColors[colorIndex % backgroundColors.length];
            firstElement.style.color = textColors[colorIndex % textColors.length];
            firstClicked = true;
        } else if (firstClicked) {
            const nextElement = document.querySelector(`#item-${index + 1}`);
            colorIndex++; 
            nextElement.style.backgroundColor = backgroundColors[colorIndex % backgroundColors.length];
            nextElement.style.color = textColors[colorIndex % textColors.length];
        }
    });
});

// Завдання 1 (залишаємо без змін)

// Завдання 2: Додавання функцій для роботи із зображенням
const imageContainer = document.getElementById("image-container");

function addImage() {
    // Перевіряємо, чи зображення вже додане
    if (!document.getElementById("amster-image")) {
        const newImage = document.createElement("img");
        newImage.id = "amster-image";
        newImage.src = "images/amster.jpg"; // Шлях до зображення в папці
        newImage.alt = "amster";
        newImage.width = 500;
        newImage.height = 280;
        imageContainer.appendChild(newImage); // Додаємо зображення до контейнера
    }
}

function increaseImage() {
    const img = document.getElementById("amster-image");
    if (img) {
        img.width *= 1.2;  // Збільшуємо ширину на 20%
        img.height *= 1.2; // Збільшуємо висоту на 20%
    }
}

function decreaseImage() {
    const img = document.getElementById("amster-image");
    if (img) {
        img.width *= 0.8;  // Зменшуємо ширину на 20%
        img.height *= 0.8; // Зменшуємо висоту на 20%
    }
}

function removeImage() {
    const img = document.getElementById("amster-image");
    if (img) {
        img.remove(); // Видаляємо зображення з DOM
    }
}
