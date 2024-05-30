import './card.css';

const cardsData = [
  {
    image: '',
    title: 'Card 1',
    price: '100 rub',
  },

];
const cards = () => {
  return cardsData.map((card, index) => (
    <div key={index} className="col-md-6 col-lg-4 col-xxl-3">
      <div id="card" className="card">
        <img src={card.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p id="nazv" className="nazv"></p>
          <h5 id="card-title" className="card-title">{card.title}</h5>
          <p className="price">{card.price}</p>
          <button type="button" className="btn btn-outline-primary">купить</button>
        </div>
      </div>
    </div>
  ));
};
export default cards;
