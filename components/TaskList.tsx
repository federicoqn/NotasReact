import { Nota } from "./interfaces/Nota"
import TaskCard from "./TaskCard"

interface Props{
    tasks:Nota[]
}

export default function TaskList({tasks}: Props){
    return(
        <>
            {tasks.map((task) => ( 
            <TaskCard task={task}/>
            ))}
        </>
    )
}