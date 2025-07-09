import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, setTasks, setEditTask, setShowModal, searchTerm, statusFilter }) {
    if (tasks.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No tasks yet.</p>;
    }
    const filteredTasks = tasks.filter((task) => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="grid gap-4">
            {filteredTasks.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">No tasks found.</p>
            ) : (
                filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        setTasks={setTasks}
                        setEditTask={setEditTask}
                        setShowModal={setShowModal}
                    />
                ))
            )}

        </div>
    );
}
