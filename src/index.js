let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const servUrl = 'http://localhost:3000/toys';
const toyCollection = document.getElementById('toy-collection');
document.addEventListener('DOMContentLoaded', () => {
  fetch(servUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(obj => {
        const div = document.createElement('div');
        div.className = 'card';
        createCard(obj, div)
        toyCollection.appendChild(div);
      });
    })
    .catch(error => console.error(error));
});

function createCard(data, parent) {
  const h2 = document.createElement('h2');
  h2.textContent = data.name;
  const img = document.createElement('img');
  img.src = data.image;
  img.className = 'toy-avatar';
  const p = document.createElement('p');
  p.textContent = data.likes;
  const button = document.createElement('button');
  button.className = 'like-btn';
  button.id = data.id;

  parent.appendChild(h2)
  parent.appendChild(img)
  parent.appendChild(p)
  parent.appendChild(button)
}
