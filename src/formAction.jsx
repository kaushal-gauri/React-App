import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function FormAction() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleFormAction = (e) => {
    e.preventDefault();

    // Fetch existing data from localStorage
    const existingData = localStorage.getItem('sampleData');
    const existingDataArray = existingData ? JSON.parse(existingData) : [];

    // Add new data
    const newData = {
      name: name,
      age: age,
      address: address,
      email: email,
    };

    const newDataArray = [...existingDataArray, newData];

    // Update state and localStorage
    localStorage.setItem('sampleData', JSON.stringify(newDataArray));

    // Clear form fields
    setName('');
    setAge('');
    setAddress('');
    setEmail('');

    // Display success message (you may want to customize this part)
    alert('Data added successfully!');
  };

  return (
    <div>
      <div className='form-main1'>
        <header className='form-header'>
          <h1>React Js Winter PEP Project</h1>
          <div className='form-clr'><h2>FormAction Component</h2></div>
          <nav className='nav-bar'>
            <Link className='home-section' to='/'>Home</Link>
            <Link className='form-section' to='/formAction'>FormAction</Link>
          </nav>
        </header>
        <h3 className='page-heading'>User Input Fields</h3>
      
        <div className='form-container'>
          <form onSubmit={handleFormAction}>
            <div className='form-inner'>
              <input
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter your name'
              />
              <input
                type='number'
                name='age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder='Enter your age'
              />
              <input
                type='text'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Enter your address'
              />
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
              />

              <button className="subform" type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
