import React, { useState } from 'react';
import { questions } from '../data/questions';

function InputSection({ onCalculate }) {
  const [campaignName, setCampaignName] = useState('');
  const [scores, setScores] = useState(Array(questions.length).fill(5));

  const handleSliderChange = (index, value) => {
    const updated = [...scores];
    updated[index] = Number(value);
    setScores(updated);
  };

  const handleInputChange = (index, value) => {
    const val = Number(value);
    if (!isNaN(val) && val >= 1 && val <= 10) {
      const updated = [...scores];
      updated[index] = val;
      setScores(updated);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = scores.every(v => v >= 1 && v <= 10);
    if (!valid) return alert("Scores must be between 1 and 10.");

    onCalculate({ campaignName, scores });
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-section">
        <label className="form-label"><strong>Brand Name</strong></label>
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          className="campaign-name-input"
          placeholder="Enter brand name"
        />
      </div>

      <p className="instruction-line">Rate each statement on a scale from <strong>1</strong> (Low Priority) to <strong>10</strong> (High Priority).</p>

      <div className="question-grid">
        {questions.map(([question], i) => (
          <div key={i} className="question-item">
            <label className="question-label">{`Q${i + 1}. ${question}`}</label>
            <div className="dual-input">
              <input
                type="range"
                min="1"
                max="10"
                value={scores[i]}
                onChange={(e) => handleSliderChange(i, e.target.value)}
              />
              <input
                type="number"
                min="1"
                max="10"
                value={scores[i]}
                onChange={(e) => handleInputChange(i, e.target.value)}
                className="score-input"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="submit-button-container">
        <button type="submit" className="submit-button">🚀 See Results</button>
      </div>

      <style jsx>{`
        .input-form {
          background: #ffffff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          width: 100%;
          box-sizing: border-box;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: #2d3748;
          font-size: 0.875rem;
        }

        .campaign-name-input {
          width: 97%;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .campaign-name-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        }

        .instruction-line {
          font-size: 0.875rem;
          color: #744210;
          background-color: #fffbea;
          border-left: 4px solid #ecc94b;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          margin: 1rem 0 2rem;
        }

        .question-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .question-item {
          display: flex;
          flex-direction: column;
        }

        .question-label {
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .dual-input {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        input[type="range"] {
          flex: 1;
        }

        .score-input {
          width: 70px;
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .submit-button-container {
          display: flex;
          justify-content: flex-end;
        }

        .submit-button {
          padding: 0.75rem 1.5rem;
          background-color: #4c51bf;
          color: white;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .submit-button:hover {
          background-color: #434190;
          transform: translateY(-1px);
        }

        .submit-button:active {
          transform: translateY(0);
        }
      `}</style>
    </form>
  );
}

export default InputSection;
