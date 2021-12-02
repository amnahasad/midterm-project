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

  // 'context'
  // will be called on any button with the class btn-danger
  $(document).on('click', '.btn-danger', function (event) {
    let removeButton = event.target;
    removeButton.parentElement.parentElement.remove();
    console.log('click on the document');
  });



});;


// $(document).ready(function ($) {

//   let $addToCartButton = $('.menuButton')
//   // console.log($addToCartButton)

//   // for (let i = 0; i < addToCartButton.length; i++) {
//   //   const addButton = addToCartButton[i];
//   $addToCartButton.on('click', () => {
//     console.log('clicked')
//   })

// })




/*
append item to cart,
unbind remove,
bind remove button + new remove button,

*/

