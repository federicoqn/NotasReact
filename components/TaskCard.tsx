import { Nota } from "./interfaces/Nota";

interface Props{
    task: Nota;
}

export default function TaskCard({task}: Props){
    return(
        <div>
            <p>{task.id} {task.titulo} {task.descripcion} </p>
        </div>
    );
}