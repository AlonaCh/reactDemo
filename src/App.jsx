import { useState, useEffect } from 'react';
import axios from "axios";
import Card from './components/Card';

import image from './assets/react.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Persons from './routes/Persons';
import About from './routes/About';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Posts from './routes/Posts';

function App() {
  const [persons, setPersons] = useState([{ id: 1, name: "Inna", title: "CEO", age: 30 }, { id: 2, name: "Anna", title: "Developer", age: 31 }, { id: 3, name: "Alona", title: "Meneger", age: 40 }]);
  const [search, setSearch] = useState('');




  //Routes
  const router = createBrowserRouter([
    // {path: '/auth', element: <AuthLayout/>, children: [{path:'login'}]}
    {
      path: '/', element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/persons', element: (<Persons
            searchHandler={searchHandler}
            removeHandler={removeHandler}
            search={search}
            persons={persons}
          />)
        },
        { path: '/about', element: <About /> },
        { path: '/posts', element: <Posts /> },
      ]
    },
  ])

  function removeHandler(id) {
    console.log(id);
    const newArray = persons.filter((person) => person.id !== id); // take everything exept this one. It deletes that is not id
    setPersons(newArray);
  }

  function searchHandler(event) { // it is triggerd by event itself, it has acces to a event object that has target and value
    setSearch(event.target.value);
  };

  function Persons({ searchHandler, persons, search, removeHandler }) {
    return (
      <>
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
      </>
    )
  }


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
