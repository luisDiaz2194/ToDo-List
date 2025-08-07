function TareaItem({ tarea, onDelete, onView, onEdit, onToggleComplete }) {
    return (
        <div className="border p-3 rounded mb-2 flex justify-between items-start">
            <div className="flex gap-3 items-start">
                <input
                    type="checkbox"
                    checked={tarea.completed}
                    onChange={() => onToggleComplete(tarea.id)}
                />
                <div>
                    <h2 className={`font-bold ${tarea.completed ? 'line-through text-gray-400' : ''}`}>
                        {tarea.tareaTitle}
                    </h2>
                    {tarea.tareaDescripcion && (
                        <p className={`text-sm ${tarea.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                            {tarea.tareaDescripcion}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-end space-y-1">
                <button onClick={() => onView(tarea)} className="text-blue-500 text-sm hover:underline">
                    Ver
                </button>
                <button onClick={() => onEdit(tarea)} className="text-yellow-500 text-sm hover:underline">
                    Editar
                </button>
                <button onClick={() => onDelete(tarea.id)} className="text-red-500 text-sm hover:underline">
                    Eliminar
                </button>
            </div>
        </div>
    );
}


export default TareaItem