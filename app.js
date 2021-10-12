// slowMath.add(6,2)
// .then((sum) => {
//     console.log('Sum of 6 and 2 is' ,sum );
//     return slowMath.multiply(sum, 2);
//  }) .then((product) => {
//     console.log('Product of Answer and 2 is',product);
//     return slowMath.divide(product, 4);
//  }) .then((quotient) => {
//      console.log('Result divided by 4 is', quotient);
//      return slowMath.subtract(quotient, 3);
//  }) .then((lake) => {
//      console.log('Add 98 to', lake);
//      return slowMath.add(98, lake);
//  }).then((remainder) => {
//      console.log('result divided by to is', remainder);
//      return slowMath.remainder(remainder, 2);
//  }).then((states) => {
//      console.log ('Result times 50 is', states);
//      return slowMath.multiply(states, 50);
//  }) .then((eye) => {
//      console.log ('Remainder from dividiving the result by 40 is', eye);
//     return slowMath.remainder(eye, 40);
//  }) .then((drop) => {
//      console.log ('the result plus 32 is' ,drop);
//      return slowMath.add(drop, 32);
//  }) .then((final) => {
//     console.log ('the final result is', final);
//     return slowMath.add(final, 0);
//  }).catch(function(err) {
//     console.log ('Failed', err);
//  }) 




    

 async function doMath() {
     try{
         let add = await slowMath.add(6,2);
         console.log(add);
         let product = await slowMath.multiply(add, 2);
         console.log(product);
         let quotient = await slowMath.divide(product, 4);
         console.log(quotient);
         let subtract = await slowMath.subtract(quotient, 3);
         console.log(subtract);
         let add2 = await slowMath.add(subtract,98);
         console.log(add2);
         let remainder = await slowMath.remainder(add2, 2);
         console.log(remainder);
         let product2 = await slowMath.multiply(remainder, 50);
         console.log(product2);
         let remainder2 = await slowMath.remainder(product2, 40);
         console.log(remainder2);
         let result = await slowMath.add(remainder2,32);
         console.log(result);
         let final = await slowMath.add(result,0);
         console.log(final);
         
     }catch (err) {
         console.log(err);
     }
 
    }
