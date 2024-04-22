import React, { useState } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState(["Eat Breakfast ", "Hala Real " ,"Developer" , "Front end" ,])
    const [newTask, setNewTask] = useState("")

    function handlerInputChange(e) {
        setNewTask(e.target.value)
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
        else {
            alert("malimot yoq")
        }
    }
    function deleteTask(index) {
        let updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
    function meveTaskUp(index) {
        if (index > 0) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function meveTaskDown(index) {
        if (index < tasks.length - 1) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
            
        }
    }
    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input  onChange={handlerInputChange} type="text" placeholder='Enter a Task...' value={newTask} />
                <button onClick={addTask} className='add-button' >ADD</button>
            </div>
            <ol>
                {tasks.map((task, i) => {
                    return (
                        <li key={i}>
                            <span className='text'>{task}</span>
                            <div className='li_box '>
                            <button onClick={() => deleteTask(i)} className='px-6 py-1 bg-red-500 rounded text-white ml-5'>Delete</button>
                            <div className='li_box2 '>
                            <button onClick={() => meveTaskUp(i)} className='delete-button'>👆🏼</button>
                            <button onClick={() => meveTaskDown(i)} className='delete-button'>👇🏼</button>
                            </div>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default TodoList