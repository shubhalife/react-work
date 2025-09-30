import { useEffect, useState } from "react";

const useRestuarantMenu = (resId) => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0726295&lng=72.8844721&restaurantId=" +
        resId +
        "&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
    );

    const json = await menu.json();

    const menusjson =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards;
    console.log(menusjson);

    setMenus(menusjson);
  };

  return menus;
};

export default useRestuarantMenu;
