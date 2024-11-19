import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translateToDialect } from '../lib/translationService';

const DialectQuiz: React.FC = () => {
  const { t } = useTranslation();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState('');

  const dialects = ['ancient', 'cypriot', 'pontic', 'cretan'];
  const phrases = ['γεια σας', 'ευχαριστώ', 'καλημέρα'];

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const randomDialect = dialects[Math.floor(Math.random() * dialects.length)] as 'ancient' | 'cypriot' | 'pontic' | 'cretan';
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    const { translation } = translateToDialect(randomPhrase, randomDialect);
    setQuestion(`${t('How is')} "${randomPhrase}" ${t('in')} ${t(`dialects.${randomDialect}`)}?`);
    setCorrectAnswer(translation);

    const wrongOptions = dialects
      .filter(d => d !== randomDialect)
      .map(d => translateToDialect(randomPhrase, d as 'ancient' | 'cypriot' | 'pontic' | 'cretan').translation);
    
    setOptions([translation, ...wrongOptions.slice(0, 3)].sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setResult(t('Correct'));
    } else {
      setResult(t('Incorrect'));
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer('');
    setResult('');
    generateQuestion();
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">{t('Quiz')}</h2>
      <p className="mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full p-2 text-left border rounded ${
              selectedAnswer === option
                ? option === correctAnswer
                  ? 'bg-green-200'
                  : 'bg-red-200'
                : 'bg-white'
            }`}
            disabled={!!selectedAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      {result && (
        <div className="mt-4">
          <p>{result}</p>
          <button
            onClick={handleNextQuestion}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {t('nextQuestion')}
          </button>
        </div>
      )}
    </div>
  );
};

export default DialectQuiz;