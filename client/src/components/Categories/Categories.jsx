import React from "react";
import "./Categories.scss";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../makeRequest";

const Categories = () => {
  const nav= useNavigate();

  const handleCategory = async ({ catId, value }) => {
    try {
      const response = await makeRequest.get(
        `/sub-categories?[filters][categories][id][$eq]=${catId}`
      );
      const data = response.data.data;
      const subCategory = data.find(
        (subCategory) => subCategory.attributes.title === value
      );
  
      if (subCategory) {
        nav(`/products/${catId}/${subCategory.id}`);
      }
    } catch (error) {
      console.error(error);
      window.location.reload();
    }
  };
  

  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => handleCategory({ catId: 1, value: "Suit" })}>
              Women Suits
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => handleCategory({ catId: 2, value: "Shoes" })}>
              Men Shoes
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button onClick={handleCategory}>
                <Link to="/products/2" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button onClick={() => handleCategory({ catId: 1, value: "Jacket" })}>
                Women Jacket
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://media.4rgos.it/i/Argos/0422-m0014-m007-m050-asym-m008-m022-sekonda-brandshop-menswatches?maxW=1200&qlt=75&fmt.jpeg.interlaced=true"
            alt=""
          />
          <button onClick={() => handleCategory({ catId: 2, value: "Watches" })}>
              MENS WATCHES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
