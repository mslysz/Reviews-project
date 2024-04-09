import { useState } from 'react';
import people from './data';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = (randomNumber + 1) % people.length;
    }
    setIndex(randomNumber);
  };
  return (
    <main>
      <section className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt='person-img' />
          <p className='quote-icon'>
            <FaQuoteRight />{' '}
          </p>
        </div>
        <h4 className='author'>{name}</h4>
        <h3 className='job'>{job}</h3>
        <p className='info'>{text}</p>
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
