import './Card.css'

function Card(props) {
  return <div className='singer'>
    {props.children}
  </div>;
}

export default Card;
