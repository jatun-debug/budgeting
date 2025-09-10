// Destructure hooks and components from the global objects provided by the CDNs
const { useState, createContext, useContext, useEffect, useRef } = React;
const { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } = Recharts;
const { motion, AnimatePresence } = window["framer-motion"];

// --- ICONS (Same as provided) ---
const ChevronDown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);
const Sun = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>
);
const Moon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const Plus = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
);
const LayoutDashboard = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);
const ArrowLeftRight = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
);
const Target = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const Rocket = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.64-1.21 2.06-2.67 3.22-3.83 1.16-1.16 2.62-2.58 3.83-3.22.81-.66 2.27-.66 3.11-.05 1.26 1.5 5 2 5 2s-.5-3.74-2-5c-.84-.71-2.3-.7-3.11.05-1.21.64-2.67 2.06-3.83 3.22-1.16 1.16-2.58 2.62-3.22 3.83-.66.81-.66 2.27.05 3.11Z"/></svg>
);
const Bot = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);
const Settings = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0 2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const ArrowUp = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>;
const ArrowDown = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>;
const LogOut = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
const X = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const Sparkles = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;
const SendHorizontal = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>;


// --- THEME CONTEXT ---
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {    
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


// --- MOCK DATA & API (Same as provided) ---
const mockUser = {
    name: 'Rangga',
    avatarUrl: 'https://placehold.co/100x100/A084E8/FFFFFF?text=R&font=poppins'
};
const mockTransactions = [
    { id: 1, type: 'pengeluaran', category: 'Makanan', amount: 55000, date: '2025-09-03', note: 'Makan siang Kopi Kenangan' },
    { id: 2, type: 'pemasukan', category: 'Gaji', amount: 5000000, date: '2025-09-01', note: 'Gaji bulanan' },
    { id: 3, type: 'pengeluaran', category: 'Transportasi', amount: 75000, date: '2025-09-03', note: 'Gojek ke kantor PP' },
    { id: 4, type: 'pengeluaran', category: 'Hiburan', amount: 120000, date: '2025-09-02', note: 'Nonton bioskop' },
    { id: 5, type: 'pengeluaran', category: 'Tagihan', amount: 250000, date: '2025-09-04', note: 'Bayar internet' },
    { id: 6, type: 'pengeluaran', category: 'Makanan', amount: 32000, date: '2025-09-04', note: 'Jajan Mixue' },
    { id: 7, type: 'pengeluaran', category: 'Belanja', amount: 350000, date: '2025-09-05', note: 'Beli baju Uniqlo' },
];
const mockCategories = {
    pengeluaran: ['Makanan', 'Transportasi', 'Hiburan', 'Tagihan', 'Belanja', 'Lainnya'],
    pemasukan: ['Gaji', 'Bonus', 'Freelance', 'Hadiah']
};
const mockBudgets = [
    { category: 'Makanan', limit: 1500000, spent: 87000 },
    { category: 'Transportasi', limit: 500000, spent: 75000 },
    { category: 'Hiburan', limit: 700000, spent: 120000 },
];
const PIE_CHART_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28'];

const callGeminiAPI = async (prompt) => {
    console.log("Memanggil Gemini API dengan prompt:", prompt);
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (prompt.includes("sarankan kategori untuk deskripsi")) {
        const description = prompt.split("'")[1];
        if (description.toLowerCase().includes("kopi") || description.toLowerCase().includes("makan")) return "Makanan";
        if (description.toLowerCase().includes("gojek") || description.toLowerCase().includes("bensin")) return "Transportasi";
        if (description.toLowerCase().includes("bioskop") || description.toLowerCase().includes("spotify")) return "Hiburan";
        return "Lainnya";
    }
    if (prompt.includes("berikan saya satu tips hemat")) {
        return "Pengeluaran terbesarmu ada di kategori Belanja. Coba buat daftar belanja sebelum pergi dan patuhi itu untuk menghindari pembelian impulsif!";
    }
    if (prompt.includes("kamu adalah asisten keuangan")) {
        if (prompt.toLowerCase().includes("pengeluaran transportasi")) return "Total pengeluaran transportasi bulan ini adalah Rp 75.000.";
        if (prompt.toLowerCase().includes("pengeluaran terbesar")) return "Pengeluaran terbesarmu bulan ini adalah untuk Belanja, yaitu sebesar Rp 350.000.";
        if (prompt.toLowerCase().includes("pengeluaran makanan")) return "Total pengeluaran untuk makanan bulan ini adalah Rp 87.000.";
        return "Maaf, aku belum mengerti pertanyaan itu. Coba tanyakan tentang total pengeluaran per kategori, contoh: 'Berapa pengeluaran makanan?'";
    }
    return "Maaf, terjadi kesalahan. Coba lagi nanti.";
};

// --- UI & APP COMPONENTS (Same as provided, but no 'export default') ---
// ... (All your other components like Card, Button, Input, Dialog, Header, Sidebar, DashboardPage, etc., go here) ...
// For brevity, I am omitting the full component code here. Just copy-paste everything from your original file 
// starting from the `const Card = ...` component all the way down to the `const ChatbotDialog = ...` component.

// --- MAIN APP COMPONENT ---
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    if (!isLoggedIn) {
        return <ThemeProvider><LoginPage onLogin={handleLogin} /></ThemeProvider>;
    }
    
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
                <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
                    <div className="hidden md:block">
                        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={handleLogout}/>
                    </div>
                    <main className="p-4 md:p-6 overflow-y-auto">
                        <Header />
                        {currentPage === 'dashboard' && <DashboardPage />}
                        {currentPage === 'anggaran' && <BudgetPage />}
                        {currentPage === 'pengaturan' && <SettingsPage />}
                        {currentPage === 'transaksi' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Card><CardHeader><CardTitle>Halaman Transaksi</CardTitle><CardDescription>Segera hadir!</CardDescription></CardHeader></Card></motion.div>}
                    </main>
                </div>
                
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.5 }} className="fixed bottom-6 right-6 z-40">
                    <Button onClick={() => setIsFormOpen(true)} className="rounded-full p-4 shadow-lg w-16 h-16 flex items-center justify-center">
                        <Plus className="w-8 h-8"/>
                    </Button>
                </motion.div>
                
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.7 }} className="fixed bottom-6 left-6 z-40">
                    <Button onClick={() => setIsChatbotOpen(true)} variant="secondary" className="rounded-full p-4 shadow-lg w-16 h-16 flex items-center justify-center">
                        <Bot className="w-8 h-8 text-purple-500"/>
                    </Button>
                </motion.div>

                <TransactionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
                <ChatbotDialog isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
            </div>
        </ThemeProvider>
    );
}


// --- This is the new part that renders your App to the DOM ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
