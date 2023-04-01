import { useMediaQuery } from "react-responsive";
import React, { Fragment, useState } from "react";
import "./Foods.css";
import FoodOrder from "./FoodOrder";

const Foods = (props) => {
  const [selectedFood, setSelectedFood] = useState("");
  const isLapOrDeskTop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const handleSelect = (event) => {
    setSelectedFood(
      props.foodItems.find((item) => {
        return item.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };

  return (
    <>
      {isMobile && (
        <Fragment>
          {!selectedFood && (
            <Fragment>
              <h4 className="foodTitleMobile">Choose from our Menu</h4>
              <ul className="ulFoodsMobile">
                {props.foodItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="liFoodsMobile"
                      data-id={item.id}
                      onClick={handleSelect}
                    >
                      <img
                        className="foodImgMobile"
                        src={require(`./images/${item.image}`)}
                        alt={item.name}
                      />
                      <div className="foodItemMobile">
                        <p className="foodDescMobile">{item.desc}</p>
                        <p className="foodPriceMobile">{item.price}$</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          )}

          {selectedFood && (
            <FoodOrder
              food={selectedFood}
              returnToMenu={() => setSelectedFood("")}
            />
          )}
        </Fragment>
      )}
      {isLapOrDeskTop&&(
       <Fragment>
       {!selectedFood && (
         <Fragment>
           <h4 className="foodTitle">Choose from our Menu</h4>
           <ul className="ulFoods">
             {props.foodItems.map((item) => {
               return (
                 <li
                   key={item.id}
                   className="liFoods"
                   data-id={item.id}
                   onClick={handleSelect}
                 >
                   <img
                     className="foodImg"
                     src={require(`./images/${item.image}`)}
                     alt={item.name}
                   />
                   <div className="foodItem">
                     <p className="foodDesc">{item.desc}</p>
                     <p className="foodPrice">{item.price}$</p>
                   </div>
                 </li>
               );
             })}
           </ul>
         </Fragment>
       )}

       {selectedFood && (
         <FoodOrder
           food={selectedFood}
           returnToMenu={() => setSelectedFood("")}
         />
       )}
     </Fragment>
      )}
    </>
  );
};

export default Foods;
