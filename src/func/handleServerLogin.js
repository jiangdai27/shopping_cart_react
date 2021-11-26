import jwt from "jwt-decode";
const handleServerLogin = async (formBody) => {
  try {
    let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/authLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: formBody,
    });
    const res = await response.json();
    const { token, refreshToken } = res;
    const payload = jwt(token);
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    return payload;
  } catch (e) {
    console.log(e);
  }
};

export default handleServerLogin;
