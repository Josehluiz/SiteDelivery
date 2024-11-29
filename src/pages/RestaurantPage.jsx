import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RestaurantPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Carregar dados do restaurante
    axios.get(`https://apifakedelivery.vercel.app/restaurants/${id}`)
      .then(response => {
        setRestaurant(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar o restaurante', error);
        setError('Não foi possível carregar o restaurante.');
        setLoading(false);
      });

    // Carregar cardápio
    axios.get(`https://apifakedelivery.vercel.app/foods`)
      .then(response => {
        const filteredFoods = response.data.filter(food => food.restaurantId === id);
        setFoods(filteredFoods);
      })
      .catch(error => {
        console.error('Erro ao carregar alimentos', error);
        setError('Não foi possível carregar o cardápio.');
      });
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-yellow-500 p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">{restaurant.name}</h1>
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-3xl font-bold mb-4">Cardápio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.map((food) => (
            <div key={food.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={food.image} alt={food.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{food.name}</h3>
                <p className="text-gray-500">{food.description}</p>
                <p className="font-bold text-lg mt-2">${food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Delivery App</p>
      </footer>
    </div>
  );
}

export default RestaurantPage;
