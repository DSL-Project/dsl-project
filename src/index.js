import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './appContext';
import { FilterProvider } from './filterContext';
import 'mapbox-gl/dist/mapbox-gl.css';
import './fonts/Non-Commercial/MDSystem/MDSystem-Bold.otf';
import './fonts/Non-Commercial/MDSystem/MDSystem-Medium.otf';
import './fonts/Non-Commercial/MDSystem/MDSystem-Regular.otf';
import './fonts/Non-Commercial/MDSystem/MDSystem-Semibold.otf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <FilterProvider>
                    <App />
                </FilterProvider>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
