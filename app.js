// 1. Mengimpor library inti dari React
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Mengimpor file CSS global (jika ada)
import './style.css';

// 3. Mengimpor KOMPONEN UTAMA yang berisi SELURUH aplikasi Anda
import App from './budgeting_app.jsx'; 

// 4. Mencari "pintu masuk" di file HTML
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// 5. Memberi perintah untuk "merender" atau menampilkan komponen utama di pintu masuk tersebut
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
