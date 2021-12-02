// Client facing scripts here

const createDrinkElement = function (drink) {
  let $drink =
    `
    <div class="cart-row">
      <span class="cart-item cart-header cart-column">${drink.name}</span>
      <span class="cart-price cart-header cart-column">${drink.price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
    </div>
  `
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
  $('.menuButton').on('click', function(e) {
    let drinkItem = $(e.target).parent().siblings()
    let drink = {
      name: drinkItem[0].outerText,
      price: drinkItem[2].outerText
    }
    $(this).prop("disabled", true)
    console.log(this);
    // console.log(drink)
    // console.log('clicked');
    console.log("THis is the drink element", createDrinkElement(drink));
    $('.cart-items').prepend(createDrinkElement(drink))
    // $(".menuButton").on("click");
    // $(".menuButton").bind("click", (e) => {
    //   let drinkItem = $(e.target).parent().siblings()
    //   let drink = {
    //     name: drinkItem[0].outerText,
    //     price: drinkItem[2].outerText
    //   }
    // });


  })
  // removeButton.addEventListener('click', () => {
  //   console.log('clicked')
  // })
  // }


  //can add remove

});
