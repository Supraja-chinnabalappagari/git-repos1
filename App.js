import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './uicomponents/Header';
import Home from './uicomponents/Home';
import UploadData from './uicomponents/UploadData';
import TestResults from './uicomponents/TestResults';
import Footer from './uicomponents/Footer';


import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main className="main-content">{ }
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/upload" element={<UploadData />} />
                        <Route path="/results" element={<TestResults />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
