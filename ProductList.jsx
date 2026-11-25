import React, { useState } from "react";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", cost: 15, image: "https://placehold.co/200x200?text=Snake+Plant" },
      { name: "Spider Plant", cost: 12, image: "https://placehold.co/200x200?text=Spider+Plant" }
    ]
  },
  {
    category: "Aromatic Plants",
    plants: [
      { name: "Lavender", cost: 20, image: "https://placehold.co/200x200?text=Lavender" },
      { name: "Rosemary", cost: 18, image: "https://placehold.co/200x200?text=Rosemary" }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      { name: "Aloe Vera", cost: 14, image: "https://placehold.co/200x200?text=Aloe+Vera" },
      { name: "Mint", cost: 10, image: "https://placehold.co/200x200?text=Mint" }
    ]
  }
];

function ProductList({ cart = [], setCart }) {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    setCart([...cart, { ...plant, quantity: 1 }]);
    setAddedItems(prev => ({
      ...prev,
      [plant.name]: true
    }));
  };

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>

      {plantsArray.map(group => (
        <section key={group.category}>
          <h2>{group.category}</h2>

          <div className="plant-grid">
            {group.plants.map(plant => (
              <div className="plant-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.cost}</p>

                <button
                  disabled={addedItems[plant.name] ||
                    cart.some(item => item.name === plant.name)}
                  onClick={() => handleAddToCart(plant)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
