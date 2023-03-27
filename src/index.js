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

document.addEventListener('DOMContentLoaded', () => {
const servUrl = 'http://localhost:3000/toys';
fetch(servUrl)
  .then(response => response.json())
  .then(data => {
    const myDiv = document.querySelector('.card');
    data.forEach(obj => {
      const objDiv = document.createElement('div');
      objDiv.innerHTML = `
        <h2>${obj.name}</h2>
        <p>${obj.description}</p>
        <img src="${obj.image}">
      `;
      myDiv.appendChild(objDiv);
    });
  })
  .catch(error => console.error(error));
})