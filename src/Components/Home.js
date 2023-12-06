import React from "react";

const Home = (props) => {
  console.log("Home Component has fired!");
  const { navigate } = props;
  return (
    <div>
      <div id="order-pizza" onClick={() => navigate("/pizza")}>
        {/* possibly a picture here */}
        <h3>Order your pizza now!</h3>
      </div>
    </div>
  );
};

export default Home;
