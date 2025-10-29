
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';

const Capitulo10: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            IS para Servidores Civis
          </h1>
        </header>

        <Section title="Procedimentos Médico-Periciais para Servidores Civis" icon="badge">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-10">
            Este capítulo detalha as rotinas de inspeção de saúde aplicáveis aos Servidores Civis (SC) da Marinha do Brasil, abrangendo desde o ingresso até a concessão de benefícios e aposentadoria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Rotina Geral (SPG)" icon="assignment_ind">
              <p className="text-lg">As perícias seguem o Manual do SIAAS. A apresentação para IS é via Ofício, e a OM do servidor é responsável pelo controle dos tratamentos e reapresentações.</p>
            </InfoCard>
            <InfoCard title="Ingresso no SPG" icon="login">
              <p className="text-lg">Verifica se o candidato possui as condições clínico-funcionais exigidas pelo edital do concurso para exercer as funções do cargo.</p>
            </InfoCard>
            <InfoCard title="Controle Periódico" icon="event_repeat">
              <p className="text-lg">Exame para verificar o estado de sanidade ao longo do tempo. A periodicidade varia (bienal, anual ou semestral) conforme a idade e exposição a riscos.</p>
            </InfoCard>
            <InfoCard title="VDF e Readaptação" icon="reduce_capacity">
              <p className="text-lg">A VDF esclarece o grau de comprometimento de uma enfermidade. Se necessário, a Readaptação Funcional aloca o servidor em um cargo compatível com suas limitações.</p>
            </InfoCard>
            <InfoCard title="Licenças Especiais" icon="family_restroom">
              <p className="text-lg">Regula a concessão de Licença à Gestante (LG) e Licença para Tratamento de Saúde de Pessoa da Família (LTSPF), com procedimentos específicos para cada caso.</p>
            </InfoCard>
            <InfoCard title="Outras Rotinas" icon="rule_folder">
              <p className="text-lg">Inclui perícias para Remoção, Redistribuição, Reversão (retorno de aposentadoria por invalidez) e Perícia Sumária para Processo Administrativo Disciplinar (PAD).</p>
            </InfoCard>
             <InfoCard title="Concessão de Benefícios" icon="redeem">
              <p className="text-lg">Perícias para fins de aposentadoria, reintegração e concessão de benefícios como pensões e isenção de imposto de renda.</p>
            </InfoCard>
            <InfoCard title="Horário Especial" icon="schedule">
              <p className="text-lg">IS para avaliar a necessidade de horário especial para o servidor ou para acompanhamento de familiar portador de deficiência, sem necessidade de compensação.</p>
            </InfoCard>
             <InfoCard title="Missões e LDAS" icon="public">
              <p className="text-lg">Os procedimentos para servir em Localidade com Deficiência em Assistência Sanitária (LDAS) ou em Missões no Exterior seguem as diretrizes do Capítulo 4.</p>
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

export default Capitulo10;
