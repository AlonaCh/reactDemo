import './Card.css';

const Card = ({ name, age, click }) => {

  return (
    <div
      style={age > 35 ? { background: "grey" } : { background: "pink" }} className='card'>

      <p>
        Name: {name}</p>
      <p className={age > 35 ? 'pink-age' : 'blue-age'}>Age: {age}</p> {/*second example*/}
      <button onClick={click}>Click</button> {/*this event is passed to App.jsx */}
      <button className="close" onClick={click}>&times;</button>
    </div>
  );
};
export default Card;