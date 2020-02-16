
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else
{
    ready()
}
function ready(){

                            // Remove Btn 
var removeCartItemBtn = document.getElementsByClassName("btn-danger")
for (var i =0 ; i< removeCartItemBtn.length;i++){
    var button = removeCartItemBtn[i]
    button.addEventListener('click', removeCartItem)
}
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i =0 ; i<quantityInputs.length;i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantatiyChanged)
    }
    var addToCartButton = document.getElementsByClassName('shop-item-button')
    for (var i = 0 ; i< addToCartButton.length;i++){
        var button = addToCartButton[i]
        button.addEventListener('click',addToCartClicked)
    }
    document.getElementsByClassName("btn-purchase")[0].addEventListener('click',purchaseClicked)
}
function removeCartItem(evet){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function purchaseClicked(){
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function quantatiyChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value=1
    }
    updateCartTotal()
}
function addToCartClicked(event){
    var button  =  event.target
    var shopItem = button.parentElement.parentElement
    var title  = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title,price,imageSrc)
    updateCartTotal()

}

                         // Adding Item to cart
function addItemToCart(title , price , imageSrc){

    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems  = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart , If you want to increase please choose quantity at the end of page')
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>
    `
    cartRow.innerHTML=cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantatiyChanged)
}

// Updating cart such as :  Total Price 


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

                             // Image Slider 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
var slideIndex1 = 1;
showDivs1(slideIndex);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}
function plusDivs2(n) {
    showDivs1(slideIndex1 += n);
  }

function showDivs1(n) {
  var j;
  var y = document.getElementsByClassName("mySlides");
  if (n > y.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideIndex1-1].style.display = "block";  
}
// If image broken

function epic(c) {
    c.onerror='';
    c.src='Image/2.png';
};