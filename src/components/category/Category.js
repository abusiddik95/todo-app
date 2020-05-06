import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Category = (props) => {
    const category = useContext(CategoryContext);
    const {count} = props;
    return (
        <div>
            <h3>this is category {category} </h3>
            <h4>this is total count : {count}</h4>
        </div>
    );
};

export default Category;