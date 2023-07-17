import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CardList from './components/card';

export default function Home() {
  const [shoppingList, setShoppingList] = useState([]);

  // Cargar datos del localStorage al montar el componente y solo una vez
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('shoppingList')) || [];
    setShoppingList(storedData);
  }, []);

  // Función para agregar un producto a la lista y guardarla en el localStorage
  const handleAddProduct = (product) => {
    const updatedList = [...shoppingList, product];
    setShoppingList(updatedList);
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));
  };

  return (
    <main>
      <Header />
      <Form onSubmit={handleAddProduct} />
      <CardList shoppingList={shoppingList} />
    </main>
  );
}