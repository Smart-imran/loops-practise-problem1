let shopingCart = {
    books: 3,
    mouse: 2,
    pen: 5,
    sunglass: 1

};

const keys = Object.keys(shopingCart);

for (let i = 0; i < keys.length; i++) {
    let properNames =(keys[i]);
    let properValues =shopingCart[properNames];
    //console.log(properNames,properValues);

}

//for in loop
for (const properNames in shopingCart) {
    const values = shopingCart[properNames];
    console.log(properNames,values);
    
}