import { useState } from 'react';
import reviews from './data';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const App = () => {
  const [person, setPerson] = useState(reviews.id);

  return (
    <main>
      <h2>Reviews Project</h2>
      <section className='review'>
        <div className='img-container'>
          <img className='person-img' src={reviews[0].image} alt='person-img' />
        </div>
        <h4 className='author'>{reviews[0].name}</h4>
        <h3 className='job'>{reviews[0].job}</h3>
        <p className='info'>{reviews[0].text}</p>
        <div className='btn-container'>
          <button className='prev-btn'>
            <MdArrowBackIos />
          </button>
          <button className='next-btn'>
            <MdArrowForwardIos />
          </button>
        </div>
        <button className='btn'>Suprise me</button>
      </section>
    </main>
  );
};
export default App;
