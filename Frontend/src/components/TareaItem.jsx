import React from 'react'

function TareaItem({tarea, onDelete}) {
    return (
        <div className="border p-3 rounded mb-2 flex justify-between items-start">
            <div>
                <h2 className="font-bold">{tarea.tareaTitle}</h2>
                {tarea.description && <p className="text-sm text-gray-600">{tarea.tareaDescription}</p>}
            </div>
            <button
                onClick={() => onDelete(tarea.id)}
                className="text-red-500 hover:underline text-sm"> Eliminar
            </button>
        </div>
    )
}

export default TareaItem