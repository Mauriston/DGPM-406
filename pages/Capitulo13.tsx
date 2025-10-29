
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';

const Capitulo13: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            Comprovação de Nexo Causal
          </h1>
        </header>

        <Section title="Atestado de Origem (AO)" icon="assignment">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-10">
            Documento para registrar doença ocupacional ou acidente e, posteriormente, comprovar se a condição de saúde atual tem relação com o evento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Composição" icon="layers">
              <p className="text-lg">Composto pelo Termo de Acidente ou Doença Ocupacional e pelo Exame de Sanidade, que verifica a relação entre a saúde atual e o registro do AO.</p>
            </InfoCard>
            <InfoCard title="Tramitação" icon="send">
              <p className="text-lg">O AO é lavrado em três vias. A abertura é comunicada em CR pela OM, e as vias originais são anexadas. A tramitação posterior para a JS ocorre por ofício.</p>
            </InfoCard>
          </div>
        </Section>

        <Section title="Inquérito Sanitário de Origem (ISO)" icon="fact_check">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-10">
            Destina-se a apurar se uma condição de saúde é consequência de acidente ou doença com relação de causa e efeito com o serviço. É instaurado na falta de um AO.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Instauração" icon="play_arrow">
              <p className="text-lg">Pode ser instaurado por determinação do Comandante/Diretor, a pedido da JS, quando houver sequela ou doença passível de ser atribuída ao serviço.</p>
            </InfoCard>
            <InfoCard title="Processualística" icon="rule_folder">
              <p className="text-lg">O Encarregado do ISO (Médico Perito) reúne toda a documentação, ouve testemunhas e elabora um relatório conclusivo. O prazo para conclusão é de 60 dias, prorrogável.</p>
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

export default Capitulo13;
