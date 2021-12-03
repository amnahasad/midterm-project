const { twilio } = require("../../server");
const createItemElement = function (item) {
  let $item = `
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
  let $item = `<div>
  <br>
    <span class="modal-firstName">${item.firstName}</span>
    <span class="modal-lastName">${item.lastName}</span><br>
    <span class="modal-phoneNumber">${item.phoneNumber}</span><br>
    <span class="modal-comments">Comments: ${item.comments}</span>
    </div>
    <br>`;
  return $item;
};

const createSummaryElement = function (cartItems) {
  let items = "";
  for (const item of cartItems) {
    let itemEl = `<span class="modal-item-name">${item.name}</span>
    <span class="modal-item-price">\n${item.quantity}</span>
    <div class="modal-quantity">`;

    items += itemEl;
    console.log(item);
  }
  let $obj = `
    <div class="order-summary-modal">
      ${items}
      </div>
      </div>
  `;
  return $obj;
};

$(document).ready(function () {
  let $addToCartButton = $(".menuButton");

  $addToCartButton.on("click", function (e) {
    let menuItem = $(e.target).parent().siblings();
    let item = {
      id: e.target.getAttribute("data-id"),
      name: menuItem[0].outerText,
      price: menuItem[2].outerText,
    };
    $(this).prop("disabled", true);
    $(".cart-items").prepend(createItemElement(item));
    updateTotal();
  });

  let $addToModal = $("#purchase-btn");
  let cartItems = [];

  $addToModal.on("click", function (e) {
    cartItems = [];
    let purchaseButton = $(".cart-items > .cart-row");
    purchaseButton.each((idx, el) => {
      let cartName = $(el).find(".cart-item").text();
      let cartQTY = $(el).find(".cart-quantity").children("input").val();
      let obj = {};
      obj["name"] = cartName;
      obj["quantity"] = cartQTY;
      cartItems.push(obj);
    });
    let totalPrice = { total: $("#total-price").text() };
    let htmlTotalPrice = `<span class="modal-item-total">Total: ${totalPrice["total"]}</span>`;
    let contactInfo = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      phoneNumber: $("#phone").val(),
      comments: $("#comments").val(),
    };
    $("#modal-items").prepend(
      createSummaryElement(cartItems),
      htmlTotalPrice,
      createContactInfoElement(contactInfo)
    );
    app.get("/sendSMS", (req, res) => {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;

      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const twilio = require('twilio');
      const client = new twilio(accountSid, authToken);
      client.messages
        .create({
          body: 'Hey, thank you for your order and choosing Lounge Café. Your order will be ready in 20 minutes.',
          to: process.env.PHONE_NUMBER,
          from: '+12267733762',
        })
        .then(() => {
          res.redirect('/')
          console.log(message.sid)
        });
    })
  });
});
