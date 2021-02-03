import React from "react";

const Display = (props) => {
  const { gloves } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {gloves.map((glove) => (
        <article key={glove._id}>
          <img src={glove.img} alt=''/>
          <h1>{glove.brand}</h1>
          <h3>{glove.size}</h3>
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;

  
  return gloves ? loaded() : loading;
};

export default Display;