import React, {useState} from "react";

import Layout from '../Layouts/index'

const HomePage = () => {
    const [number, setNumber] = useState(0);

    const addNumber = () => {
        setNumber(prev => {
            return prev+1;
        })
    }

    return (
        <Layout>
            <div>
                <p onClick={addNumber}>{number}</p>
            </div>
        </Layout>
    )
}

export default HomePage;