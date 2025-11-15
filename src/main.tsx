import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("L'élément avec l'ID 'root' est introuvable dans le DOM");
}

const root = createRoot(rootElement);

// Rendre le composant principal de l'application
root.render(<App />);
