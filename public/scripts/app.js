// Client facing scripts here
const createMenuList = function(menuList) {
let $menu =
` <div id="menu-list" data="<%=menuList.name%>">${menuList.name} ${menuList.description} ${menuList.price}
<button id="drinks-button" style="
background-color: #E887BB;
color: #FFFFFF;
border: transparent;
padding-top: 3px;
padding-bottom: 3px;
font-size: small;"
type="submit">Add item</button>
</div>`
  return $menu;
}



const renderMenu = function (menuList){
  for(const item of menuList){
    $('.menu-container').prepend(createMenuList(item))
    // $('#add-item-button').on('click', function(event){

    // })

  }
}




$(document).ready(function() {
  function loadMenuItems(){
    $.get('api/menu').then(function (menuData) {
      renderMenu(menuData);
    })
  }
  loadMenuItems();

});


