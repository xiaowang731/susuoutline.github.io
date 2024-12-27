import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss';  // 引入全局样式（包括重置样式）

createRoot(document.getElementById('root')).render(
    <App />
)
