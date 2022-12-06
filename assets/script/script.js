var price = 200;
var discount = 30
;
var inStock = true;

if(price <= 200 && discount < 15 && inStock == true) {
    alert("Buy everything!!!!")
} else if (price > 200 || discount > 15 || inStock == false) {
    alert("Do not buy, it a horrible offer!!!!")
}