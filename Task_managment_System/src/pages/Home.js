import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskFormModal from '../components/TaskFormModal';
import FilterBar from '../components/FilterBar';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [editTask, setEditTask] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');


    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold text-indigo-600">Task Manager</h1>
            </header>

            <div className="flex justify-end mb-4">
                <button

                    onClick={() => {
                        setEditTask(null);
                        setShowModal(true);
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                    + Add Task
                </button>
            </div>


            <FilterBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
            />

            <TaskList
                tasks={tasks}
                setTasks={setTasks}
                setEditTask={setEditTask}
                setShowModal={setShowModal}
                searchTerm={searchTerm}
                statusFilter={statusFilter}
            />


            {showModal && (
                <TaskFormModal
                    setShowModal={setShowModal}
                    setTasks={setTasks}
                    tasks={tasks}
                    editTask={editTask}
                    setEditTask={setEditTask}
                />
            )}


        </div>
    );
}
