window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});










function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = "";

  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.qty;
    cartContainer.innerHTML += `
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price} x ${item.qty}</p>
        <button onclick="removeItem('${item.id}')">Remove</button>
      </div>
    `;
  });

  cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

