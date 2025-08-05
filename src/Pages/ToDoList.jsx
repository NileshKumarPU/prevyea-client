"use client";

import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input.trim(), done: false }]);
      setInput("");
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-white/5 backdrop-blur-md border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">🎯 My To-Do List</h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add new task..."
            className="flex-1 p-3 rounded-lg bg-gray-100 text-black focus:outline-none"
          />
          <button
            onClick={addTask}
            className="px-4 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-500 to-red-500 shadow-lg active:translate-y-1 transform transition duration-150"
          >
            ➕
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white/10 text-white px-4 py-3 rounded-lg backdrop-blur-sm shadow"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleDone(index)}
                  className="accent-green-500 w-5 h-5"
                />
                <span className={`text-lg ${task.done ? "line-through text-gray-400" : ""}`}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => removeTask(index)}
                className="text-sm px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow active:translate-y-1 transition transform duration-150 font-bold"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-400 mt-4">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
