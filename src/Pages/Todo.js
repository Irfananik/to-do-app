import React from 'react';

const Todo = () => {

    const handleRegisterSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const description = event.target.description.value
        console.log(name, description)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Add a task!</h2>
                    <form onSubmit={handleRegisterSubmit}>
                        <input type="text"  name="name" placeholder="name" class="input input-bordered w-full max-w-xs my-3" />
                        <textarea type="text"  name="description" placeholder="Description" class="input input-bordered w-full max-w-xs" />
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Todo;