import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const API='http://localhost:3000' ;


const Todos = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [editing, setEditing] = useState(null)


    const fetchTodos = async () => {
        const response = await axios.get(`${API}/get`)
        setTodos(response.data)
    }


    useEffect(() => {
        fetchTodos()
    }, [])


    const handleAddorEdit = async (e) => {
        e.preventDefault()
        if (editing) {
            await axios.put(`${API}/put/${editing._id}`, { task })
        } else {
            await axios.post(`${API}/post`, { task })
        }
        setTask('')
        setEditing(null)
        fetchTodos()


    }
    const handleDelete = async (id) => {
        await axios.delete(`${API}/delete/${id}`)
        fetchTodos();
    }
    const handleToggleComplete = async (todo) => {
        await axios.put(`${API}/put/${todo._id}`, {
            completed: !todo.completed,
        })
        fetchTodos()
    }




    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={handleAddorEdit}>
                <input type="text" placeholder='enter todo' value={task} onChange={(e) => setTask(e.target.value)} />
                <button>{editing ? "Update" : "Add Todo"}</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        <span onClick={() => handleToggleComplete(todo)} style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            cursor:"pointer"
                        }}>
                                <p>{todo.task}</p>


                        </span>
                        <div>
                            <button onClick={() => {
                                setTask(todo.task);
                                setEditing(todo)
                            }}>Edit</button>
                            <button onClick={() => handleDelete(todo._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Todos
