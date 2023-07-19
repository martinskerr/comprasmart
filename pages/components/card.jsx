import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CardList = ({ shoppingList, handleDeleteProduct }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 mb-12">
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {shoppingList.map((product, index) => (
          <CSSTransition key={index} in={true} appear={true} timeout={300} classNames="fade">
            <div
              className={`flex flex-col py-8 p-4 border rounded-lg ${product.important ? 'border-red-500' : 'border-green-500'}`}
            >
              {/* Contenido de la tarjeta */}
              <h3 className={`flex flex-col font-bold p-4 border rounded-lg ${product.important ? 'bg-rose-500' : 'bg-green-500'}`}>Producto: {product.productName}</h3>
              <p className="text-lg py-4">Cantidad: {product.quantity}</p>
              <li>Categoría: {product.category}</li>
              <li>Notas: {product.notes}</li>
              <br />
              <div className='flex flex-wrap pt-6 space-x-4'>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  onClick={() => handleDeleteProduct(index)}
                >
                  Eliminar
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">Editar</button>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default CardList;