import ReactDOM from 'react-dom/client';
import './assets/style/Global.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Master from './pages/Contents';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Master />
                } />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);