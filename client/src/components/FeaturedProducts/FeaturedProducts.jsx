import React, { useRef, useState, useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";

const FeaturedProducts = ({ type }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  if (error) {
    window.location.reload();
  }

  const listRef = useRef();

  useEffect(() => {
    const updateClickLimit = () => {
      setClickLimit(window.innerWidth / 230);
    };
    window.addEventListener("resize", updateClickLimit);
    return () => {
      window.removeEventListener("resize", updateClickLimit);
    };
  }, []);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="featuredProducts">
      <Box className="top" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
        <h1>{type} products</h1>
        {type === 'featured'? <p>
          Discover our handpicked selection of featured items 
          that showcase the best of what we have to offer. 
          Our featured section highlights standout pieces that 
          are loved by our customers and represent the essence 
          of our brand. Whether it's a timeless wardrobe staple, 
          a statement piece, or a must-have seasonal item, our 
          featured section is a curated collection of our top picks. 
          Explore these favorites and find inspiration for your next
          stylish outfit.
        </p>:
        <p>
          Stay ahead of the fashion curve with our trending 
          collection. We carefully select the latest styles 
          and fashion-forward pieces that are currently making 
          waves in the industry. From statement prints to bold 
          colors and unique designs, our trending section is 
          where you'll find the hottest and most sought-after 
          clothing items. Check back frequently as we update 
          this section regularly to keep you in the loop with 
          the latest fashion trends.
        </p>}
      </Box>
      <div className="bottom">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)
          }
        </div>

        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
