
// script.js

function subscribeUser() {
  alert("Thank you for subscribing! You'll receive updates and special offers.");
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product + " added to cart!");
}

function storeFormData(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  sessionStorage.setItem('contactName', name);
  sessionStorage.setItem('contactEmail', email);
  sessionStorage.setItem('contactMessage', message);

  alert("Thank you for your message, " + name + "!");
}

function saveCustomOrder(event) {
  event.preventDefault();
  const type = document.getElementById('systemType').value;
  const size = document.getElementById('size').value;
  const notes = document.getElementById('comments').value;

  const customOrder = {
    type,
    size,
    notes,
    date: new Date().toISOString()
  };

  let orders = JSON.parse(localStorage.getItem('customOrders')) || [];
  orders.push(customOrder);
  localStorage.setItem('customOrders', JSON.stringify(orders));

  alert("Custom order submitted! We will contact you shortly.");
}
