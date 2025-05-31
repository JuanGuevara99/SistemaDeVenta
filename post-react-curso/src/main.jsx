import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

// ✅ Protección para que createRoot no se llame 2 veces
if (!container._root) {
  const root = createRoot(container);
  container._root = root;

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
