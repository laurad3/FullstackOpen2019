import React from 'react';

const Filter = (props) => {
    return (
        <div>
            <p>filter show with <input value={props.search} onChange={props.handleSearch} /></p>
        </div>
    );  
};

export default Filter;