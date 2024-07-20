import './item.css'

function Item(props) {
  const ethnicity = props.ethnicity;
  return <p className="styling">{ethnicity}</p>;
}

export default Item;
