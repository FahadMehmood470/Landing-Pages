import React from 'react';

export default function TaskItem({ task, setTasks, setShowModal, setEditTask }) {
    // Toggle task status
    const handleToggleStatus = () => {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === task.id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t
            )
        );
    };

    // Delete the task
    const handleDelete = () => {
        setTasks((prev) => prev.filter((t) => t.id !== task.id));
    };

    const handleEdit = () => {
        setEditTask(task);
        setShowModal(true);
    };


    return (
        <div className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
                <h3 className="text-lg font-medium">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.description}</p>
            </div>

            <div className="flex gap-2 items-center">
                
                <span
                    className={`px-2 py-1 text-sm rounded cursor-pointer ${task.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                        }`}
                    onClick={handleToggleStatus}
                >
                    {task.status}
                </span>

                <button
                    onClick={handleDelete}
                    className="text-red-500 font-semibold hover:underline"
                >
                    Delete
                </button>
                <button onClick={handleEdit} className="text-blue-500 hover:underline">
                    Edit
                </button>
            </div>
        </div>
    );
}
