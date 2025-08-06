import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputSection from './components/InputSection';
import ResultSection from './components/ResultSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [results, setResults] = React.useState(null);
  const resultsRef = React.useRef(null);

  const handleCalculate = (data) => {
    setResults(data);
    toast.success("Prioritization completed!");
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />

      <div className="content-container">
        <div className="section-wrapper">
          <div className="inner-container">
            <InputSection onCalculate={handleCalculate} />
            <div ref={resultsRef}>
              {results && <ResultSection scores={results} />}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .app-container {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          background: #f3e8ff;
          padding: 0;
          margin: 0;
          overflow-x: hidden; /* ✅ prevent horizontal scroll */
        }

        .content-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 2rem 0;
        }

        .section-wrapper {
          width: 100%;
          max-width: 1400px;
          background: #e9d5ff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 2rem;
          box-sizing: border-box;
        }

        .inner-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default App;
