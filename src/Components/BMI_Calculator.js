import React, { useState } from 'react';

const BMI_Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault(); // Prevent form submission

    if (height && weight) {
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters));
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    }
  };

  return (
    <div className='container text-center'>
      <form className="text-center" onSubmit={calculateBmi}>
        <label className='my-2'>Enter Weight in kg</label>
        <input
          type="number"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
          min="1"
          max="500"
          required
          className='form-control'
        />
        <label className='my-2'>Enter Height in cm</label>
        <input
          type="number"
          name="height"
          onChange={(e) => setHeight(e.target.value)}
          min="100"
          max="250"
          required
          className='form-control'
        />
        <button type='submit' className='btn btn-warning pt-2 my-2'>
          Calculate BMI
        </button>
        <p>BMI: {bmi}</p>
        <p>Message: {message}</p>
      </form>
    </div>
  );
};

export default BMI_Calculator;