import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('https://apifakedelivery.vercel.app/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar restaurantes', error);
      });
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">

      <main className="p-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Restaurantes</h2>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Delivery App</p>
      </footer>
    </div>
  );
}

export default HomePage;
