import "./price.css";

function Price(props) {
  const rate = props.rate;
  return (
    <div>
      <p className="money">{rate}</p>
      {props.children}
    </div>
  );
}

export default Price;
