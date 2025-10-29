
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';
import HierarchyNode from '../components/HierarchyNode';
import Icon from '../components/Icon';

const Capitulo1: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            Estrutura do Subsistema Médico-Pericial da MB
          </h1>
        </header>

        <Section title="O que é o Subsistema Médico-Pericial (SMP)?" icon="health_and_safety">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            O SMP é responsável pelas avaliações médico-periciais do pessoal da Marinha do Brasil (MB), incluindo pessoal da ativa, veteranos, servidores civis e candidatos a ingresso.
          </p>
        </Section>

        <Section title="Hierarquia Funcional" icon="hub">
          <div className="flex flex-col items-center">
            <HierarchyNode title="Junta Superior de Saúde (JSS)" description="Máxima instância hierárquica" icon="military_tech" isTop />
            <HierarchyNode title="Junta Superior Distrital (JSD)" description="Nível regional mais elevado" icon="gite" />
            <HierarchyNode title="Junta de Saúde para Atividades Especiais (JSAE)" description="Perícias para aviação, mergulho, etc." icon="scuba_diving" />
            <HierarchyNode title="Junta Regular de Saúde (JRS)" description="Juntas de saúde comuns" icon="groups" />
            <HierarchyNode title="Médico Perito Isolado (MPI / MPIQ)" description="Atuação individual de peritos" icon="person" isBottom />
          </div>
        </Section>

        <Section title="Composição dos Agentes Médico-Periciais" icon="groups_3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Junta de Saúde (JS)" icon="groups">
              <p className="text-lg">Reunião formal de <strong>três ou mais médicos</strong> (militares ou civis da MB) para exercer funções periciais.</p>
            </InfoCard>
            <InfoCard title="JSS" icon="military_tech">
              <p className="text-lg">Presidida pelo Diretor do CPMM, composta por <strong>quatro membros</strong> e dois secretários médicos.</p>
            </InfoCard>
            <InfoCard title="JSD" icon="gite">
              <p className="text-lg">Compostas por um Presidente (Oficial Superior Médico) e <strong>quatro membros</strong>.</p>
            </InfoCard>
            <InfoCard title="JSAE/CPMM" icon="stars">
              <p className="text-lg">Presidente (Oficial Sup. qualificado em Med. de Aviação/Submarina) e <strong>quatro membros</strong>.</p>
            </InfoCard>
            <InfoCard title="JSAE (Outras)" icon="scuba_diving">
              <p className="text-lg">Compostas por um Presidente (Oficial Sup. Médico) e <strong>dois membros</strong> qualificados na área.</p>
            </InfoCard>
             <InfoCard title="JRS" icon="group">
              <p className="text-lg">Compostas por um Presidente (Oficial Sup. Médico) e <strong>dois membros</strong> médicos.</p>
            </InfoCard>
          </div>
        </Section>

        <Section title="Serviço de Apoio ao SMP" icon="support_agent">
          <div className="bg-navy-light p-6 rounded-lg shadow-lg border border-navy-accent max-w-2xl mx-auto">
            <h3 className="font-oswald text-3xl text-accent-gold font-semibold text-center mb-4">Odontologia Legal</h3>
            <p className="text-center text-lg text-gray-300">
              Realiza perícias odontológicas, preenchendo odontogramas e mantendo um banco de dados digitais para fins de identificação de pessoal, especialmente em casos de infortúnio.
            </p>
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

export default Capitulo1;
