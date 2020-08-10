import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const { handleChange, handleSubmit, item, editItem } = this.props;

        return (
            <div className='card card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group mb-3'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary'>
                                <i className='fas fa-book'></i>
                            </div>
                        </div>
                        <input
                            type='text'
                            className='form-control text-capitalize'
                            value={item}
                            placeholder='Add Item'
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className={
                            editItem
                                ? 'btn btn-block bg-success mt-3 text-uppercase'
                                : 'btn btn-block bg-primary mt-3 text-uppercase'
                        }
                        type='submit'>
                        {editItem ? 'Edit Item' : 'Add Item'}
                    </button>
                </form>
            </div>
        );
    }
}
