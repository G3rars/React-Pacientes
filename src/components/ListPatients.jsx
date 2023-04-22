import { useEffect } from "react";
import Patients from "./Patients";

const ListPatients = ({ patients, setPatient, deletePatient }) => {

  useEffect (() => {
    
    !patients.length <= 0 ? console.log('nuevo paciente') : null;

  }, [patients])
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center ">
        {patients.length <= 0 ? "No hay pacientes" : "Listado de pacientes"}
      </h2>
      <div className="flex justify-center mt-4  text-lg mb-10">
        <p>
          {patients.length <= 0
            ? "Comienza agregando pacientes"
            : "Administra tus"}
        </p>
        <p className="text-indigo-600 ml-1 font-bold">
          {patients.length <= 0
            ? "y aparaceran en este lugar"
            : " Pacientes y citas"}
        </p>
      </div>

      {patients.map((patient) => (
        <Patients 

        patient={patient} 
        setPatient={setPatient} 
        deletePatient = {deletePatient}
        
        key={patient.id} />
      ))}
    </div>
  );
};

export default ListPatients;
