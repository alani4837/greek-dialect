type Dialect = 'ancient' | 'cypriot' | 'pontic' | 'cretan';

interface TranslationResult {
  translation: string;
  pronunciation: string;
}

const mockTranslations: Record<Dialect, Record<string, TranslationResult>> = {
  ancient: {
    'γεια σας': { translation: 'χαίρετε', pronunciation: 'KHY-reh-teh' },
    'ευχαριστώ': { translation: 'χάριν οἶδα', pronunciation: 'KHA-rin OY-da' },
    'καλημέρα': { translation: 'χαῖρε', pronunciation: 'KHY-reh' },
  },
  cypriot: {
    'γεια σας': { translation: 'γεια σας ρε', pronunciation: 'YA sas RE' },
    'ευχαριστώ': { translation: 'ευχαριστώ πολλά', pronunciation: 'ef-kha-ri-STO po-LA' },
    'καλημέρα': { translation: 'καλημέρα σας', pronunciation: 'ka-li-ME-ra sas' },
  },
  pontic: {
    'γεια σας': { translation: 'καλώς εσάς', pronunciation: 'ka-LOS e-SAS' },
    'ευχαριστώ': { translation: 'καλά να εισ\'', pronunciation: 'ka-LA na is' },
    'καλημέρα': { translation: 'καλημέραν', pronunciation: 'ka-li-ME-ran' },
  },
  cretan: {
    'γεια σας': { translation: 'γεια σου ίντα κάνεις;', pronunciation: 'YA su IN-ta KA-nis' },
    'ευχαριστώ': { translation: 'σε καλό σου', pronunciation: 'se ka-LO su' },
    'καλημέρα': { translation: 'καλημέρα ίντα;', pronunciation: 'ka-li-ME-ra IN-ta' },
  },
};

export const translateToDialect = (text: string, dialect: Dialect): TranslationResult => {
  const normalizedText = text.toLowerCase().trim();
  return mockTranslations[dialect][normalizedText] || { translation: 'Translation not available', pronunciation: '' };
};