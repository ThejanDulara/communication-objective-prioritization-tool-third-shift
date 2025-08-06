import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { objectives, objectiveIndices } from '../data/questions';
import { PolarRadiusAxis } from 'recharts';

function ResultSection({ scores }) {
  const data = objectives.map(obj => {
    const indices = objectiveIndices[obj];
    const avg = indices.reduce((sum, i) => sum + scores.scores[i], 0) / indices.length;
    const inv = 10 - avg;
    return { objective: obj, score: +inv.toFixed(2) };
  });

  return (
    <div className="results-container">
      <h2 className="results-title">
        <span className="chart-icon">🧭</span>
        Prioritization Radar: <span className="campaign-name">{scores.campaignName || "Brand"}</span>
      </h2>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={data}>
          <PolarGrid stroke="#cbd5e0" />
          <PolarAngleAxis dataKey="objective" tick={{ fill: "#4a5568", fontSize: 14 }} />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 10]}
            tickCount={6} // This creates 5 lines (0, 2, 4, 6, 8, 10)
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Priority"
            dataKey="score"
            stroke="#e53e3e"
            fill="#e53e3e"
            fillOpacity={0.3}
          />
        </RadarChart>
        </ResponsiveContainer>
      </div>

      <style jsx>{`
        .results-container {
          background: #ffffff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin: 2rem auto 0;
          width: 100%;
          box-sizing: border-box;
        }

        .results-title {
          text-align: center;
          color: #2d3748;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .chart-icon {
          font-size: 1.5rem;
        }

        .campaign-name {
          color: #4c51bf;
          font-weight: 600;
        }

        .chart-wrapper {
          width: 100%;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .results-container {
            padding: 2.5rem;
          }

          .results-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ResultSection;
