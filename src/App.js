import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { v4 as uuid } from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    const [item, setItem] = useState({ id: uuid(), item: '', editItem: false });
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setItem({ item: e.target.value, id: item.id, editItem: item.editItem });
    };

    const handleSubmit = (e) => {
        const newItem = {
            item: item.item,
            id: item.id,
        };
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        setItem({ item: '', id: uuid(), editItem: false });

        e.preventDefault();
    };

    const clearList = () => {
        setItems([]);
    };

    const handleEdit = (id) => {
        const res = items.filter((item) => item.id !== id);
        const selectedItem = items.find((item) => item.id === id);
        setItem({ item: selectedItem.item, id: id, editItem: true });
        setItems(res);
    };

    const handleDelete = (id) => {
        const res = items.filter((item) => item.id !== id);
        setItems(res);
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <h3 className='text-capitalize text-center mt-5'>
                            Todo Input
                        </h3>
                        <TodoInput
                            handleSubmit={handleSubmit}
                            item={item}
                            handleChange={handleChange}
                            editItem={item.editItem}></TodoInput>
                        <TodoList
                            handleEdit={handleEdit}
                            editItem={item.editItem}
                            clearList={clearList}
                            items={items}
                            handleDelete={handleDelete}></TodoList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
