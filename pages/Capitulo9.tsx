
import React from 'react';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';
import Icon from '../components/Icon';

const Capitulo9: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            Concessão de Benefícios
          </h1>
        </header>

        <Section title="Rotina para Concessão de Benefícios" icon="assignment">
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            A IS para concessão de benefícios é a perícia que verifica o estado de saúde (atual ou retrospectivo) do inspecionado para enquadrá-lo na legislação de um benefício. Baseia-se em dados fidedignos, como prontuários e exames, não em informações subjetivas.
          </p>
        </Section>
        
        <Section title="Principais Modalidades de IS para Benefícios" icon="category">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Auxílio Invalidez" icon="accessible_forward">
              <p className="text-lg">Para militar inativo considerado inválido que necessita de internação ou cuidados permanentes de enfermagem.</p>
            </InfoCard>
            <InfoCard title="Verificação Post-mortem" icon="history_edu">
              <p className="text-lg">Verifica se um ex-militar falecido era portador de doença que resultaria em incapacidade definitiva (invalidez).</p>
            </InfoCard>
            <InfoCard title="Pensão (Especial/Militar/Ex-Combatente)" icon="group_add">
              <p className="text-lg">Avalia a condição de invalidez de viúvas, beneficiários ou ex-combatentes para concessão de pensão.</p>
            </InfoCard>
            <InfoCard title="Isenção de Imposto de Renda" icon="request_quote">
              <p className="text-lg">Verifica se o militar inativo, pensionista ou reformado é portador de doença especificada em lei para isenção do IR.</p>
            </InfoCard>
            <InfoCard title="Dependência de Familiar" icon="family_restroom">
              <p className="text-lg">Avalia a invalidez de um familiar para fins de comprovação de dependência econômica.</p>
            </InfoCard>
             <InfoCard title="Revisão de Reforma" icon="manage_history">
              <p className="text-lg">Reavalia a condição de saúde de militares reformados por acidente, doença ou idade-limite.</p>
            </InfoCard>
          </div>
        </Section>

        <Section title="Orientações Gerais" icon="integration_instructions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Requerimento e Agendamento" icon="edit_document">
                <p className="text-lg">O interessado (ou representante) deve requerer ao Órgão de Pessoal e agendar a IS em até 60 dias, munido da documentação pertinente.</p>
            </InfoCard>
            <InfoCard title="Documentação para Nexo Causal" icon="folder_copy">
                <p className="text-lg">A relação de causa e efeito com o serviço deve ser documentada por Atestado de Origem (AO), Inquérito Sanitário (ISO) ou Ficha de Evacuação.</p>
            </InfoCard>
            <InfoCard title="Laudo para Receita Federal" icon="local_atm">
                <p className="text-lg">Para isenção de IR, a JS deve preencher um Laudo Pericial específico, que será entregue ao inspecionado após a conclusão da IS.</p>
            </InfoCard>
            <InfoCard title="Perícia Domiciliar" icon="home_health">
                <p className="text-lg">Inspecionados restritos ao leito devem apresentar declaração do médico assistente para subsidiar a perícia em domicílio.</p>
            </InfoCard>
          </div>
        </Section>

        <Section title="Competência para Autorização" icon="military_tech">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="DPM / CPesFN" icon="admin_panel_settings">
              <p className="text-lg">Autoriza a maioria das IS para militares veteranos, como auxílio-invalidez, isenção de IR e revisões de reforma.</p>
            </InfoCard>
            <InfoCard title="SVPM" icon="groups">
              <p className="text-lg">Autoriza IS para Anistiados Políticos, Ex-combatentes e pensionistas, incluindo auxílio-invalidez e pensões.</p>
            </InfoCard>
            <InfoCard title="OM / OMAC" icon="home_work">
              <p className="text-lg">Autoriza IS para dependência de familiar de militar da ativa e, para OMAC, pensão para beneficiário inválido.</p>
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

export default Capitulo9;
