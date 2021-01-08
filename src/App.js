import React from 'react';

const foodILike = [
  {
    'id': 1,
    'name': 'борщ',
    'image': 'https://2recepta.com/recept/borshh/borshh.jpg'
  },
  {
    'id': 2,
    'name': 'драники',
    'image': 'https://cdn.lifehacker.ru/wp-content/uploads/2018/05/Draniki_1527664015.jpg'
  },
  {
    'id': 3,
    'name': 'стейк',
    'image': 'https://cdn.lifehacker.ru/wp-content/uploads/2018/05/20-laJfxakov-dlya-prigotovleniya-deJstvitelno-bozhestvennogo-steJka_1526682003-1140x570.jpg'
  },
  {
    'id': 4,
    'name': 'хинкали', 
    'image': 'https://vosmarket.ru/uploads/posts/2018-11/1541331854_vosmarket_ru-xinkali-0.jpg'
  }
]

function Food({name, picture}){
  return (
    <div>
      <h3>Я люблю {name}</h3>
      <img src={picture} alt=""/>
    </div>
  );
}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
