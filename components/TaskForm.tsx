import { ChangeEvent, FormEvent, useState } from "react"
import { Nota } from "./interfaces/Nota";


interface Props{
    addNota: (task: Nota) => void;
}

export default function TaskForm({addNota}: Props){

    const [task, setTask] = useState({
        titulo:"",
        descripcion:""
    });

    const actualizarInput = ( {target}: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        setTask({...task, [target.name]: target.value})
    };

    const handleNota = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addNota(task)
    }

    return(
        <div>
            <h1>Add nota</h1>
            <form onSubmit={handleNota}>
                <input type="text" name="titulo" placeholder="Ingrese el titulo" onChange={actualizarInput}/> <br/>
                <textarea name="descripcion" id="" placeholder="Ingrese la descripcion" onChange={actualizarInput}></textarea>
                <button> Cancelar </button> 
                <button> Guardar </button>
            </form>
            
        </div>
    )
}