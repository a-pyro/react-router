import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    console.log(data);
    setItems(data);
  };
  return (
    <div>
      {items.map((item) => (
        <Link key={item.id} to={`/shop/${item.id}`}>
          <img
            style={{ width: '100px', height: 'auto' }}
            src={item.image}
            alt=''
          />
        </Link>
      ))}
    </div>
  );
};

export default Shop;
