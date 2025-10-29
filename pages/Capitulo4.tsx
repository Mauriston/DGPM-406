
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';
import Icon from '../components/Icon';

const Capitulo4: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            Inspeções Pós-Admissionais
          </h1>
        </header>

        <Section title="Controle Periódico de Saúde" icon="event_repeat">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-10">
            Visa verificar se o pessoal da ativa preenche os requisitos de saúde para o desempenho profissional, além de detectar patologias em estágio inicial. A competência geral é do MPI.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-navy-light p-4 rounded-lg border border-navy-accent">
              <h3 className="font-oswald text-3xl text-accent-cyan">Trienal</h3>
              <p className="text-base">Regra geral para militares da ativa</p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg border border-navy-accent">
              <h3 className="font-oswald text-3xl text-accent-cyan">Bienal</h3>
              <p className="text-base">Reengajamento e militares RM1</p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg border border-navy-accent">
              <h3 className="font-oswald text-3xl text-accent-cyan">Anual</h3>
              <p className="text-base">Praças de máquinas, explosivos, HIV+</p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg border border-navy-accent">
              <h3 className="font-oswald text-3xl text-accent-cyan">Semestral</h3>
              <p className="text-base">Operadores de reator nuclear</p>
            </div>
          </div>
        </Section>
        
        <Section title="Outras Inspeções de Saúde Pós-Admissionais" icon="assignment_turned_in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Cursos de Carreira" icon="school">
              <p className="text-lg">Verifica os requisitos de saúde para cursos específicos. Competência do <strong>MPI</strong>, que declina para a <strong>JRS</strong> se houver restrições.</p>
            </InfoCard>
            <InfoCard title="Servir em LDAS" icon="public">
              <p className="text-lg">Para Localidade Deficiente em Assistência Sanitária. Competência da <strong>JRS</strong>. Avalia militar e dependentes.</p>
            </InfoCard>
            <InfoCard title="Licença (LTSPF)" icon="family_restroom">
              <p className="text-lg">Para acompanhar tratamento de familiar. Competência da <strong>JRS</strong>, exige Parecer Social favorável.</p>
            </InfoCard>
            <InfoCard title="Missões no Exterior" icon="flight_takeoff">
              <p className="text-lg">Perícia para missões. Competência do <strong>MPI</strong> ou <strong>JRS</strong>, dependendo da complexidade, duração e local.</p>
            </InfoCard>
            <InfoCard title="Missão na Antártica" icon="ac_unit">
              <p className="text-lg">Realizada exclusivamente por <strong>JRS</strong>, com critérios rigorosos para selecionar pessoal com alta higidez física e mental.</p>
            </InfoCard>
             <InfoCard title="Perícias Menores" icon="medical_services">
              <p className="text-lg">Para dispensa médica ou convalescença. Realizada por <strong>Médicos de OM ou MPI</strong>.</p>
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

export default Capitulo4;
