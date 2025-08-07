import { useState, useEffect } from 'react'
import InputForm from './InputForm'

function TareaForm({ onAddTarea, initialData = {}, isEditing = false }) {
    const [tareaTitle, setTareatitle] = useState('');
    const [tareaDescripcion, setTareadescripcion] = useState('');
    const [clasesInput, setClasesInput] = useState({});

    useEffect(() => {
        if (isEditing) {
            setTareatitle(initialData.tareaTitle || '');
            setTareadescripcion(initialData.tareaDescripcion || '');
        }
    }, [initialData, isEditing]);


    const handledSubmit = (e) => {
        e.preventDefault();
        if (!tareaTitle.trim()) return;

        const nuevaTarea = {
            ...initialData,
            tareaTitle,
            tareaDescripcion,
        };

        onAddTarea(nuevaTarea);
        setTareatitle("");
        setTareadescripcion("");
    }

    const onValidation = ({ validationInputTarget, validationInputTargetResult }) => {
        setClasesInput(prev => ({
            ...prev,
            [validationInputTarget]: validationInputTargetResult ? 'border-green-200' : 'border-red-200',
        }));
    };


    return (
        <div className='formulario'>
            <h1 className='font-semibold text-2xl'>Organizador de Tareas</h1>
            <form onSubmit={handledSubmit}>

                <InputForm idInput="tareaTitleId" label="Tarea" value={tareaTitle} onChange={(e) => setTareatitle(e.target.value)} onValidation={onValidation} placeholder='Ej: Ajustar css al formulario' name='tareaTitle' type='text' className={clasesInput.tareaTitle} />
                <InputForm idInput="tareaDescripcionId" label="Descripción" value={tareaDescripcion} onChange={(e) => setTareadescripcion(e.target.value)} onValidation={onValidation} placeholder='Ajustar detalles con los margenes...' name='tareaDescripcion' type='text' className={clasesInput.tareaDescripcion} />


                <button type='submit' className='bg-green-700 text-white font-semibold py-2 px-8 rounded cursor-pointer hover:not-focus:bg-green-900'>{isEditing ? 'Actualizar Tarea' : 'Agregar Tarea'}</button>
            </form>
        </div>
    )
}

export default TareaForm