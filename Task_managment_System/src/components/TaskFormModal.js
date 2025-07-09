import React, { useState,useEffect } from 'react';

export default function TaskFormModal({ setShowModal, setTasks, tasks, editTask, setEditTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDescription(editTask.description);
            setStatus(editTask.status);
        }
    }, [editTask]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (editTask) {
            // Update
            const updated = tasks.map((t) =>
                t.id === editTask.id
                    ? { ...t, title, description, status }
                    : t
            );
            setTasks(updated);
            setEditTask(null);
        } else {
            // Create new
            const newTask = {
                id: Date.now(),
                title,
                description,
                status,
                createdAt: new Date().toISOString(),
            };
            setTasks([newTask, ...tasks]);
        }

        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-md">
                <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Task Title"
                        className="w-full p-2 border rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        className="w-full p-2 border rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded"
                        >
                            Save Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
