console.log('here____________>');
let removeCartItemButton = document.getElementsByClassName('btn btn-danger');

$(() => {
  $('.btn-danger').on('click', function () {
    console.log('danger button');
  });
});


$(document).on('click', '.btn-danger', function (event) {
  let removeButton = event.target;
  let attribute = removeButton.getAttribute('data-id');
  let addToCartBttnID = "drinks-button-" + attribute;
  let addToCartBttn = document.getElementById(addToCartBttnID);
  removeButton.parentElement.parentElement.remove();
  console.log("data-id ---> ", attribute);
  $(addToCartBttn).prop("disabled", false);
  updateTotal();

});

$(document).on('input', '.cart-quantity-input', function (event) {

  updateTotal();

});


const updateTotal = function () {
  let fullCart = document.getElementsByClassName('cart-items')[0];
  let item = fullCart.getElementsByClassName('cart-row');
  let total = 0;
  let finalTotal = document.getElementById('total-price');

  for (let i = 0; i < item.length; i++) {
    let priceBox = item[i].getElementsByClassName('cart-price')[0];
    let qty = item[i].getElementsByClassName('cart-quantity-input')[0];
    let qtyVal = qty.value;
    let priceVal = priceBox.innerText;

    if (qtyVal > 0) {
      total += qtyVal * priceVal;
    }


  }
  finalTotal.innerText = total;
  return finalTotal;
};
updateTotal();


