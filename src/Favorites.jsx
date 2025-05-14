import React from "react";
import FavoriteCard from "./FavoritesCard"; // NEW import!

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#EEF2F5] mb-8">
        Favorite Cities
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-[#5fe0e4]">No favorites added.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((fav) => (
            <FavoriteCard
              key={fav.city}
              fav={fav}
              onRemoveFavorite={onRemoveFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
