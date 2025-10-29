
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';

const Capitulo17: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            Exame Toxicológico
          </h1>
        </header>

        <Section title="Modalidades e Orientações" icon="science">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-10">
            Realizado para pesquisa de substâncias ilícitas em diversas modalidades de IS, devido ao alto grau de higidez física e mental exigido na carreira militar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Modalidades de IS" icon="checklist">
              <p className="text-lg">Inclui IS de Ingresso, Engajamento, Controle Periódico, Inopinada, Seleção para Atividades Especiais e Conclusão de Curso de Formação.</p>
            </InfoCard>
            <InfoCard title="Matriz Biológica" icon="biotech">
              <p className="text-lg">Utiliza-se a matriz "fâneros" (cabelo, pelo ou raspas de unhas), com janela de detecção mínima de 90 dias.</p>
            </InfoCard>
            <InfoCard title="Resultado Positivo" icon="report">
              <p className="text-lg">É impeditivo para ingresso na MB e pode levar à inaptidão em outras IS. Garante-se o direito à contraprova.</p>
            </InfoCard>
          </div>
        </Section>

        <Section title="Procedimentos Chave" icon="rule_folder">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="IS Pós-Admissionais" icon="assignment_turned_in">
              <p className="text-lg">A análise visa antecipar a intervenção clínica. Requer o preenchimento do Termo de Consentimento Livre e Esclarecido (TCLE) pelo militar.</p>
            </InfoCard>
            <InfoCard title="IS de Controle Periódico" icon="event_repeat">
              <p className="text-lg">Realizado por amostragem, selecionando-se até 10% dos militares submetidos anualmente a esta modalidade de IS.</p>
            </InfoCard>
            <InfoCard title="IS Inopinada" icon="notification_important">
              <p className="text-lg">Pode ser "direcionada" (com suspeita razoável) ou "aleatória" (sorteio). A solicitação é pontual e discricionária do Titular da OM.</p>
            </InfoCard>
            <InfoCard title="Recusa de Realização" icon="block">
              <p className="text-lg">A recusa, formalizada no TCLE, resulta no afastamento das funções e na impossibilidade de realizar a IS pretendida, com sanções administrativas.</p>
            </InfoCard>
          </div>
        </Section>

      </div>
      <footer className="w-full max-w-5xl mx-auto mt-16 pt-8 border-t border-navy-accent flex justify-end">
        <div className="text-right text-sm text-gray-500 font-carlito">
          <p>Publicação não oficial. Prompt de IA: CT (Md) Mauriston / HNRe</p>
        </div>
      </footer>
    </div>
  );
};

export default Capitulo17;
