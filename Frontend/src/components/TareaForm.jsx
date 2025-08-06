import { useState } from 'react'
import InputForm from './InputForm'

function TareaForm({onAddTarea}) {

    const [tareaTitle, setTareatitle] = useState('');
    const [tareaDescripcion, setTareadescripcion] = useState('');

    const handledSubmit = (e) =>{
        e.preventDefault();
        if(!tareaTitle.trim()) return;
        onAddTarea({tareaTitle, tareaDescripcion});
        setTareatitle("");
        setTareadescripcion("");
    }
    return (
        <div className='formulario'>
            <h1 className='font-semibold text-2xl'>Organizador de Tareas</h1>
            <form onSubmit={handledSubmit}>

                <InputForm idInput="tareaTitleId" label="Tarea" value={tareaTitle} onChange={(e) => setTareatitle(e.target.value)} placeholder='Ej: Ajustar css al formulario' name='tareaTitle' type='text'/>
                <InputForm idInput="tareaDescripcionId" label="Descripción" value={tareaDescripcion} onChange={(e) => setTareadescripcion(e.target.value)} placeholder='Ajustar detalles con los margenes...' name='tareaDescripcion' type='text' />
                <button type='submit' className='bg-indigo-500 text-white font-semibold py-2 px-8 rounded cursor-pointer hover:not-focus:bg-indigo-800'>Agregar Tarea</button>
            </form>
        </div>
    )
}

export default TareaForm