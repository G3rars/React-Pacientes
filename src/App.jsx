import Header from "./components/Header";
import Form from './components/Form';
import ListPatients from "./components/ListPatients";
import { useState, useEffect } from "react";







function App() {

  const [patients, setPatients] = useState( () => {

    const patientsStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
    return patientsStorage;
    
  });



  const [patient, setPatient] = useState({})


 useEffect (() => {

    localStorage.setItem('patients', JSON.stringify(patients));
  
}, [patients]);

  

  const deletePatient = id => {

      const searchPatient = patients.filter( (patient) => patient.id !== id)
      setPatients(searchPatient);
  
  
  }


  return (
    <div className="container mx-auto mt-20">
    <Header
    />

    <div className="mt-12 md:flex">
    <Form

    patients = { patients }
    patient = { patient }
    setPatients = { setPatients }
    />
    <ListPatients
      deletePatient = { deletePatient }
      patients = { patients }
      setPatient = { setPatient }
    />
    </div>
   
 
    </div>
  );
}

export default App;
