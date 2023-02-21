import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../common/Table'
import { createDemo } from '../../redux/slides/demoSlide';

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}

const HomePage = (props) => {
    const demoList = useSelector(state => state.demo);
    const dispatch = useDispatch();

    const handleCreateDemo = () => {
        const newId = randomNumber();
        const newDemo = {
            id: newId,
            title: `Demo ${newId}`
        }

        const action = createDemo(newDemo);
        dispatch(action);
    }

    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={handleCreateDemo}>+</button>
            <Table list={demoList}></Table>
        </div>
    )
}

export default HomePage