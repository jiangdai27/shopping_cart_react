export const addToCart = async (item) => {
  let token = localStorage.getItem("token");
  //let products = { [item.itemId]: item.number };
  console.log("bbbb",item);
  let products = {
    productId: item.itemId,
    productNumber: item.number
  }
  let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/addcart`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(products),
  });
  const res = await response.json();
  return res;
};
export const fetchCart = async () => {
  try {
    let token = localStorage.getItem("token");
    let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/getCartByUser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const res = await response.json();
    return res;
  }
  catch (err) {
    console.log(err);
  }
};

export const fetchData = async () => {
  let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/getProductData`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const res = await response.json();
  return res;
};

export const fetchDataById = async (id) => {
  try {
    let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/getProductById`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(id)
    });
    const res = await response.json();
    return res;
  }
  catch (e) {
    console.log(e);
  }
};

export const getAccessToken = async (refreshToken) => {
  try {
    let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/refreshtoken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: `refreshToken=${refreshToken}`,
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}

