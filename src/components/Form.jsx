import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ setPatients, patients, patient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setsymptoms] = useState("");

  useEffect(() => {
    if (patient.id) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setsymptoms(patient.symptoms);
    }
  }, [patient]);

  const resetForm = () => {
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setsymptoms("");
  };

  const generateId = () => {
    let date = Date.now();
    let random = Math.random().toString(36).substring(2);

    return date + random;
  };

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, owner, email, date, symptoms].includes("")) {
      alert("Debes rellenar todos los campos");
      setError(true);
    
    
    }

      
    const newPatient = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

      if(patient.id){
        newPatient.id = patient.id;
      
      const updatePatient = patients.map( patientState => patientState.id === patient.id ? newPatient : patientState)
      setPatients(updatePatient);
      alert('Actualizado')

      }else{
    
      alert("todo en orden");
      setError(false);
      newPatient.id = generateId()
      setPatients([...patients, newPatient]);
    }

    resetForm();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-7">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <div className="flex justify-center mt-4 text-lg mb-10">
        <p>Añande pacientes y</p>
        <p className="text-indigo-600 ml-1 font-bold">Administralos</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-md py-10 px-5 mx-4"
      >
        <div className="mb-5">
          {error && <Error> Debes rellenar todos los campos </Error>}

          <label className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Nombre del propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="email"
            placeholder="e.j@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Introduce los sintomas"
            value={symptoms}
            onChange={(e) => setsymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w w-full text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer p-3 transition-all"
          value={patient.id ? "Editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
