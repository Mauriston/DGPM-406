
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Capitulo1 from './pages/Capitulo1';
import Capitulo2 from './pages/Capitulo2';
import Capitulo3 from './pages/Capitulo3';
import Capitulo4 from './pages/Capitulo4';
import Capitulo6 from './pages/Capitulo6';
import Capitulo7 from './pages/Capitulo7';
import Capitulo8 from './pages/Capitulo8';
import Capitulo9 from './pages/Capitulo9';
import Capitulo10 from './pages/Capitulo10';
import Capitulo11 from './pages/Capitulo11';
import Capitulo13 from './pages/Capitulo13';
import Capitulo17 from './pages/Capitulo17';
import AnexoO from './pages/AnexoO';
import AnexoN from './pages/AnexoN';
import Icon from './components/Icon';

const chapters = [
  { id: 'home', title: 'Início', component: <Home />, icon: 'home' },
  { id: 'capitulo-1', title: 'Cap 1: Estrutura do Subsistema Médico-Pericial', component: <Capitulo1 />, icon: 'hub' },
  { id: 'capitulo-2', title: 'Cap 2: Processos das Inspeções de Saúde', component: <Capitulo2 />, icon: 'rule_folder' },
  { id: 'capitulo-3', title: 'Cap 3: Procedimentos de Ingresso no SAM', component: <Capitulo3 />, icon: 'login' },
  { id: 'capitulo-4', title: 'Cap 4: Inspeções Pós-Admissionais', component: <Capitulo4 />, icon: 'event_repeat' },
  { id: 'capitulo-6', title: 'Cap 6: VDF e Término de Incapacidade', component: <Capitulo6 />, icon: 'playlist_add_check' },
  { id: 'capitulo-7', title: 'Cap 7: IS para Justiça e Disciplina', component: <Capitulo7 />, icon: 'gavel' },
  { id: 'capitulo-8', title: 'Cap 8: Exclusão do Serviço Ativo', component: <Capitulo8 />, icon: 'logout' },
  { id: 'capitulo-9', title: 'Cap 9: Concessão de Benefícios', component: <Capitulo9 />, icon: 'redeem' },
  { id: 'capitulo-10', title: 'Cap 10: IS para Servidores Civis', component: <Capitulo10 />, icon: 'badge' },
  { id: 'capitulo-11', title: 'Cap 11: IS para Serviço Militar Temporário', component: <Capitulo11 />, icon: 'military_tech' },
  { id: 'capitulo-13', title: 'Cap 13: Comprovação de Nexo Causal', component: <Capitulo13 />, icon: 'medical_information' },
  { id: 'capitulo-17', title: 'Cap 17: Exame Toxicológico', component: <Capitulo17 />, icon: 'science' },
  { id: 'anexo-n', title: 'Anexo N: Padrões Psicofísicos', component: <AnexoN />, icon: 'checklist_rtl' },
  { id: 'anexo-o', title: 'Anexo O: Exames Mínimos', component: <AnexoO />, icon: 'biotech' },
];

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const pageExists = chapters.some(c => c.id === hash);
      setActivePage(pageExists ? hash : 'home');
      setIsMenuOpen(false); // Close menu on navigation
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange, false);
    handleHashChange(); // Initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const renderPage = () => {
    return chapters.find(c => c.id === activePage)?.component || <Home />;
  };

  const NavLinks = () => (
    <>
      {chapters.map((chapter) => (
        <a
          key={chapter.id}
          href={`#/${chapter.id}`}
          className={`flex items-center p-3 my-1 rounded-md text-base transition-colors duration-200 ${
            activePage === chapter.id
              ? 'bg-accent-cyan text-navy-main font-bold'
              : 'text-gray-200 hover:bg-navy-accent hover:text-white'
          }`}
        >
          <Icon name={chapter.icon} className="mr-4 text-2xl" />
          <span className="flex-1">{chapter.title}</span>
        </a>
      ))}
    </>
  );

  return (
    <div className="flex min-h-screen bg-navy-main">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-navy-light rounded-md text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu"
      >
        <Icon name="menu" className="text-3xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-navy-light w-72 p-4 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center mb-8 h-16 pl-2 flex-shrink-0">
            <Icon name="local_hospital" className="text-accent-gold text-4xl mr-3"/>
            <h1 className="font-oswald text-2xl font-bold text-white">DGPM-406</h1>
        </div>
        <nav className="flex-grow overflow-y-auto">
          <NavLinks />
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:pl-72 transition-all duration-300">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
