import React from 'react';

const Search = (props) => {
    return (
        <p>find countries <input type="text" value={props.search} onChange={props.onChange} /></p>
    )
};

export default Search;
