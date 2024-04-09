import { useState } from 'react';
import reviews from './data';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { FaQuoteRight } from 'react-icons/fa';

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
  const randomPerson = () => {
    let randomNumber = Math.ceil(Math.random() * reviews.length - 1);
    if (randomNumber === index) {
      randomNumber = (randomNumber + 1) % reviews.length;
    }
    setIndex(randomNumber);
    console.log(randomNumber);
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
          <p className='quote-icon'>
            <FaQuoteRight />{' '}
          </p>
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
        <button className='btn' onClick={randomPerson}>
          Suprise me
        </button>
      </section>
    </main>
  );
};
export default App;
