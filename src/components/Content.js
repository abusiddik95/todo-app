import React from 'react';
import { useState } from 'react';
import Category from './category/Category';


const Content = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2> {count}</h2>
            <button onClick={() => {setCount(count+1)}}>Increment</button>
            <Category count={count}></Category>
        </div>
    );
};

export default Content;