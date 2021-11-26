import jwt from "jwt-decode";
const handleServerSignup = async (formBody) => {
  try {
    let response = await fetch(`${process.env.REACT_APP_BASEURL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: formBody,
    });
    const res = await response.json();
    const token = res.token;
    const payload = jwt(token);
    localStorage.setItem("token", token);
    return payload;
  } catch (e) {
    console.log(e);
  }
};
export default handleServerSignup;
