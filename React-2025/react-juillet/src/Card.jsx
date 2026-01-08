import catPic from './assets/cutcat.jpg';

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={catPic} alt="Card Image" />
        <h2 className='card-title'>Card Title</h2>
        <p>Card Content</p>
    </div>
  );
}   
export default Card;
