import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
    const authRedux = useSelector(state => state.auth)
    useEffect(() => {
        console.log(authRedux);
    }, []);
    return (
        <div>Home</div>
    )
}

export default Home