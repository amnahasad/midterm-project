// Client facing scripts here

const createNewOrder = function () {

};


$(document).ready(function () {
  // $('#drinks').on('submit', function(event) {
  //   console.log("drinks");

  // })

  const createDrinkElement = function (drink) {

    <div id="drink" data="<%=drink.name%>"> ${drink.name}, ${drink.description}, ${drink.price}
      <button id="drinks-button" style="
      background-color: #E887BB;
      color: #FFFFFF;
      border: transparent;
      padding-top: 3px;
      padding-bottom: 3px;
      font-size: small;"
        type="submit">Add item</button>
    </div>

  }
});


