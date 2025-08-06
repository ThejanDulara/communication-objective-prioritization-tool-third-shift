// src/data/questions.js
export const questions = [
  ["What % of your target audience is aware of your brand?", "Awareness"],
  ["How well do consumers recall your brand vs. competitors?", "Awareness"],
  ["How likely is your brand to be considered among the top 3 choices in the category?", "Consideration"],
  ["How well does your brand communicate functional & emotional benefits?", "Consideration"],
  ["How easy is it for a customer to buy your product (availability, pricing, access)?", "Conversion"],
  ["What is your recent conversion rate from leads/interest to purchase?", "Conversion"],
  ["How frequently do existing customers repurchase?", "Retention"],
  ["How satisfied are your existing customers (e.g., via NPS or feedback)?", "Retention"],
  ["How often do customers recommend your brand to others?", "Advocacy"],
  ["What is the volume/quality of user-generated content or positive reviews?", "Advocacy"]
];

export const objectives = ["Awareness", "Consideration", "Conversion", "Retention", "Advocacy"];

export const objectiveIndices = (() => {
  const objMap = {};
  objectives.forEach((obj) => (objMap[obj] = []));
  questions.forEach(([_, obj], idx) => {
    objMap[obj].push(idx);
  });
  return objMap;
})();
