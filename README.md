# Greek Dialect Translator

A web application that translates Modern Greek phrases into various Greek dialects, including Ancient Greek, Cypriot Greek, Pontic Greek, and Cretan Greek. The application also features an interactive quiz to help users learn different Greek dialects.

## Features

- **Dialect Translation**: Translate Modern Greek phrases into four different Greek dialects
- **Interactive Quiz**: Test your knowledge of Greek dialects with an interactive quiz
- **Pronunciation Guide**: Get pronunciation hints for translated phrases
- **Translation History**: Keep track of your recent translations
- **Bilingual Interface**: Switch between English and Greek interface languages
- **Dark Mode Support**: Toggle between light and dark themes

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with GitHub provider
- **Internationalization**: i18next
- **Theme Management**: next-themes
- **State Management**: React hooks

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/               # Next.js app directory
├── components/        # React components
│   ├── DarkModeToggle.tsx
│   ├── DialectQuiz.tsx
│   ├── DialectTranslator.tsx
│   ├── LanguageSwitcher.tsx
│   └── ThemeProvider.tsx
├── lib/              # Utility functions and services
│   ├── i18n.ts
│   └── translationService.ts
└── locales/          # Translation files
    ├── el/           # Greek translations
    └── en/           # English translations
```

## Available Dialects

The translator currently supports the following Greek dialects:
- Ancient Greek (Αρχαία Ελληνικά)
- Cypriot Greek (Κυπριακά Ελληνικά)
- Pontic Greek (Ποντιακά Ελληνικά)
- Cretan Greek (Κρητικά Ελληνικά)

## Translation Service

The application currently uses a mock translation service with predefined translations for common phrases. The translation service can be found in `src/lib/translationService.ts`.

Available phrases for translation include:
- γεια σας (hello)
- ευχαριστώ (thank you)
- καλημέρα (good morning)

## Contributing

Contributions are welcome! Here are some ways you can contribute to the project:

1. Add more Greek dialects
2. Expand the translation dictionary
3. Improve pronunciation guides
4. Add new features
5. Fix bugs
6. Improve documentation

## Future Enhancements

- [ ] Add more Greek dialects
- [ ] Expand the phrase dictionary
- [ ] Implement API-based translation service
- [ ] Add audio pronunciation
- [ ] Include dialect learning resources
- [ ] Add user accounts to save translation history

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the Greek language community for dialect information
- Next.js team for the amazing framework
- All contributors who help improve this project
