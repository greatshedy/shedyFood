import React, { useEffect, useState } from "react";
import Nav from "../componenet/Nav";
import { useSearch } from "../store";
import "./App.css";
import FoodCard from "../componenet/FoodCard";

function Food() {
  const { search, setSearch } = useSearch();
  const [info, setInfo] = useState([]);

  const Fetchdata = async (search1) => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${
        search1 === "" ? "a" : search1
      }`
    );
    const data1 = await data.json();
    console.log(data);
    setInfo(data1.meals);
  };
  console.log(info);

  useEffect(() => {
    Fetchdata(search);
  }, [search]);

  // console.log(info)
  return (
    <div>
      <Nav />
      <div className="food">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Food by first letter..."
        />
      </div>
      <div className="foodmenudiv">
        {info.map((item, index) => {
          return (
            <FoodCard
              key={index}
              img={item.strMealThumb}
              name={item.strMeal}
              desc={item.strInstructions}
              cat={item.strCategory}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Food;
