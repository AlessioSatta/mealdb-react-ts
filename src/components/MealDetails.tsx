import { useEffect } from "react";
import useMealDetails from "../logic/useMealDetails";

const MealDetails = () => {
  const { id, meals, fetchById } = useMealDetails();

  useEffect(() => {
    if (!id) return;
    fetchById(id);
  }, [id]);

  return (
    <div>
      <h2>{meals?.strMeal}</h2>
      <p>{meals?.strArea}</p>
      <p>{meals?.strInstructions}</p>
      <img src={meals?.strMealThumb} alt="food" />
    </div>
  );
};

export default MealDetails;
