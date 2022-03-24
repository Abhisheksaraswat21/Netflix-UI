import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import './PlansScreen.css';
// import {query, collection, where} from "firebase";

function PlansScreen() {
const [products, setProducts] = useState([]);


useEffect(() => {
    // query(collection(db, "products"), where("active", "==", true))
  db.collection('products').where("active","==",true)
  //onSnapshot is a realtime listener but we dont really need it as plans wont be changing
  //get gives the querySnapshot kyuki humne active se chaanta hai data ko
  .get().then(querySnapshot => {

      const products ={};

      querySnapshot.forEach(async productDoc => {
          //data is the data inside each document of product

          //mtlb hr doc ki id hai to products vaiable me usme id ki location leli aur fir uska data daal dia
products[productDoc.id] = productDoc.data();

//there is one more collection inside productdoc that has the price
const priceSnap = await productDoc.ref.collection('prices').get();

//there can be more than1 price in that section
priceSnap.docs.forEach(price => {
    products[productDoc.id].prices = {
        priceId: price.Id,
        //this gives data inside subdocument of price
        priceData: price.data()
    }
});
      });
    
      setProducts(products);

  });

  
}, []);

console.log(products);


  return (

   

    <div className='plansScreen'> 
    
    

    {/* //object.entries give the array in the form of key value pair
    //products was an object so we wanted an array out of it */}


    {Object.entries(products).map(({productId, productData})=> {

   //add some logic to check if the user subscription is active

   

// <div className="plansScreen__plan">
  
//   <div className='planScreen__info'>
    
//    <h5> {productData.name} </h5>
//    <h6>{productData.description}</h6>

//    <button>
//      subscribe
//    </button>
    
//     </div>
//   </div>

  


    })}

    
    
    
    </div>
  )
}

export default PlansScreen