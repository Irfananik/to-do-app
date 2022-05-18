import React from 'react';

const Todo = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Add a task!</h2>
                    <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs" />
                    <textarea type="text" placeholder="Description" class="input input-bordered w-full max-w-xs" />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;