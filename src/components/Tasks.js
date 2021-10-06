// 1 example
// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appoitment',
//         day:'Feb 5th at 2:30pm',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Meeting at School',
//         day:'Feb 6th at 1:30pm',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Food shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false
//     }
// ]

// 2 example
//import React, { useState } from 'react'

import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    // 2 example
    // const [tasks, setTasks] = useState([
    //     {
    //         id: 1,
    //         text: 'Doctors Appoitment',
    //         day:'Feb 5th at 2:30pm',
    //         reminder: true
    //     },
    //     {
    //         id: 2,
    //         text: 'Meeting at School',
    //         day:'Feb 6th at 1:30pm',
    //         reminder: true
    //     },
    //     {
    //         id: 3,
    //         text: 'Food shopping',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: false
    //     }
    // ])

    return (
        <>
            { tasks.map((task) => (<Task 
                key={task.id} 
                task={task}
                onDelete={ () => onDelete(task.id) }
                onToggle={ onToggle }
            />)) }
        </>
    )
}

export default Tasks
