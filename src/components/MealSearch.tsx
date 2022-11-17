import { Link } from "react-router-dom";
import useMealSearch from "../logic/useMealSearch";

const MealSearch = () => {
  const { meal, handleChange, handleSubmit } = useMealSearch();

  return (
    <div>
      <div>
        <h1>Ricerca la ricetta</h1>
        <form onSubmit={handleSubmit} action="#">
          <input
            placeholder="Search food"
            type="text"
            onChange={handleChange}
            autoFocus
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {meal &&
          meal.map((meal: any, index: number) => (
            <ul>
              <Link to={`/${meal.idMeal}`}>
                <li key={meal + index}>{meal.strMeal}</li>
              </Link>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default MealSearch;
