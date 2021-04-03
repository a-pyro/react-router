import React, { useState, useEffect } from 'react';

const ItemDetail = ({ match: { params } }) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const resp = await fetch(
      `https://fakestoreapi.com/products/${params.itemId}`
    );
    const data = await resp.json();
    console.log(data);
    setItem(data);
    setIsLoading(false);
  };
  // return isLoading ? (
  //   <h1>Loading...</h1>
  // ) : (
  // <div>
  //   <img style={{ width: '200px' }} src={item.image} alt='product' />
  // </div>
  // );

  return (
    (isLoading && <h1>Loading</h1>) || (
      <div>
        <img style={{ width: '200px' }} src={item.image} alt='product' />
      </div>
    )
  );
};

export default ItemDetail;
