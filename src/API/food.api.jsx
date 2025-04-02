import React, { useContext } from "react";
import { StoreContext } from "../context/storeContext"; 

const RecipeList = () => {
  const { foodData } = useContext(StoreContext);

  return (
    <div>
      <h1>Food List</h1>
      {foodData.length === 0 ? (
        <p>Loading recipes...</p>
      ) : (
        <ul>
          {foodData.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.name}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
