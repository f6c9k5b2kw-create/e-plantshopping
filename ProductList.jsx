import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {name:"Snake Plant",cost:15},
      {name:"Spider Plant",cost:12},
      {name:"Peace Lily",cost:20},
      {name:"Boston Fern",cost:18},
      {name:"Rubber Plant",cost:25},
      {name:"Areca Palm",cost:30}
    ]
  },
  {
    category: "Aromatic Plants",
    plants: [
      {name:"Lavender",cost:15},
      {name:"Rosemary",cost:12},
      {name:"Mint",cost:10},
      {name:"Basil",cost:11},
      {name:"Jasmine",cost:22},
      {name:"Lemon Balm",cost:14}
    ]
  },
  {
    category: "Succulents",
    plants: [
      {name:"Aloe Vera",cost:16},
      {name:"Jade Plant",cost:18},
      {name:"Echeveria",cost:12},
      {name:"Haworthia",cost:14},
      {name:"Burro Tail",cost:19},
      {name:"Panda Plant",cost:17}
    ]
  }
];

function ProductList({ onHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav style={{
        backgroundColor:"#4CAF50",
        padding:"20px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        color:"white"
      }}>
        <h2>Paradise Nursery</h2>
        <a href="#home" onClick={onHome}>Home</a>
        <a href="#plants" onClick={() => setShowCart(false)}>Plants</a>
        <a href="#cart" onClick={() => setShowCart(true)}>
          🛒 Cart ({totalQuantity})
        </a>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div>
          <h1>Our Plants</h1>
          {plantsArray.map(category => (
            <section key={category.category}>
              <h2>{category.category}</h2>
              <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
                gap:"20px",
                padding:"20px"
              }}>
                {category.plants.map(plant => {
                  const image = "https://placehold.co/200x200/DAEBD5/245B32?text=" + encodeURIComponent(plant.name);
                  const added = cartItems.some(item => item.name === plant.name);

                  return (
                    <div className="product-card" key={plant.name}>
                      <img src={image} alt={plant.name} width="180" />
                      <h3>{plant.name}</h3>
                      <p>${plant.cost}</p>
                      <button
                        disabled={added}
                        onClick={() => handleAddToCart({...plant,image})}
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
