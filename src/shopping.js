import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import cart from "./images/cart.png";
import "antd/dist/antd.css";
import "./shopping.css";
import { List } from "antd";
import ProductCard from "./Components/ProductCard";
import { fetchData } from "./func/utility";
function Shopping() {
  const [username, setusername] = useState(null);
  const [data,setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setusername(location.state);
  });
  useEffect(async()=>{
    let getData = await fetchData();
    setData(getData);
  },[fetchData])

  const logout = function () {
    localStorage.clear();
    setusername(null);
  };

  return (
    <>
      <header>
        <div className="header">
          <p className="s-header">Shopping Page</p>
          {username ? (
            <a href="#" onClick={logout} className="logout">
              Logout
            </a>
          ) : (
            <Link to="/Signup" className="signup">
              Signup
            </Link>
          )}
          {username ? (
            <p className="login">{username}</p>
          ) : (
            <Link to="/Login" className="login">
              Login
            </Link>
          )}
          <Link to="/Cart">
            <img className="cartLogo" src={cart} />
          </Link>
        </div>
      </header>
      <h1>Shopping Now</h1>
      <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Link to={{pathname: `/product/${item.id}`}}>
              <ProductCard
                itemId={item.id}
                itemName={item.name}
                itemDescription={item.description}
                itemImage={item.image}
                itemPrice={item.price}
              ></ProductCard>
              </Link>
            </List.Item>
          )}
        ></List>
      </div>
    </>
  );
}
export default Shopping;
