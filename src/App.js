import { useState, useEffect } from 'react';
// import './App.css';
import { getPersons, savePersonName } from './application/api'


function App() {

  const [personName, setPersonName] = useState(null)
  const [persons, setPersons] = useState(null)

  const savePerson = () => {
    savePersonName(personName)
  }

  useEffect(() => {
    getPersonsData();
  }, []);


  const getPersonsData = async () => {
    const p = await getPersons()
    setPersons(p.docs)
  } 


  // *********************************************
  return (
    <div className="App">
      <input type="text" onChange={ e => setPersonName(e.target.value) } /><button onClick={ savePerson } >Guardar</button>
      <button onClick={ removePerson } >Eliminar</button>

      {
        persons && persons.map( p => <p>{ p.data().name }</p>)
      }

    </div>
  );
}

export default App;
