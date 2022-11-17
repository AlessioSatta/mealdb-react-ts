import { useState } from "react";

const useMealSearch = () => {
  const [meal, setMeal] = useState<any>([]);
  const [search, setSearch] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const fetchSearch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setMeal(data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    fetchSearch();
  };

  return {
    meal,
    handleChange,
    handleSubmit,
  };
};

export default useMealSearch;
