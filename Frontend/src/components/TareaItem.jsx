
function TareaItem({ tarea, onDelete, onView, onEdit }) {
    return (
        <div className="border p-3 rounded mb-2 flex justify-between items-start">
            <div>
                <h2 className="font-bold">{tarea.tareaTitle}</h2>
               {tarea.description && <p className="...">{tarea.tareaDescription}</p>}
            </div>
            <button onClick={() => onView(tarea)} className="text-blue-500 text-sm hover:underline">Ver</button>
            <button onClick={() => onEdit(tarea)} className="text-yellow-500 text-sm hover:underline">Editar</button>
            <button onClick={() => onDelete(tarea.id)} className="text-red-500 text-sm hover:underline">Eliminar</button>
        </div>
    )
}

export default TareaItem