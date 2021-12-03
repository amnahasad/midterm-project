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
const createContactInfoElement = function (item) {
  let $item =
    `<div>
  <br>
    <span class="modal-firstName">${item.firstName}</span>
    <span class="modal-lastName">${item.lastName}</span><br>
    <span class="modal-phoneNumber">${item.phoneNumber}</span><br>
    <span class="modal-comments">Comments: ${item.comments}</span>
    </div>
    <br>`
  return $item;
};

const createSummaryElement = function (cartItems) {
  let items = ''
  for (const item of cartItems) {

    let itemEl = `<span class="modal-item-name">${item.name}</span>
    <span class="modal-item-price">\n${item.quantity}</span>
    <div class="modal-quantity">`

    items += itemEl
    console.log(item)

  }
  let $obj =
    `
    <div class="order-summary-modal">
      ${items}

      </div>
      </div>
  `;


  return $obj;
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

  let cartItems = [];

  // let newObj = {};






  $addToModal.on('click', function (e) {
    cartItems = []
    let purchaseButton = $('.cart-items > .cart-row')
    purchaseButton.each((idx, el) => {

      let cartName = $(el).find('.cart-item').text()

      let cartQTY = $(el).find('.cart-quantity').children('input').val()

      let obj = {};
      obj['name'] = cartName
      obj['quantity'] = cartQTY
      cartItems.push(obj)



    })
    let totalPrice = { 'total': $('#total-price').text() }
    // console.log(cartItems)




    let htmlTotalPrice = `<span class="modal-item-total">Total: ${totalPrice['total']}</span>`

    // <span class="modal-item-total">${obj.total}</span>
    let contactInfo = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      phoneNumber: $('#phone').val(),
      comments: $('#comments').val()
    }
    $('#modal-items').prepend(createSummaryElement(cartItems), htmlTotalPrice, createContactInfoElement(contactInfo));

    twillio()
    // $.ajax("/sendSMS", {


    // })


    // console.log($('#lastName').val())
    // console.log($('#firstName').val())
    // console.log($('#phone').val());
    // console.log($('#comments').val());




    // $(form-control)




    // cartItems.forEach(obj => {


    // if (cartItems[-1]) {
    //   console.log('CART ITEMS->', obj['total'])
    // }



    // console.log('CART ITEMS->', obj['name'])
    // console.log('CART ITEMS->', obj['quantity'])

    // Object.keys(obj)


    // })

    // console.log(purchaseButton)


    // let item = {
    //   id: e.target.getAttribute('data-id'),
    //   name: menuItem[0].outerText,
    //   price: menuItem[2].outerText
    // };
    // console.log("Item ---> ", item);
    // $(this).prop("disabled", true);
    // $('.cart-items').prepend(createItemElement(item));

    // cartItems.forEach(obj => {

    //   newObj = {
    //     name: Object.values(obj)
    //   }
    //   console.log('newObj Object -->', newObj)
    // })
    // return newObj
  })


  // console.log(cartItems)


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



  // $('#myModal').on('shown.bs.modal', function () {


  // $('#myInput').trigger('focus')
  // })







});
