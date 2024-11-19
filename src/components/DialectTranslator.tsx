import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translateToDialect } from '../lib/translationService';

interface TranslationHistory {
  input: string;
  output: string;
  pronunciation: string;
  dialect: string;
}

const DialectTranslator: React.FC = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [selectedDialect, setSelectedDialect] = useState<'ancient' | 'cypriot' | 'pontic' | 'cretan'>('ancient');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<TranslationHistory[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('translationHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const saveToHistory = (input: string, output: string, pronunciation: string, dialect: string) => {
    const newHistory = [{ input, output, pronunciation, dialect }, ...history.slice(0, 4)];
    setHistory(newHistory);
    localStorage.setItem('translationHistory', JSON.stringify(newHistory));
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError(t('emptyInputError'));
      setOutputText('');
      setPronunciation('');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const { translation, pronunciation } = translateToDialect(inputText, selectedDialect);
      if (translation === 'Translation not available') {
        setOutputText('');
        setPronunciation('');
        setError(t('translationNotAvailable'));
      } else {
        setOutputText(translation);
        setPronunciation(pronunciation);
        saveToHistory(inputText, translation, pronunciation, t(`dialects.${selectedDialect}`));
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <div className="mb-4">
        <label className="block mb-2">{t('inputLabel')}</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">{t('dialectLabel')}</label>
        <select
          value={selectedDialect}
          onChange={(e) => setSelectedDialect(e.target.value as 'ancient' | 'cypriot' | 'pontic' | 'cretan')}
          className="w-full p-2 border rounded"
        >
          {Object.entries(t('dialects', { returnObjects: true })).map(([key, value]) => (
            <option key={key} value={key}>
              {value as string}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleTranslate}
        disabled={isLoading}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? t('translating') : t('translateButton')}
      </button>
      {error && <div className="mt-4 text-red-500">{error}</div>}
      {outputText && !isLoading && (
        <div className="mt-4">
          <label className="block mb-2">{t('outputLabel')}</label>
          <div className="p-2 border rounded bg-gray-100">{outputText}</div>
          {pronunciation && (
            <div className="mt-2">
              <label className="block mb-2">{t('pronunciationLabel')}</label>
              <div className="p-2 border rounded bg-gray-100">{pronunciation}</div>
            </div>
          )}
        </div>
      )}
      {isLoading && <div className="mt-4">{t('loadingMessage')}</div>}
      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">{t('recentTranslations')}</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.input}</strong> → {item.output} ({item.dialect})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DialectTranslator;