
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    //const [budget, setBudget] = useState('');

    const setBudget = (val) =>
    {
        if(val > 20000)
            alert('the value cannot be > 20000');
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: 
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value='20000'
                        //style={{ marginLeft: '1rem' , size: 7}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
                        </span>
        </div>
    );
};
export default Budget;