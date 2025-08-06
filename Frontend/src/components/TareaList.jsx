import TareaItem from './TareaItem';

function TareasList({ tareas, onDelete }) {
  if (tareas.length === 0) {
    return <p className="text-gray-500 mt-4">No hay tareas aún.</p>;
  }

  return (
    <div className="mt-4">
      {tareas.map((tarea) => (
        <TareaItem key={tarea.id} tarea={tarea} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TareasList;
