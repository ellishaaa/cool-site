import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import { Fade } from 'react-reveal';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
      
        <div className='cards__wrapper'>
        <ul className='cards__items'>
        <Fade>
          <CardItem 
                  src='../images/img-9.jpg' 
                  text='Explore the hidden waterfall deep inside the amazon jungle.' 
                  label='Adventure'
                  path='/services'
                />

                <CardItem 
                  src='../images/img-9.jpg' 
                  text='Explore the hidden waterfall deep inside the amazon jungle.' 
                  label='Adventure'
                  path='/services'
                />
         
            </Fade>
            </ul>
            <ul className='cards__items'>
            <Fade>
                <CardItem 
                  src='../images/img-9.jpg' 
                  text='Explore the hidden waterfall deep inside the amazon jungle.' 
                  label='Adventure'
                  path='/services'
                />

                <CardItem 
                  src='../images/img-9.jpg' 
                  text='Explore the hidden waterfall deep inside the amazon jungle.' 
                  label='Adventure'
                  path='/services'
                />

                <CardItem 
                  src='../images/img-9.jpg' 
                  text='Explore the hidden waterfall deep inside the amazon jungle.' 
                  label='Adventure'
                  path='/services'
                />
                 </Fade>
            </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Cards
