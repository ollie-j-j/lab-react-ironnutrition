import React, { useState } from 'react';
import { Divider, Input, Form, Button } from 'antd';

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [serving, setServing] = useState(0);
  
    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingInput = e => setServing(e.target.value);
  
    const handleSubmit = (values) => {
      const addNewFood = {
        name: values.name,
        image: values.image,
        calories: values.calories,
        servings: values.servings
      };
      props.onAddFood(addNewFood);
      setName("");
      setImage("");
      setCalories(0);
      setServing(0);
    };
  
    return (
      <Form layout="vertical" onFinish={handleSubmit}>
        <Divider>Add Food Entry</Divider>
  
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the food name!' }]}>
          <Input value={name} onChange={handleNameInput} />
        </Form.Item>
  
        <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please input the image URL!' }]}>
          <Input value={image} onChange={handleImageInput} />
        </Form.Item>
  
        <Form.Item label="Calories" name="calories" rules={[{ required: true, message: 'Please input the calorie amount!' }]}>
          <Input value={calories} type="number" onChange={handleCaloriesInput} />
        </Form.Item>
  
        <Form.Item label="Servings" name="servings" rules={[{ required: true, message: 'Please input the servings amount!' }]}>
          <Input value={serving} type="number" onChange={handleServingInput} />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit"> Create </Button>
        </Form.Item>
      </Form>
    );
}

export default AddFoodForm;
