import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const { id, subCatId } = useParams();
  const catId = parseInt(id);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCatId, setSelectedSubCatId] = useState(subCatId ? parseInt(subCatId) : null);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  if (error) {
    window.location.reload();
  }
  
  const handleChange = (e) => {
    const newSelectedId = e.target.value === "" ? null : parseInt(e.target.value);
    setSelectedSubCatId((prevSelectedId) =>
      prevSelectedId === newSelectedId ? null : newSelectedId
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {loading ? (
            "Loading categories..."
          ) : error ? (
            "Error loading categories."
          ) : (
            <div>
              <input
                type="radio"
                id="unselect"
                value=""
                checked={selectedSubCatId === null}
                onChange={handleChange}
              />
              <label htmlFor="unselect" style={{ marginLeft: "0.5em" }}>
                None
              </label>

              {data?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="radio"
                    id={item.id}
                    value={item.id}
                    checked={selectedSubCatId === item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={4000}
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              checked={sort === "asc"}
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              checked={sort === "desc"}
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCatId !== null ? [selectedSubCatId] : []}
        />
      </div>
    </div>
  );
};

export default Products;
