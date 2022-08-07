import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayCard from './DisplayCard';
// composant qui affiche la category outdoor ou indoor

const DisplayCat = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProduct = () => {
    axios
      .get(`http://localhost:4242/plantes/cat/${id}`)
      .then((res) => console.log(res) || setProduct(res.data));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className='displayCategoryCard'>
      YOLO{console.log(product)}
      {product.map((infoProduit) => {
        return <DisplayCard infoProduit={infoProduit} />;
      })}
    </div>
  );
};

export default DisplayCat;
