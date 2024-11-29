import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="font-semibold text-xl">{restaurant.name}</h3>
          <p className="text-gray-500">{restaurant.description}</p>
        </div>
        <Link to={`/restaurant/${restaurant.id}`} className="button">Ver Cardápio</Link>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default RestaurantCard;