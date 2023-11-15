import { useState } from 'react';
import Card from './Card';

import Header from './Header';
import Footer from './Footer';
import image from './assets/react.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Persons from './routes/Persons';
import About from './routes/About';

function App() {
  const [persons, setPersons] = useState([{ id: 1, name: "Inna", title: "CEO", age: 30 }, { id: 2, name: "Anna", title: "Developper", age: 31 }, { id: 3, name: "Alona", title: "Meneger", age: 40 }]);

  const [search, setSearch] = useState('');

  //Routes
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/persons', element: <Persons /> },
    { path: '/about', element: <About /> }
  ])


  function removeHandler(id) {
    console.log(id);
    const newArray = persons.filter((person) => person.id !== id); // take everything exept this one. It deletes that is not id
    setPersons(newArray);
  }

  function searchHandler(event) { // it is triggerd by event itself, it has acces to a event object that has target and value
    setSearch(event.target.value);
  };


  return (
    <>
      <RouterProvider router={router} />
      {/* < Header name="Alona Chubenko" />
      <main>

        <h1>This is my application</h1>
        <img src={image} alt="logo" className='my-image' />
        <input type="text" onChange={searchHandler} />
        <div className='cards'>
          {persons
            .filter(element => element.name.toLowerCase().includes(search.toLowerCase()))
            .map((element) => ( // person is en object. (one thing from the all array. Better to use element). search - state we are overwrite with our array.
              <Card
                key={element.id}
                {...element}
                click={() => removeHandler(element.id)} /> // spred operator, go to persons object, and take every prop and send to the card component (name={person.name} title={persone.title} age={person.age} number={person.number})
            ))}

        </div>
      </main>
      < Footer copyright="Alona Chubenko" />
    */}
    </>
  );
}
export default App