import React from 'react';
import { useParams, Link } from 'react-router-dom';
import outdoor from '../../assets/outdoor.png';
import indoor from '../../assets/indoor.png';

import './Category.css';
//composant qui contient les deux boutons de la page 'accueil indoor et outdoor

const Category = () => {
  // const params = useParams();
  // axios
  //   .get('http://localhost:4242/plantes/outdoor/:id')
  //   .then((res) => console.log(res) || setProduct(res.data));

  return (
    <div className='category'>
      <div className='categoryTitle'>
        <h2>SHOP BY CATEGORIES</h2>
      </div>
      <div className='categoryOI'>
        <div className='categoryWrap'>
          <Link to='/category/1'>
            <img className='categoryImg1' src={indoor} alt='plante indoor' />
          </Link>
        </div>
        <div className='categoryWrap'>
          <Link to='/category/2'>
            <img className='categoryImg2' src={outdoor} alt='plante outdoor' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
