import axios from 'axios';
import { useState, useEffect } from 'react';
import Shop from '../Shop/Shop';
import './ShopMap.css';
import { NavLink } from 'react-router-dom';

const ShopMap = () => {
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios
      .get('http://localhost:4242/plantes/limit6')
      .then((res) => console.log(res) || setProduct(res.data));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className='containerShop'>
      <div className='shopTitleContenair'>
        <h2 className='shopTitle'>OUR PLANTS </h2>
      </div>
      <div className='shopCategoryContenair'>
        <h3 className='shopCategory'>
          <NavLink to='/all'>All</NavLink>
        </h3>
        <h3 className='shopCategory'>
          {' '}
          <NavLink to='/indoor'>Indoor</NavLink>
        </h3>
        <h3 className='shopCategory'>
          {' '}
          <NavLink to='/outdoor'>Outdoor</NavLink>
        </h3>
      </div>
      <div className='shopParent'>
        {product.map((infoProduit) => {
          return <Shop infoProduit={infoProduit} />;
        })}
      </div>
    </div>
  );
};
export default ShopMap;
