import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Col, Row } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsData.map(food => ({ ...food, id: uuidv4() })));
  const [searchTerm, setSearchTerm] = useState('');

  const addNewFood = (newFood) => {
    newFood.id = uuidv4();
    setFoods([...foods, newFood]);
  };

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter(food => food.id !== foodId);
    setFoods(filteredFoods);
  }

  const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div>
      <Search setSearchTerm={setSearchTerm}/>
      <AddFoodForm onAddFood={addNewFood} />

      <Row gutter={[16, 16]}>
      {filteredFoods.map((food) => (
        <Col key={food.id}>
          <FoodBox food={food} onDelete={deleteFood} />
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default App;

