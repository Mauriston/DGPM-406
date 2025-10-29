
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';
import Icon from '../components/Icon';

const Capitulo8: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            Exclusão do Serviço Ativo da Marinha
          </h1>
        </header>

        <Section title="Rotina para Exclusão do SAM" icon="logout">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            A IS para exclusão do SAM é a perícia que visa estabelecer as condições psicofísicas atuais e as eventuais repercussões de doenças ou acidentes ocorridos durante o período de atividade do inspecionado.
          </p>
        </Section>

        <Section title="Competência e Procedimentos" icon="list_alt_add">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Competência Principal (MPI)" icon="person">
              <p className="text-lg">Esta IS é de competência dos <strong>Médicos Peritos Isolados (MPI)</strong>.</p>
              <p className="mt-2 text-base">A exceção são casos de Atestado de Origem (AO) em aberto, que demandam apresentação à JRS.</p>
            </InfoCard>
            <InfoCard title="Declínio para a JS" icon="upgrade">
              <p className="text-lg">Tratando-se de enfermidade que possa gerar incapacidade definitiva, os MPI deverão <strong>declinar a competência</strong> para as Juntas de Saúde (JS).</p>
            </InfoCard>
             <InfoCard title="Exames Necessários" icon="biotech">
              <p className="text-lg">Os exames complementares exigidos estão previstos no <strong>Anexo O</strong> da norma.</p>
            </InfoCard>
            <InfoCard title="Casos de Incapacidade" icon="accessible_forward">
              <p className="text-lg">Para casos de patologias que possam gerar incapacidade definitiva, pode ser adotado um laudo de incapacidade temporária para Deixar o SAM por até seis meses.</p>
            </InfoCard>
          </div>
        </Section>
        
        <Section title="Formas de Conclusão" icon="fact_check">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Apto para Deixar o SAM" icon="check_circle">
              <p className="text-lg">Laudo principal para quem atende os critérios de saúde para a exclusão.</p>
            </InfoCard>
            <InfoCard title="Apto para Deixar (com sequela)" icon="sentiment_satisfied">
              <p className="text-lg">Para casos de sequela de acidente ou doença ocupacional que não geram incapacidade total.</p>
            </InfoCard>
            <InfoCard title="Incapaz Temporariamente para Deixar o SAM" icon="timer">
              <p className="text-lg">Para quem necessita de tratamento por até seis meses, sendo portador de doença ou lesão (com ou sem nexo causal).</p>
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

export default Capitulo8;
