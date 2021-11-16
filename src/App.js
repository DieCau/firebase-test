import { useState, useEffect } from 'react';
import './App.css';
import { deletePerson, getPersons, savePersonName,updatePerson } from './application/api'


function App() {

  const [personName, setPersonName] = useState(null)
  const [persons, setPersons] = useState(null)
  const [personId, setPersonId] = useState(null)

  const savePerson = async () => {
    await savePersonName(personName);
    getPersonsData();
  }

  
  const removePerson = async () => {
    await deletePerson(personId);
    getPersonsData();
  }


  useEffect(() => {
    getPersonsData();
  }, []);


  const getPersonsData = async () => {
    const p = await getPersons()
    setPersons(p.docs)
  } 

  const updatePersonData = async () => {
    await updatePerson(personId, personName);
    getPersonsData();
  }



  // *********************************************
  return (
    <div className="App">
      <input type="text" onChange={ e => setPersonId(e.target.value) } placeholder = "personId" />
      
      <input type="text" onChange={ e => setPersonName(e.target.value) } placeholder = "personName" />
      
      <button onClick={ savePerson } >Guardar</button>
      <button onClick={ removePerson } >Eliminar</button>
      <button onClick={ updatePersonData } >Actualizar</button>

      {
        persons && persons.map( p => <p key={p.id}> { p.id } - { p.data().name }</p> )
      }

    </div>
  );
}

export default App;
