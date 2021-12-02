// Client facing scripts here

const createItemElement = function (item) {
  let $item =
    `
    <div class="cart-row">
      <span class="cart-item cart-header cart-column">${item.name}</span>
      <span class="cart-price cart-header cart-column">${item.price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button data-id="${item.id}" class="btn btn-danger" type="button">REMOVE</button>
      </div>
    </div>
  `;
  return $item;
};

$(document).ready(function () {
  let $addToCartButton = $('.menuButton');

  $addToCartButton.on('click', function (e) {
    let menuItem = $(e.target).parent().siblings();
    let item = {
      id: e.target.getAttribute('data-id'),
      name: menuItem[0].outerText,
      price: menuItem[2].outerText
    };
    console.log("Item ---> ", item);
    $(this).prop("disabled", true);
    $('.cart-items').prepend(createItemElement(item));
    updateTotal();

  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

});
