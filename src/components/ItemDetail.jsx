import React, { useState, useEffect } from 'react';

const ItemDetail = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const resp = await fetch(
      `https://fakestoreapi.com/products/${props.match.params.itemId}`
    );
    const data = await resp.json();
    console.log(data);
    setItem(data);
  };
  return <img src={item.image} />;
};

export default ItemDetail;
