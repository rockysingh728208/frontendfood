import React, { useContext } from "react";
import Categories from "./ExploreMenuData";
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = () => {
  const { category, setCategory } = useContext(StoreContext);

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600">Explore Menu</h2>
      <p className="text-gray-600 max-w-2xl pt-3 mb-8">
        Dive into our diverse menu, crafted with love and the freshest ingredients.
      </p>
      <div className="flex gap-8 flex-wrap">
        {Categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setCategory(cat.name)}
            className={`cursor-pointer bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition duration-300 ${
              category === cat.name ? "border-2 border-blue-600" : ""
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-28 w-28 object-cover rounded-full mb-4"
            />
            <p className="text-lg font-medium text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
