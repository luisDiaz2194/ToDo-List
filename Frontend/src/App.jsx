import { useState } from 'react'
import './App.css'
import TareaForm from './components/TareaForm'
function App() {

  const [tareas, setTareas] = useState([]);

  const handledAddTarea = (nuevaTarea) =>{
    setTareas([...tareas, {id: Date.now(), ...nuevaTarea}])
  }

  return (
    <>
     <div className="p-4 max-w-xl mx-auto">
      <TareaForm onAddTarea = {handledAddTarea}/>
       {/* Aquí más adelante mostraremos TaskList */}
      
     </div>
    </>
  )
}

export default App
