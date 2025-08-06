import { useState } from 'react'
import './App.css'
import TareaForm from './components/TareaForm'
import TareaList from './components/TareaList';
import Toast
  from './components/Toast';
function App() {
  const [toast, setToast] = useState({ message: '', type: '' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const [tareas, setTareas] = useState([]);

  const handledAddTarea = (nuevaTarea) => {
    setTareas([...tareas, { id: Date.now(), completed: false, ...nuevaTarea }])
    showToast('Tarea Agregada', 'info');
  }
  const handleDeleteTarea = (id) => {
    setTareas(tareas.filter((task) => task.id !== id));
    showToast('Tarea Eliminada', 'error');
  };
  return (
    <>
      <div className="p-4 max-w-xl mx-auto">
        <TareaForm onAddTarea={handledAddTarea} />
        <TareaList tareas={tareas} onDelete={handleDeleteTarea} />
      </div>
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: '' })}
        />
      )}
    </>

  )
}

export default App
