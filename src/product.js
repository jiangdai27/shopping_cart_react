import "./product.css";
import { addToCart,fetchDataById } from "./func/utility";
import { Button } from "antd";
import { useState,useEffect } from "react";
const Product = (props) => {
  const [number, setNumber] = useState(0);
  const [data,setData] = useState([]);
  const [producturl,setProducturl] = useState(null);
  useEffect(async()=>{
    let getData = await fetchDataById([props.match.params.itemId]);
    setData(getData);
    setProducturl(getData[0].image);
  },[fetchDataById])
    
  const incrementHandler = () => {
    setNumber(number + 1);
  };
  const decrementHandler = () => {
    setNumber(number - 1 < 0 ? 0 : number - 1);
  };

  return (
    <>
      <div className="leftimg">
        <img src={producturl} />
      </div>
      <div className="rightdiscription">
        <Button onClick={decrementHandler}>-</Button>
        {number}
        <Button onClick={incrementHandler}>+</Button>
        <br />
        <Button
          title="Add to cart"
          onClick={() =>
            addToCart({
              itemId: props.match.params.itemId,
              number: number,
            })
          }
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};
export default Product;
