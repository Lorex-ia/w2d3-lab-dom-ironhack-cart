// ITERATION 1

// function updateSubtotal(product) {
//   const priceElem = product.querySelector('.price span').innerText;
//   const quantityElem = product.querySelector('.quantity input').value;
//   const subTotalElem = product.querySelector('.subtotal span').innerText;


//     product.querySelector('.subtotal span').innerText = priceElem * quantityElem;
//         console.log(
//       'Calculating subtotal, yey!',
//       priceElem,
//       quantityElem,
//       priceElem*quantityElem,
//       );
// }

function calculateAll(product) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
//   // end of test

//   // ITERATION 2
let products = document.querySelectorAll('.product');

for (let i = 0; i< products.length; i++){
  let priceElems = products[i].querySelector('.price span').textContent;
  let quantityElems = products[i].querySelector('.quantity input').value;
  letsubTotalElems = products[i].querySelector('.subtotal span').textContent;

  products[i].querySelector('.subtotal span').textContent = priceElems * quantityElems;
}
  // console.log (priceElems, quantityElems, priceElems*quantityElems);

  // ITERATION 3


 let totalValue = 0
  products.forEach( product => {
    let price = product.querySelector('.price span').innerText
    let quantity = product.querySelector('.quantity input').value
    let subtotal = product.querySelector('.subtotal span').innerText
    subtotal = (product.querySelector('.price span').innerText ) * (product.querySelector('.quantity input').value)
    product.querySelector('.subtotal span').innerText = subtotal
    totalValue += subtotal
    return subtotal
  });
console.log(totalValue)

  document.querySelector('#total-value span').innerText = totalValue
  console.log (totalValue)

}
  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
let prod = document.querySelector(".product")
  prod.parentNode.removeChild(prod)

  calculateAll();
}





// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


const removeBtn = document.querySelectorAll('.btn-remove')
   removeBtn.forEach( remove =>{
     remove.addEventListener('click' , removeProduct)
   })
});
