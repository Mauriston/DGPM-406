
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';
import Icon from '../components/Icon';

const Capitulo7: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            IS para Justiça e Disciplina
          </h1>
        </header>

        <Section title="Definição da IS para Justiça e Disciplina" icon="gavel">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="Condições Psicofísicas" icon="psychology">
              <p className="text-lg">Verificar se o indiciado em IPM, CJ ou CD tem condições mínimas de ser submetido aos procedimentos legais.</p>
            </InfoCard>
            <InfoCard title="Relação com Doença" icon="healing">
              <p className="text-lg">Verificar se fatos apurados resultam de doença que diminua a capacidade de entendimento do indiciado.</p>
            </InfoCard>
            <InfoCard title="Desertores e Insubmissos" icon="person_off">
              <p className="text-lg">Verificar se o desertor ou insubmisso está apto ou incapaz para reinclusão no Serviço Militar.</p>
            </InfoCard>
          </div>
        </Section>
        
        <Section title="Procedimentos e Competência" icon="list_alt">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Competência" icon="workspaces">
              <p className="text-lg">As perícias para Justiça e Disciplina são de competência das <strong>Juntas Regulares de Saúde (JRS)</strong>.</p>
            </InfoCard>
            <InfoCard title="Parecer Psiquiátrico" icon="psychology_alt">
              <p className="text-lg">É <strong>indispensável</strong> um parecer psiquiátrico para verificar as condições mentais e para casos de Engajamento/Reengajamento.</p>
            </InfoCard>
            <InfoCard title="Recurso Administrativo" icon="block">
              <p className="text-lg"><strong>Não cabe</strong> recurso administrativo de laudo de IS de Justiça e Disciplina.</p>
            </InfoCard>
            <InfoCard title="Validade do Laudo" icon="event_available">
                <p className="text-lg">Laudos de "Apto" em IS para Justiça e Disciplina são válidos por <strong>trinta dias</strong> para deixar o SAM/SMI/SMV.</p>
            </InfoCard>
            <InfoCard title="Comunicação Urgente" icon="forward_to_inbox">
                <p className="text-lg">O TIS deve ser encaminhado em até oito dias, como ofício URGENTE e com a expressão "INFORMAÇÃO PESSOAL".</p>
            </InfoCard>
             <InfoCard title="Desertores com Estabilidade" icon="shield_person">
                <p className="text-lg">Devem ser submetidos à IS fim VDF, acrescida dos exames de Controle Trienal.</p>
            </InfoCard>
          </div>
        </Section>

        <Section title="Militares Reintegrados por Decisão Judicial" icon="account_balance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard title="Definição e Procedimentos" icon="rule">
                    <p className="text-lg">O militar reintegrado judicialmente é apresentado para IS fim "VDF de militar reintegrado judicialmente".</p>
                    <p className="mt-2 text-base">Candidatos integrados há mais de seis meses são reapresentados para nova IS de ingresso para verificar novas condições de inaptidão.</p>
                </InfoCard>
                <InfoCard title="Formas de Conclusão" icon="fact_check">
                    <p className="text-lg">O laudo principal é "Está reintegrado por decisão judicial até o trânsito em julgado", acrescido do laudo de VDF que couber.</p>
                    <p className="mt-2 text-base">Para candidatos, pode ser "Apto para ingresso por força da decisão judicial" ou "Inapto para ingresso por apresentar condição de saúde não relacionada".</p>
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

export default Capitulo7;
