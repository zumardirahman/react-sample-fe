import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Browse Our Trending</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='images/img1.png'
              text='Pizza Paperoni'
              label='Pizza'
              path='/'
            />
             <CardItem
              src='images/img3.png'
              text='Pizza Meat'
              label='Pizza'
              path='/'
            />
              <CardItem
              src='images/img5.png'
              text='Doner Kebab'
              label='Kebab'
              path='/'
            />
            <CardItem
              src='images/img7.png'
              text='Salmon Roll'
              label='Pizza'
              path='/'
            />
           
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img6.png'
              text='Cupcake Choco'
              label='Cupcake'
              path='/'
            />
             <CardItem
              src='images/img2.png'
              text='Doughnut Milk'
              label='Doughnut'
              path='/'
            />
            <CardItem
              src='images/img4.png'
              text='Doughnut Unicorn'
              label='Doughnut'
              path='/'
            />
            <CardItem
              src='images/img8.png'
              text='Kathi Kebab'
              label='Kebab'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;