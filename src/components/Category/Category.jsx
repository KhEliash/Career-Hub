import { useEffect, useState } from "react";
import CatCard from "../card/CatCard";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  // console.log(category[0]);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row justify-around items-center gap-3
       mt-8"
      >
        {category.map((cat) => (
          <CatCard key={cat.id} cat={cat}></CatCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
