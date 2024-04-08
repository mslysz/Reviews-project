import { useState } from 'react';
import reviews from './data';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const App = () => {
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevPerson = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <main>
      <h2>Reviews Project</h2>
      <section className='review'>
        <div className='img-container'>
          <img
            className='person-img'
            src={reviews[index].image}
            alt='person-img'
          />
        </div>
        <h4 className='author'>{reviews[index].name}</h4>
        <h3 className='job'>{reviews[index].job}</h3>
        <p className='info'>{reviews[index].text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <MdArrowBackIos />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <MdArrowForwardIos />
          </button>
        </div>
        <button className='btn'>Suprise me</button>
      </section>
    </main>
  );
};
export default App;
