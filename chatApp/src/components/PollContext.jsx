import React, {createContext, useState} from 'react';

export const PollContext = createContext();

const PollProvider = ({children}) => {
  const [question, setQuestion] = useState('');
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [answers, setAnswers] = useState([
    {option: '', votes: 0},
    {option: '', votes: 0},
    {option: '', votes: 0},
    {option: '', votes: 0},
  ]);
  
  return (
    <PollContext.Provider value={{question, setQuestion, answers, setAnswers,isModelOpen, setIsModelOpen}}>
      {children}
    </PollContext.Provider>
  );
};

export default PollProvider;
