const applyCoupon = item => discount => {item.price = item.price - (item.price * discount / 100); return item;}

const item = {
    "name":"apple",
    "type": "regular",
    "category": "fruit",
    "price":200

}

console.log(applyCoupon(item)(10).price);
