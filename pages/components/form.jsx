import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const shoppingItem = {
      productName,
      quantity,
      category,
      notes,
      important,
    };

    // datos en el localStorage
    const storedData = JSON.parse(localStorage.getItem('shoppingList')) || [];
    storedData.push(shoppingItem);
    localStorage.setItem('shoppingList', JSON.stringify(storedData));

    
    setProductName('');
    setQuantity('');
    setCategory('');
    setNotes('');
    setImportant(false);

    onSubmit(shoppingItem);
  };

  return (
    <form
      className="max-w-6xl mx-auto p-4 border rounded shadow-lg mt-12 font-semibold"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block mb-2">Nombre del producto:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Ejemplo: Manzanas"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Cantidad necesaria:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Ejemplo: 5"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Categoría (opcional):</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Ejemplo: Frutas"
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Notas adicionales (opcional):</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Ejemplo: Comprar en el mercado cerca de casa."
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Marcar Importante 👇:</label>
        <input
          type="checkbox"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-bold bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Agregar a la lista
      </button>
    </form>
  );
};

export default Form;






