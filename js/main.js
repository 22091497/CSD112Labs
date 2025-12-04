// PART 1: APPETIZER'S TAB
const navbar = document.getElementById('navbar');
const content = document.getElementById('content');

const appetizersBtn = document.createElement('button');
appetizersBtn.textContent = 'Appetizers';
appetizersBtn.classList.add('nav-tab');
navbar.appendChild(appetizersBtn);

function showAppetizers() {
    content.innerHTML = '';
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('appetizers-container');
    const items = ['Bruschetta', 'Garlic Bread', 'Spring Rolls'];
    items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${item}</h3>`;
        flexContainer.appendChild(div);
    });
    content.appendChild(flexContainer);
}
appetizersBtn.addEventListener('click', showAppetizers);