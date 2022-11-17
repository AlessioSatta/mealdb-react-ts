import { useState } from "react";
import { useParams } from "react-router-dom";

const useMealDetails = () => {
    const { id } = useParams<string>();
    const [meals, setMeals] = useState<any>([]);

    const fetchById = async (id: string) => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setMeals({ ...data.meals[0] });
      } catch (error) {
        console.error(error);
      }
    };

    return {
        id,
        meals,
        fetchById
    }
}

export default useMealDetails;
