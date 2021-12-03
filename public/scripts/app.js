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

const createSummaryElement = function (item) {
  let $item =
    `
    <div class="cart-row">
      <span class="cart-item cart-header cart-column">${item.name}</span>
      <span class="cart-price cart-header cart-column">${item.price}</span>
      <div class="cart-quantity cart-column">
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
    // console.log("Item ---> ", item);
    $(this).prop("disabled", true);
    $('.cart-items').prepend(createItemElement(item));

    // let random = $('.cart-items')
    // console.log(random)

    updateTotal();
    // $('.modal-body').prepend($('.cart-items'));


  });




  let $addToModal = $('#purchase-btn');

  let cartItems = []

  $addToModal.on('click', function (e) {
    cartItems = []
    let purchaseButton = $('.cart-items > .cart-row')
    purchaseButton.each((idx, el) => {

      let cartName = $(el).find('.cart-item').text()

      let cartQTY = $(el).find('.cart-quantity').children('input').val()

      let obj = {}
      obj[cartName] = cartQTY
      cartItems.push(obj)

      // console.log(cartItemQTY)
      // cartItemPrices = $(el).find('.cart-price').text()

    })
    let totalPrice = { 'total': $('#total-price').text() }

    cartItems.push(totalPrice)
    console.log(cartItems)
    // console.log(purchaseButton)


    // let item = {
    //   id: e.target.getAttribute('data-id'),
    //   name: menuItem[0].outerText,
    //   price: menuItem[2].outerText
    // };
    // console.log("Item ---> ", item);
    // $(this).prop("disabled", true);
    // $('.cart-items').prepend(createItemElement(item));

  })




  /*

  1) intially set to disable..     with ID of --> id="purchase-btn"

  2) access item in the cart
  3) if no items in the cart
      - leave purchase button disabled
      - error message
  4) access contact form information
  5) if contact form is not complete
      - leave purchase button disabled
      - error message
  DEFINTION ---> contact form complete = Name & phoneNumber are not Null

  6) ELSE enable purchase button
      - data-toggle + "modal"
  7) fill the modal with cart info + contact information
      - ?



  */

  // if (!tweet) {
  //   $('#errorPrompt').text("Tweet cannot be empty! Don't be shy, we don't bite :) ");
  //   $('#errorPrompt').slideDown("slow");
  //   $('#errorPrompt').delay(3500).slideUp("slow");
  //   return;
  // }
  // if (tweet > 140) {
  //   $('#errorPrompt').text("Tweet can't be longer than 140 characters!");
  //   $('#errorPrompt').slideDown("slow");
  //   $('#errorPrompt').delay(5000).slideUp("slow");
  //   return;
  // }

  // $('#myModal').on('shown.bs.modal', function () {


  // $('#myInput').trigger('focus')
  // })







});
