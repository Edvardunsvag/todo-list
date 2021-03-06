import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { name, id, handleEdit, handleDelete } = this.props;

        return (
            <li className='list-group-item d-flex text-capitalize justify-content-between my-2'>
                <h6>{name}</h6>
                <div className='todo-icon'>
                    <span
                        className='mx-2 text-success'
                        onClick={() => {
                            handleEdit(id);
                        }}>
                        <i className='fas fa-pen'></i>
                    </span>
                    <span
                        className='mx-2 text-danger'
                        onClick={() => handleDelete(id)}>
                        <i className='fas fa-trash'></i>
                    </span>
                </div>
            </li>
        );
    }
}
