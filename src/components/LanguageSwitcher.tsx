import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mb-4">
      <button
        className={`mr-2 px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'el' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('el')}
      >
        Ελληνικά
      </button>
    </div>
  );
};

export default LanguageSwitcher;