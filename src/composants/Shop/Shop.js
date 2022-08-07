import { Info } from '@mui/icons-material';
import './Shop.css';

const Shop = (props) => {
  return (
    <div className='shop'>
      {console.log(props)}

      <div className='shopPresentation'>
        {/* <div className='shopWrap'> */}
        <img className='shopImg' src={props.infoProduit.plante_picture} />
        <h4 className='shopName'>{props.infoProduit.plante_name}</h4>
        <h5 className='shopPrice'>{props.infoProduit.plante_price}€</h5>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Shop;
