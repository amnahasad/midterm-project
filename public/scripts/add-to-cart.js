console.log('here____________>');
let removeCartItemButton = document.getElementsByClassName('btn btn-danger');
// console.log(removeCartItemButton)

// for (let i = 0; i < removeCartItemButton.length; i++) {
//   const removeButton = removeCartItemButton[i];
//   removeButton.addEventListener('click', () => {
//     console.log('clicked')
//   })
// }

$(() => {
  // This will be called only on the two pre-existing buttons
  $('.btn-danger').on('click', function () {
    console.log('danger button');
  });
});


// will be called on any button with the class btn-danger
$(document).on('click', '.btn-danger', function (event) {
  let removeButton = event.target;
  let attribute = removeButton.getAttribute('data-id');
  let addToCartBttnID = "drinks-button-" + attribute;
  let addToCartBttn = document.getElementById(addToCartBttnID);
  removeButton.parentElement.parentElement.remove();
  console.log("data-id ---> ", attribute);
  $(addToCartBttn).prop("disabled", false);
  updateTotal();
  // console.log('click on the document');
});

$(document).on('input', '.cart-quantity-input', function (event) {

  updateTotal();
  // console.log('click on the document');
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


