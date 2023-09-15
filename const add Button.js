let count = 0;

const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

const countDisplay = document.getElementById('count');

addButton.addEventListener('click', () => {
    if (count < 10) {
        count++;
        countDisplay.textContent = count;
    }
});

removeButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});
