<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import 'antd/dist/reset.css';
import './index.css';
import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer';

// Lazy-loaded pages
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Gallery = lazy(() => import('./Pages/Gallery/Gallery'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Help = lazy(() => import('./Pages/Help/Help'));

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full">
                <Spin size="large" tip="Loading..." />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> 284bd5b47f7acac97832d3f94b5b04f9bc1f3b65
