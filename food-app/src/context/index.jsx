import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailData] = useState(null);
  const [favoritestList, setFavoritestList] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }
  function handleAddToFavorite(getCurrentItem) {
    let cpyFavoriteList = [...favoritestList];
    const index = favoritestList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavoriteList.push(getCurrentItem);
    } else {
      cpyFavoriteList.splice(index);
    }
    setFavoritestList(cpyFavoriteList);
  }

  console.log(loading, recipeList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        loading,
        recipeList,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailData,
        handleAddToFavorite,
        favoritestList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
