// Client facing scripts here

const createDrinkElement = function (drink) {
  let $drink =
    `<article>
    <h2 class="section-header">CART</h2>
    <div class="cart-row">
      <span class="cart-item cart-header cart-column">${drink.name}</span>
      <span class="cart-price cart-header cart-column">${drink.price}</span>
    </div>
    <div class="cart-items">
      <div class="cart-row">
        <div class="cart-item cart-column">

          <span class="cart-item-title"></span>
        </div>
        <span class="cart-price cart-column"></span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
      </div>
    </article>`
  return $drink;
}


// const renderCart = function (drinks) {
//   // for (const drink of drinks) {

//   // $('#drinkListContainer').prepend(createDrinkElement(drink))
//   // $('#drinks-button').on('click', function (drink) {
//   //   $('#cart-items').prepend(createDrinkElement(drink))

//   // })

//   // }
// }




$(document).ready(function () {


  function loadCartItems() {
    $.get('/menu').then(function (drinkData) {
      // console.log("Drink Data:   ", drinkData);
      renderCart(drinkData);
    })
  }
  loadCartItems();

  let $addToCartButton = $('.menuButton')
  console.log($addToCartButton)

  // for (let i = 0; i < addToCartButton.length; i++) {
  //   const addButton = addToCartButton[i];
  $addToCartButton.on('click', (e) => {
    let drinkItem = $(e.target).parent().siblings()
    let drink = {
      name: drinkItem[0].outerText,
      price: drinkItem[2].outerText
    }
    console.log(drink)
    console.log('clicked')
    $('.cart-items').prepend(createDrinkElement(drink))
  })
  // }


  //can add remove

});
