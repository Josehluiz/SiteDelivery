// src/components/RestaurantList.js
import React from 'react';
import RestaurantCard from './RestaurantCardd';

const restaurants = [
  {
    id: "1",
    name: "Xis do Vini",
    rating: "4.5",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/2c/db/e6/logo.jpg",
    description: "Restaurante especializado em lanches rápidos e saborosos.",
  },
  {
    id: "2",
    name: "Sal & Pimenta",
    rating: "4.7",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtu3ZooExj_sovxE6UlPJqfqQ7UiDli7gukQ&s",
    description: "Restaurante com uma variedade de pratos temperados e deliciosos.",
  },
  {
    id: "3",
    name: "Outback",
    rating: "4.8",
    image: "data:image/png;base64,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",
    description: "Restaurante famoso por suas carnes e pratos australianos.",
  },
  {
    id: "4",
    name: "Santo Grill",
    rating: "4.9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbzInDonHf3oCSqKlYTgKewg1jvzmKJL2iA&s",
    description: "Restaurante especializado em grelhados e churrascos.",
  },
  {
    id: "5",
    name: "Pizza Hut",
    rating: "3.9",
    image: "https://seeklogo.com/images/P/pizza-hut-logo-DDD88793B2-seeklogo.com.png",
    description: "Rede de pizzarias famosa por suas pizzas deliciosas e variadas.",
  },
  {
    id: "6",
    name: "Burguer King",
    rating: "3.5",
    image: "https://example.com/image6.jpg",
    description: "Rede de fast food conhecida por seus hambúrgueres saborosos.",
  },
];

function RestaurantList() {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;