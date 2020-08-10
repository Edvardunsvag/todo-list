import React, { Component } from 'react';

import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {
            items,
            handleDelete,
            clearList,
            handleEdit,
            editItem,
        } = this.props;

        return (
            <div>
                <h3 className='text-center mt-5 text-capitalize'>Todo List</h3>
                <ul className='list-group'>
                    {items.map((i) => (
                        <Item
                            editItem={editItem}
                            handleEdit={handleEdit}
                            name={i.item}
                            id={i.id}
                            handleDelete={handleDelete}></Item>
                    ))}
                </ul>
                <button
                    className='btn btn-block bg-danger mt-3 text-uppercase'
                    onClick={clearList}>
                    Clear list
                </button>
            </div>
        );
    }
}
