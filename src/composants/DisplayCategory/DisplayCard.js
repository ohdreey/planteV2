import './DisplayCard.css';

const DisplayCard = (props) => {
  return (
    <div className='displayCard'>
      {console.log(props)}

      <div className='displayCardPresentation'>
        {/* <div className='dissplayCardWrap'> */}
        <img
          className='displayCardImg'
          src={props.infoProduit.plante_picture}
        />
        <h4 className='displayCardName'>{props.infoProduit.plante_name}</h4>
        <h5 className='displayCardPrice'>{props.infoProduit.plante_price}€</h5>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DisplayCard;
