/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Printer, 
  Bike, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Instagram, 
  MessageCircle, 
  ChevronDown, 
  ArrowRight, 
  LayoutGrid,
  History,
  FileCheck,
  Send,
  Zap,
  Star,
  FileStack,
  BookOpen,
  Maximize2,
  Stamp,
  Contact,
  MailOpen
} from 'lucide-react';
import { useState, useEffect } from 'react';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1x52SoWDJqMvlj-9FChPeO8oLtCNDB_osWaJA-ExgwLo/viewform?pli=1&pli=1&edit_requested=true";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'layanan', 'cara-pesan', 'portfolio', 'testimoni', 'faq'];
      let current = 'home';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Layanan', href: '#layanan', id: 'layanan' },
    { name: 'Cara Pesan', href: '#cara-pesan', id: 'cara-pesan' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Testimoni', href: '#testimoni', id: 'testimoni' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-3 shadow-md' : 'bg-white py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:rotate-12 transition-transform">
            <img
              src="/logo.png"
              alt="Go.Printy Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-on-surface">Go.Printy</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors tracking-wide ${activeSection === link.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const bgIcons = [
    { icon: <Printer size={48} />, top: '15%', left: '5%', delay: 0 },
    { icon: <Zap size={32} />, top: '25%', left: '45%', delay: 1 },
    { icon: <Bike size={40} />, top: '65%', left: '15%', delay: 2 },
    { icon: <FileText size={36} />, top: '10%', left: '85%', delay: 1.5 },
    { icon: <Star size={28} />, top: '75%', left: '85%', delay: 0.5 },
  ];

  return (
    <section id="home" className="relative pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden min-h-[calc(100vh-80px)] xl:min-h-[85vh] flex items-center">
      <div className="gradient-blur top-[-10%] right-[-10%] scale-150 opacity-40" />
      <div className="gradient-blur bottom-[-10%] left-[-10%] scale-150 opacity-30" />
      
      {/* Blurred Floating Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {bgIcons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.07,
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 10 + idx * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: item.delay 
            }}
            style={{ 
              position: 'absolute', 
              top: item.top, 
              left: item.left,
              filter: 'blur(4px)'
            }}
            className="text-primary"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 rounded-full text-primary font-bold text-xs mb-6 border border-primary/20">
            <Zap size={14} fill="currentColor" />
            <span>SOLUSI CETAK MODERN</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
            Solusi cetak tugas <span className="text-primary text-glow">tanpa antre!</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed font-semibold">
            Cetak tugas, poster, banner, dan kebutuhan printing lainnya dengan proses cepat, praktis, dan hasil berkualitas tinggi.
          </p>
          

          <motion.a 
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 transition-all group button-glow"
          >
            Mulai Pesan Sekarang
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative z-10 w-full max-w-[500px]">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full translate-y-1/4" />
            <motion.div
              className="relative p-4"
            >
              <img 
                src="courier.png" 
                alt="Go.Printy Courier"
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            {/* Floating Assets */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-12 bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-xl z-20 border border-white/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Printer size={28} />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-12 bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-xl z-20 border border-white/50"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Bike size={28} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Flyer', desc: 'Media promosi efektif', icon: <FileStack size={24} className="text-primary" />, color: 'bg-primary/10' },
    { title: 'Brosur', desc: 'Info produk mendalam', icon: <BookOpen size={24} className="text-secondary" />, color: 'bg-secondary/10' },
    { title: 'Banner', desc: 'Cetak ukuran besar', icon: <Maximize2 size={24} className="text-accent" />, color: 'bg-accent/10' },
    { title: 'Stiker', desc: 'Label & Kemasan', icon: <Stamp size={24} className="text-primary" />, color: 'bg-primary/10' },
    { title: 'Kartu Nama', desc: 'Identitas profesional', icon: <Contact size={24} className="text-secondary" />, color: 'bg-secondary/10' },
    { title: 'Undangan', desc: 'Momen berharga Anda', icon: <MailOpen size={24} className="text-accent" />, color: 'bg-accent/10' },
  ];

  return (
    <section id="layanan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            LAYANAN KAMI
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black"
          >
            Segala Kebutuhan Cetak
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-12`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-base mb-1">{item.title}</h4>
              <p className="text-xs text-on-surface-variant line-clamp-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
  <p className="text-sm text-on-surface-variant font-medium">
    Dan masih banyak layanan lainnya sesuai kebutuhan Anda
  </p>
</div>
      </div>
    </section>
  );
};

const OrderFlow = () => {
  const steps = [
    { num: '1', title: 'Isi Form', desc: 'Unggah file & detail pesanan', icon: <FileText size={24} /> },
    { num: '2', title: 'Pesanan Masuk', desc: 'Otomatis tercatat di sistem', icon: <CheckCircle2 size={24} /> },
    { num: '3', title: 'Admin Memproses', desc: 'Tim segera mengecek file', icon: <Zap size={24} /> },
    { num: '4', title: 'Selesai', desc: 'Siap diambil atau dikirim', icon: <Bike size={24} />, active: true },
  ];

  return (
    <section id="cara-pesan" className="py-24 overflow-hidden bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Cara Pesan Tanpa Ribet
          </motion.h2>
          <p className="text-on-surface-variant">Hanya butuh 4 langkah mudah untuk hasil cetak terbaik.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-outline-variant/30 border-t-2 border-dashed border-outline-variant/50" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className={`w-20 h-20 rounded-3xl ${step.active ? 'bg-primary text-on-surface shadow-xl shadow-primary/20' : 'bg-white border border-outline-variant/20 shadow-lg'} flex items-center justify-center font-black text-2xl mb-6 transition-transform hover:scale-110`}>
                {step.num}
              </div>
              <div className="text-primary mb-3">
                {step.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-on-surface-variant max-w-[180px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const images = [
    "flyer.png",
    "brosur.png",
    "banner.png",
    "stiker.jpg",
    "kartu_nama.jpg",
    "undangan.jpg",
  ];
  
const portfolioTitles = [
  "Flyer",
  "Brosur",
  "Banner",
  "Stiker",
  "Kartu Nama",
  "Undangan"
];

  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-black">Hasil Cetak Kami</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 aspect-square"
            >
              <img 
                src={src} 
                alt={`Portfolio piece ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {portfolioTitles[idx]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Andi Wijaya", text: "Sangat terbantu buat ngeprint skripsi. Prosesnya cepat dan hasilnya tajam banget. Rekomended!" },
    { name: "Sari Putri", text: "Print poster buat acara kantor di Go.Printy hasilnya memuaskan. Warnanya akurat dan kertasnya tebal. Adminnya juga ramah." },
    { name: "Budi Santoso", text: "Gak perlu antre lagi kalau mau print stiker label produk. Kirim file via WA, bayar, besoknya sudah sampai depan pintu." },
  ];

  return (
    <section id="testimoni" className="py-24 bg-surface-container/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            TESTIMONI
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black"
          >
            Apa Kata Mereka
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all"
            >
              <p className="text-lg text-on-surface leading-relaxed mb-8 italic">"{item.text}"</p>
              <div className="font-bold text-on-surface">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Apa yang membuat layanan Go.Printy berbeda dari jasa print lainnya?", a: "Go.Printy berbeda karena menawarkan layanan print yang praktis, cepat, harga terjangkau, serta bisa pesan dan kirim hasil print secara online sehingga memudahkan mahasiswa dan anak kos." },
    { q: "Siapa target utama pelanggan Go.Printy?", a: "Target utama pelanggan Go.Printy adalah mahasiswa semester akhir, mahasiswa skripsi, dan mahasiswa praktikum yang membutuhkan layanan print cepat dan praktis." },
    { q: "Apakah bisa print langsung dari file WhatsApp atau Google Drive?", a: "Ya, Go.Printy menerima file print langsung melalui goggle form yang diakses dari Google Drive sehingga lebih praktis dan mudah" },
    { q: "Berapa lama proses cetak?", a: "Dokumen standar selesai 15-30 menit. Volume besar atau jilid bisa memakan waktu 1-3 jam." },
    { q: "Bisa custom ukuran?", a: "Bisa. Kami melayani berbagai ukuran kustom dari stiker mini hingga banner raksasa." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">Pertanyaan Yang Sering Ditanyakan</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-3xl border border-outline-variant/10 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-lg hover:bg-surface-container/10 transition-colors"
                id={`faq-button-${idx}`}
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  className="text-primary"
                >
                  <ChevronDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Logo Go.Printy"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter">Go.Printy</span>
            </div>
            <p className="text-on-surface-variant max-w-sm mb-8 leading-relaxed">
              Solusi digital printing modern untuk segala kebutuhan tugas dan bisnis Anda. Cepat, berkualitas, dan tanpa ribet.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6">Kontak Kami</h5>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-center gap-3">
                <a href="https://wa.me/6287723426331" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <MessageCircle size={18} className="text-primary" />
                  <span>WhatsApp: +62 877-2342-6331</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://instagram.com/go.printy" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Instagram size={18} className="text-primary" />
                  <span>Instagram: @go.printy</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Operasional</h5>
            <div className="text-sm text-on-surface-variant space-y-2">
              <p>Senin - Jumat: 07.00 - 18.00</p>
              <p>Sabtu - Minggu: 08.00 - 16.00</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant/60">
          <p>© 2026 Go.Printy Digital Printing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/6287723426331"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-on-surface px-4 py-2 rounded-xl shadow-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Chat Admin
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <main className="relative bg-background min-h-screen selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      <OrderFlow />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
