
const Patients = ({patient, setPatient, deletePatient}) => {

  const { name, owner, email, date, symptoms } = patient;

  const handleDelete = () => {

    const res = confirm('Estas seguro que quieres eliminarlo?')

    if(res){
      deletePatient(patient.id)
    }

  }


  return (
    
    <div className="m-4 bg-white shadow-md px-5 py-10 rounded-md flex flex-col">

    <div className="my-2 flex-row flex">
      <p className="uppercase font-bold">nombre:</p>
      <p className="capitalize ml-1">{name}</p>
    </div>

    <div className="my-2 flex-row flex">
      <p className="uppercase font-bold">Propietario:</p>
      <p className="capitalize ml-1">{owner}</p>
    </div>

    <div className="my-2 flex-row flex">
      <p className="uppercase font-bold">email:</p>
      <p className="capitalize ml-1">{email}</p>
    </div>

    <div className="my-2 flex-row flex">
      <p className="uppercase font-bold">fecha alta:</p>
      <p className="capitalize ml-1">{date}</p>
    </div>

    <div className="my-2 flex-row flex">
      <p className="uppercase font-bold">sintomas:</p>
      <p className="capitalize ml-1">{symptoms}</p>
    </div>

    <div className=" flex mt-9 justify-between">
      <button
      onClick={ () => setPatient(patient)}
      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
        Editar
      </button>
      <button
      onClick={ handleDelete }
      className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
      >
        Eliminar
      </button>
    </div>



  </div>
  )
}

export default Patients