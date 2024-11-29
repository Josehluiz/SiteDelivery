import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Menu = () => {
  const { restaurantId } = useParams(); // Pega o ID do restaurante da URL
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://apifakedelivery.vercel.app/restaurants/${restaurantId}/foods`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o cardápio');
        }
        return response.json();
      })
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [restaurantId]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Cardápio do Restaurante {restaurantId}</h1>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Preço: R${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
