import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
const List = ({ subCats, maxPrice, sort, catId }) => {
  const subCategories = subCats || [];

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  if (error) {
    window.location.reload();
  }

  return (
    <div className="list">
      {loading ? (
        "loading"
      ) : error ? (
        "Error loading data."
      ) : (
        data?.map((item) => (
          <div key={item.id}>
            <Card item={item} key={item.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default List;
