import React from 'react';

const CardList = ({ shoppingList }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-32 mb-12 font-bold">
        {shoppingList.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 border rounded-lg ${product.important ? 'border-red-500 ' : 'border-gray-300'}`}
          >
            {/* Contenido de la tarjeta */}
            <h3>{product.productName}</h3>
            <p>{product.quantity}</p>
            <small>{product.category}</small>
            <small>{product.notes}</small>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;