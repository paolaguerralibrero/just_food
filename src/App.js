import appStyles from "./App.module.css";
import React, { Fragment, useState } from "react";
import Foods from "./Foods";
export const foodItemsContext = React.createContext();


const App = () => {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Chicken Burger",
      quantity: 40,
      desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnaise,",
      price: "24",
      image: "cb.jpg",
    },
    {
      id: 2,
      name: "Veg Burger",
      quantity: 30,
      desc: "Plant-based burger — lettuce, tomato, vegan cheese and mayonnaise",
      price: "22",
      image: "vb.jpg",
    },
    {
      id: 3,
      name: "Chips",
      quantity: 50,
      desc: "Potato chips fried to perfection",
      price: "7",
      image: "chips.jpg",
    },
    {
      id: 4,
      name: "Ice Cream",
      quantity: 30,
      desc: "Ice cream - Vanilla ice cream double scoop",
      price: "4",
      image: "ic.jpg",
    },
    {
      id: 4,
      name: "Croquetas",
      quantity: 300,
      desc: "Croquetas - Little pieces of heaven",
      price: "4",
      image: "cro.jpg",
    },
  ]);

  const updateMenuItemQuantity = (id, orderQuantity) => {
    const updatedMenuItems = menuItems.map((item) => {
      if (item.id === id)
        return {
          ...item,
          quantity: item.quantity - orderQuantity,
        };
      return item;
    });
    setMenuItems(updatedMenuItems);
  };

  return (
    <foodItemsContext.Provider value={menuItems}>
    <div className={appStyles.App}>
      <button
        className={appStyles.togglebButton}
        onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
      >
        {isChooseFoodPage ? "Availability Check" : "Order Food"}
      </button>
      <h3 className={appStyles.title}>Just Food Online Shop</h3>
      {!isChooseFoodPage && (
        <Fragment>
          <h4 className={appStyles.subTitle}>Menu Availability</h4>
          <ul className={appStyles.ulApp}>
            {menuItems.map((item) => {
              return (
                <li key={item.id} className={appStyles.liApp}>
                  {item.name} - {item.quantity}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}


      {isChooseFoodPage && 
      <Foods 
      foodItems={menuItems}
      />}

    </div>
    </foodItemsContext.Provider>
  );
};

export default App;
