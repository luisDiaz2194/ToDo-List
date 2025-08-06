import { useState } from 'react'
import './App.css'
import TareaForm from './components/TareaForm'
import TareaList from './components/TareaList';
import Modal from './components/Modal'
import Toast
  from './components/Toast';
function App() {
  const [toast, setToast] = useState({ message: '', type: '' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [tareaActiva, setTareaActiva] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const handleViewTarea = (Tarea) => {
    setTareaActiva(Tarea);
    setModoEdicion(false);
    setModalOpen(true);
  };

  const handleEditTarea = (Tarea) => {
    setTareaActiva(Tarea);
    setModoEdicion(true);
    setModalOpen(true);
  };

  const handleUpdateTarea = (tareaActualizada) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === tareaActualizada.id ? tareaActualizada : t))
    );
    setModalOpen(false);
    showToast('Tarea actualizada', 'success');
  };

  const [tareas, setTareas] = useState([]);

  const handledAddTarea = (nuevaTarea) => {
    setTareas([...tareas, { id: Date.now(), completed: false, ...nuevaTarea }])
    showToast('Tarea Agregada', 'info');
  }
  const handleDeleteTarea = (id) => {
    setTareas(tareas.filter((Tarea) => Tarea.id !== id));
    showToast('Tarea Eliminada', 'error');
  };
  return (
    <>
      <div className="p-4 max-w-xl mx-auto">
        <TareaForm onAddTarea={handledAddTarea} />
        <TareaList tareas={tareas} onDelete={handleDeleteTarea} onView={handleViewTarea}
          onEdit={handleEditTarea} />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          {tareaActiva && !modoEdicion && (
            <div>
              <h2 className="text-xl font-bold mb-2">{tareaActiva.tareaTitle}</h2>
              <p className="text-gray-600">{tareaActiva.tareaDescripcion || 'Sin descripción'}</p>
            </div>
          )}

          {tareaActiva && modoEdicion && (
            <TareaForm
              onAddTarea={handleUpdateTarea}
              initialData={tareaActiva}
              isEditing={true}
            />
          )}
        </Modal>
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
