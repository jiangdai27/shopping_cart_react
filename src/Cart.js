import React, { useCallback, useEffect, useState } from "react";
import { Table } from "antd";
import { fetchCart, fetchDataById, addToCart, getAccessToken } from "./func/utility";
import history from "./history";
function Cart(props) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      defaultSortOrder: "descend",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "description",
      dataIndex: "description",
    },
    {
      render: (_) => (
        <button
          onClick={() => {
            addToCart({
              itemId: _.id,
              number: _.number - 1 >= 0 ? - 1 : 0,
            });
            setRefresh(!refresh);
          }}
        >
          -
        </button>
      ),
    },
    {
      title: "number",
      dataIndex: "number",
      defaultFilteredValue: 0
    },
    {
      render: (_) => (
        <button
          onClick={() => {
            addToCart({
              itemId: _.id,
              number: 1,
            });
            setRefresh(!refresh);
          }}
        >
          +
        </button>
      ),
    },
    {
      title: "total price",
      render: (_) =><p>{
        _.number*(_.price).split('$')[1] }</p>
      
    }
  ];
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(async () => {
    let cart = await fetchCart();
    if (cart.statusCode == 400) {
      try {
        let refreshToken = localStorage.getItem('refreshToken');
        let { token } = await getAccessToken(refreshToken);
        localStorage.setItem("token", token);
        setRefresh(!refresh);
      } catch (e) {
        history.push({ pathname: "/Login" });
      }
    } else {
      let item = cart.item;
      let ids = Object.keys(item);
      let getData = await fetchDataById(ids);
      let newData = [];
      ids.map(function (key) {
        newData.push(...filterItems(getData, key, item));
      });
      newData = newData.filter(ndata => ndata.number > 0);
      setData(newData);
    }
  }, [fetchDataById, refresh]);

  const filterItems = (a, key, item) => {
    return a.filter((el) => {
      if (el.id == key) {
        el.number = item[key];
        return el;
      }
    });
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
export default Cart;
