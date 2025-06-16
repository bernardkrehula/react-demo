import React from 'react';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';


function App() {
  const employeeInfo = [
    {
      firstName: 'Bernard',
      lastName: 'Krehula',
      age: '19'
    },
    {
      firstName: 'Bruxiii',
      lastName: 'Krehula',
      age: '19'
    },
    {
      firstName: 'Beryx',
      lastName: 'Krehula',
      age: '19'
    }
  ]
  return (
    <div className="App">
      <header className='App-header'>
        {employeeInfo.map(employee => {
          const { firstName, lastName, age} = employee;
          return (
            <Employee firstName={firstName} lastName={lastName} age={age}/>
          )
        })}
        {/* <Employee firstName='Bernard' lastName='Krehula' age='19'></Employee> */}
      </header>
    </div>
  );
}

export default App;
