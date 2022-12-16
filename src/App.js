import React from 'react';
import { Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
    return (
        <>
            <main className="container">
                <Navbar />
            </main>
        </>
    );
}

export default App;
