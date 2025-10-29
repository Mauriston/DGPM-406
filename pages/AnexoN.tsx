
import React, { useState, useMemo } from 'react';
import Icon from '../components/Icon';
import Modal from '../components/Modal';

const ModalContent: React.FC<{title: string; text: string; imageUrl: string; altText: string}> = ({ title, text, imageUrl, altText }) => (
    <div className="space-y-4">
        <p className="text-lg leading-relaxed">{text}</p>
        <img src={imageUrl} alt={altText} className="w-full h-auto rounded-md shadow-lg" />
    </div>
);

type SectionKey = 'indices' | 'inaptidao';
interface SubItem {
  id: string;
  title: string;
  content: (openModal: (title: string, content: React.ReactNode) => void) => React.ReactNode;
}

const anexoNData: Record<SectionKey, { title: string; icon: string; data: SubItem[] }> = {
  indices: {
    title: 'Índices Mínimos Exigidos',
    icon: 'fact_check',
    data: [
        { id: 'a', title: 'Altura, Peso Mínimo e Máximo', content: () => (
            <ul className="list-disc list-inside space-y-2">
              <li><b>Altura mínima:</b> 1,54m para homens e para mulheres.</li>
              <li><b>Altura máxima:</b> 2,00 m para ambos os sexos, exceto para candidatos ao Colégio Naval, cujo limite máximo é de 1,95 m.</li>
              <li><b>Limites de peso:</b> Índice de massa corporal (IMC) compreendidos entre 18 e 30. Os limites de peso serão correlacionados com outros dados do exame clínico (massa muscular, conformação óssea, etc.).</li>
            </ul>
        )},
        { id: 'b', title: 'Acuidade Visual', content: () => (
             <ul className="list-disc list-inside space-y-2">
                <li><b>CN, EN, EFOMM, EAM, CAP, CPA e CPFN:</b> Acuidade visual (AV) mínima permitida é 20/100 em cada olho, sem correção (S/C), corrigida para 20/20 com a melhor correção óptica possível.</li>
                <li><b>CSM, QC, Corpo Auxiliar (Quadro Técnico e Capelães Navais), CEM:</b> AV até 20/400 S/C em cada olho, corrigida para 20/20.</li>
                <li><b>SMV (Praças) com até 25 anos:</b> AV mínima é de 20/100 S/C em cada olho, corrigida para 20/20.</li>
                <li><b>SMV (Praças) acima de 25 anos:</b> AV de 20/400 S/C em cada olho, corrigida para 20/20.</li>
                <li><b>SMV (Oficiais):</b> AV é de até 20/400 S/C em cada olho, corrigida para 20/20.</li>
            </ul>
        )},
        { id: 'c', title: 'Senso Cromático', content: () => (
            <ul className="list-disc list-inside space-y-2">
                <li>Não serão admitidas discromatopsias para as cores verde e vermelha, de qualquer grau.</li>
                <li>O teste deve ser aplicado exclusivamente por médico, sem o uso de lentes corretoras do senso cromático.</li>
            </ul>
        )},
        { id: 'd', title: 'Dentes', content: () => <p>O mínimo exigido é de vinte (20) dentes naturais, dez (10) em cada arcada, hígidos ou tratados. Tolera-se a prótese dental para restabelecer as condições normais.</p> },
        { id: 'e', title: 'Limites Mínimos de Motilidade', content: () => (
            <div>
                <h4 className="font-bold mb-2">I - Extremidade Superior:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><b>OMBRO:</b> Elevação para diante a 90°. Abdução a 90°.</li>
                    <li><b>COTOVELO:</b> Flexão a 100°. Extensão a 15°.</li>
                    <li><b>PUNHO:</b> Alcance total a 15°.</li>
                    <li><b>MÃO:</b> Supinação/pronação a 90°.</li>
                    <li><b>DEDOS:</b> Formação de pinça digital.</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">II - Extremidade Inferior:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><b>COXO-FEMURAL:</b> Flexão a 90°. Extensão a 10°.</li>
                    <li><b>JOELHO:</b> Extensão total. Flexão a 90°.</li>
                    <li><b>TORNOZELO:</b> Dorsiflexão a 10°. Flexão plantar a 10°.</li>
                </ul>
            </div>
        )},
        { id: 'f', title: 'Exames Complementares', content: () => (
            <div>
                <h4 className="font-bold mb-2">I) Obrigatórios</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>São aqueles previstos no anexo O.</li>
                    <li>Candidatas do sexo feminino deverão trazer colpocitologia oncótica; USG transvaginal (ou pélvica); USG de mamas; e mamografia (para 40 anos ou mais).</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">II) Toxicológicos</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Realizado em cumprimento à legislação específica, custeado pelo candidato.</li>
                    <li>Janela de detecção de no mínimo 90 dias, para maconha, cocaína, anfetaminas, heroína, LSD e fenciclidina.</li>
                    <li>Validade de 60 dias a partir da coleta. Deve constar informações sobre a cadeia de custódia.</li>
                </ul>
            </div>
        )},
        { id: 'g', title: 'Índices Cardiovasculares', content: () => (
            <ul className="list-disc list-inside space-y-2">
                <li><b>Pressão Arterial (medida em repouso):</b> SISTÓLICA - igual ou menor do que 140 mmHg; DIASTÓLICA - igual ou menor do que 90 mmHg.</li>
                <li>Em caso de índices superiores, deverão ser realizadas mais duas aferições e, a critério dos peritos, poderão ser solicitados outros exames (MAPA, Teste Ergométrico, Ecocardiograma).</li>
                <li><b>Pulso arterial:</b> igual ou menor que 120 bpm. Acima disso, o candidato deverá repousar por dez minutos para nova aferição ou será solicitado ECG.</li>
            </ul>
        )},
        { id: 'h', title: 'Índice Audiométrico', content: () => (
            <ul className="list-disc list-inside space-y-2">
                <li><b>CN, EN, EFOMM, EAM, CAP, CPA, CPFN e SMV (Praças até 25 anos):</b> Aptos com perdas auditivas até 40 decibéis (dB) em qualquer frequência, desde que não haja alteração à otoscopia.</li>
                <li><b>CSM, QC, CA, CEM, SMV (Praças > 25 anos) e SMV (Oficiais):</b> Admitem-se perdas maiores que 40dB até 3000 Hz; e nas frequências de 4000 a 8000 Hz, perdas maiores que 40 dB e menores ou iguais a 70dB, desde que seja unilateral, com otoscopia normal, IRF maior ou igual a 88% e LRF menor ou igual a 50 dB.</li>
            </ul>
        )},
    ]
  },
  inaptidao: {
    title: 'Condições de Inaptidão',
    icon: 'report_off',
    data: [
        { id: 'a', title: 'Cabeça e Pescoço', content: () => <p>Qualquer alteração que cause limitação funcional para atividade militar, como deformações, perdas extensas, cicatrizes deformantes, contraturas musculares anormais, cisto branquial, etc.</p> },
        { id: 'b', title: 'Ouvido e Audição', content: () => <p>Deformidades, agenesia das orelhas, anormalidades do conduto auditivo e tímpano, infecções crônicas, labirintopatias, tumores e não atender aos índices audiométricos do item 1-h.</p> },
        { id: 'c', title: 'Olhos e Visão', content: () => <p>Ceratocone, glaucoma, infecções, tumores, opacificações, sequelas de trauma, doenças congênitas, diminuição da acuidade visual além da tolerância, lesões retinianas e discromatopsia para verde/vermelha. Cirurgia refrativa não gera inaptidão se o candidato não apresentar restrições.</p> },
        { id: 'd', title: 'Boca, Nariz, Laringe, etc.', content: () => <p>Anormalidades estruturais, desvio acentuado de septo, mutilações, tumores, e deficiências funcionais na mastigação, deglutição, respiração, fonação e fala. Para Sargentos Músicos, inclui nódulos, pólipos e cistos vocais.</p> },
        { id: 'e', title: 'Aparelho Estomatognático', content: () => <p>Estado sanitário bucal deficiente, cáries, doença periodontal não controlada, má-oclusão com comprometimento funcional, ausência de contatos interoclusais em molares e menos de dez dentes naturais em uma das arcadas.</p> },
        { id: 'f', title: 'Pele e Tecidos', content: () => <p>Infecções crônicas, micoses, parasitoses, eczemas alérgicos, expressões de doenças autoimunes (exceto vitiligo), cicatrizes deformantes e tatuagens que façam alusão a ideologias terroristas/extremistas, violência, criminalidade ou atos libidinosos, ou que estejam na cabeça, rosto e face anterior do pescoço.</p> },
        { id: 'g', title: 'Pulmões e Parede Torácica', content: () => <p>Deformidade relevante, infecções, distúrbios ventilatórios, hiperreatividade brônquica e tumores.</p> },
        { id: 'h', title: 'Sistema Cardiovascular', content: () => <p>Anormalidades congênitas (ressalvadas CIA, CIV e PCA corrigidas), infecções, arritmias, doenças orovalvares, hipertensão arterial e vasculites sistêmicas. Prolapso valvar sem regurgitação/repercussão não é condição de inaptidão.</p> },
        { id: 'i', title: 'Abdome e Trato Gastrointestinal', content: () => <p>Anormalidades da parede (exceto diástases), visceromegalias, infecções graves e história de cirurgias que alterem a função gastrointestinal.</p> },
        { id: 'j', title: 'Aparelho Geniturinário', content: () => <p>Anormalidades congênitas ou adquiridas, litíase (cálculos) e alterações no exame de urina. A existência de testículo único ou hipospádia balânica não são condições de inaptidão.</p> },
        { id: 'k', title: 'Aparelho Osteomioarticular', content: (openModal) => (
            <p>
                <button onClick={() => openModal('Ângulo de Cobb para Escoliose', <ModalContent title="Ângulo de Cobb para Escoliose" text="O Ângulo de Cobb é o método padrão para medir a curvatura da coluna em radiografias para quantificar a escoliose. Ele é calculado traçando-se uma linha no topo da vértebra superior mais inclinada da curva e outra linha na parte inferior da vértebra inferior mais inclinada. A intersecção dessas linhas forma o ângulo que mede a magnitude da deformidade." imageUrl="https://institutoescoliose.com.br/wp-content/uploads/2014/08/Angulo-de-Cobb-Projeto-Escoliose.jpg" altText="Ilustração do cálculo do ângulo de Cobb para escoliose" />)} className="text-blue-400 font-bold underline hover:text-blue-300 transition-colors">Escoliose &gt; 13° Cobb</button>,{' '}
                <button onClick={() => openModal('Ângulo de Cobb para Lordose', <ModalContent title="Ângulo de Cobb para Lordose" text="Para a lordose lombar, o Ângulo de Cobb é medido em uma radiografia de perfil. Traça-se uma linha no platô superior da primeira vértebra lombar (L1) e outra no platô superior da primeira vértebra sacral (S1). O ângulo formado pela intersecção das perpendiculares a essas linhas determina a curvatura lordótica." imageUrl="https://minio.scielo.br/documentstore/2177-014X/CmhwjtZbhBqLLwM3DfYnqqh/c591abc2d331223a2109f38216cf3028ec0cf3a6.jpg" altText="Ilustração do cálculo do ângulo de Cobb para lordose" />)} className="text-blue-400 font-bold underline hover:text-blue-300 transition-colors">Lordose &gt; 60° Cobb</button>,{' '}
                <button onClick={() => openModal('Ângulo de Cobb para Hipercifose', <ModalContent title="Ângulo de Cobb para Hipercifose" text="O Ângulo de Cobb também é usado para medir a cifose torácica. O método consiste em traçar uma linha no platô superior da vértebra T4 e outra no platô inferior da vértebra T12. O ângulo entre essas linhas quantifica o grau da curvatura cifótica." imageUrl="https://minio.scielo.br/documentstore/2177-014X/66hGYBNKvPp4T95DtnZLHPG/ca6d76b5bf5f3a16cf8d5c65de46f13ade25d2c6.jpg" altText="Ilustração do cálculo do ângulo de Cobb para hipercifose" />)} className="text-blue-400 font-bold underline hover:text-blue-300 transition-colors">Hipercifose &gt; 45° Cobb</button>. 
                “Genu Recurvatum” > 20 graus, “Genu Varum” > 7 cm, “Genu Valgum” > 7 cm. Discrepância no comprimento dos membros > 10 mm (até 21 anos) ou > 15 mm (demais). Hérnias discais, próteses articulares e doenças como lúpus e artrite reumatoide.
            </p>
        )},
        { id: 'l', title: 'Doenças Metabólicas e Endócrinas', content: () => <p>"Diabetes Mellitus", tumores hipotalâmicos e hipofisários, disfunção tireoidiana, hipogonadismo e obesidade.</p> },
        { id: 'm', title: 'Sangue e Órgãos Hematopoiéticos', content: () => <p>Alterações significativas do sangue e órgãos hematopoiéticos que necessitem de investigação complementar.</p> },
        { id: 'n', title: 'Doenças Neurológicas', content: () => <p>Distúrbios neuromusculares (incluindo miastenia gravis), ataxias, tremores, passado de crises convulsivas, epilepsias e doenças desmielinizantes (incluindo esclerose múltipla).</p> },
        { id: 'o', title: 'Doenças Psiquiátricas', content: () => <p>Evidência atual ou história pregressa de doença psiquiátrica, uso de substâncias psicoativas ilícitas ou exame toxicológico positivo.</p> },
        { id: 'p', title: 'Tumores e Neoplasias', content: () => <p>Qualquer história atual ou pregressa de tumor maligno. Tumores benignos, dependendo da localização, repercussão e potencial evolutivo.</p> },
        { id: 'q', title: 'Condições Ginecológicas', content: () => <p>Lesões de colo, corpo e trompas uterinos, ovários, vulva, vagina e alterações mamárias, exceto se insignificantes.</p> },
        { id: 'r', title: 'Outras Condições', content: () => <p>Doenças não listadas que sejam impeditivas ao desempenho militar. Evidência de sorologia positiva para o HIV é condição de inaptidão.</p> },
    ],
  },
};


const ContentPage: React.FC<{ section: { title: string; icon: string; data: SubItem[] }; openModal: (title: string, content: React.ReactNode) => void }> = ({ section, openModal }) => {
    const [selectedItemId, setSelectedItemId] = useState<string>(section.data[0].id);

    const selectedItem = useMemo(() => {
        return section.data.find(item => item.id === selectedItemId);
    }, [selectedItemId, section.data]);

    return (
        <div className="bg-navy-light p-4 sm:p-8 rounded-lg shadow-xl border border-navy-accent mt-8">
            <div className="flex items-center mb-6">
                <Icon name={section.icon} className="text-accent-gold text-4xl mr-4" />
                <h2 className="font-oswald text-3xl text-white">{section.title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <h3 className="font-oswald text-2xl text-white mb-4">Selecione o Tópico</h3>
                    <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                        {section.data.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItemId(item.id)}
                                className={`p-3 rounded-lg cursor-pointer transition-colors flex items-start gap-3 ${selectedItemId === item.id ? 'bg-navy-main ring-2 ring-accent-cyan' : 'bg-navy-accent hover:bg-opacity-75'}`}
                            >
                                <div className="flex-shrink-0 mt-1">
                                    {selectedItemId === item.id 
                                        ? <Icon name="radio_button_checked" className="text-accent-cyan" /> 
                                        : <Icon name="radio_button_unchecked" className="text-gray-400" />
                                    }
                                </div>
                                <p className="text-base font-medium text-gray-200">
                                    <span className="font-bold">{item.id})</span> {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <div className="sticky top-8">
                        <h3 className="font-oswald text-2xl text-white mb-4 flex justify-between items-center">
                            <span>Detalhes</span>
                        </h3>
                        <div className="bg-white p-6 rounded-lg shadow-inner text-gray-700 h-[500px] overflow-y-auto">
                            {selectedItem ? (
                                <div>
                                    <h4 className="font-oswald text-2xl font-bold text-navy-main mb-4">{selectedItem.title}</h4>
                                    <div className="space-y-3 text-base leading-relaxed">{selectedItem.content(openModal)}</div>
                                </div>
                            ) : (
                                <p>Selecione um item para ver os detalhes.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const AnexoN: React.FC = () => {
    const [activeSection, setActiveSection] = useState<SectionKey>('indices');
    const [modalData, setModalData] = useState<{ title: string; content: React.ReactNode } | null>(null);

    const openModal = (title: string, content: React.ReactNode) => {
        setModalData({ title, content });
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
            <div className="max-w-7xl mx-auto w-full flex-grow">
                <header className="text-center mb-10">
                    <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
                        Padrões Psicofísicos Admissionais
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">Anexo N</p>
                </header>

                <div className="flex justify-center gap-4 mb-6">
                    {(Object.keys(anexoNData) as SectionKey[]).map(key => (
                        <button
                            key={key}
                            onClick={() => setActiveSection(key)}
                            className={`py-2 px-6 rounded-md font-oswald text-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                                activeSection === key
                                    ? 'bg-accent-cyan text-navy-main shadow-lg'
                                    : 'bg-navy-accent text-white hover:bg-accent-cyan/80'
                            }`}
                        >
                            {anexoNData[key].title}
                        </button>
                    ))}
                </div>

                {activeSection === 'indices' && <ContentPage section={anexoNData.indices} openModal={openModal} />}
                {activeSection === 'inaptidao' && <ContentPage section={anexoNData.inaptidao} openModal={openModal} />}

            </div>
             <footer className="w-full max-w-7xl mx-auto mt-16 pt-8 border-t border-navy-accent flex justify-end">
                <div className="text-right text-sm text-gray-500 font-carlito">
                    <p>Publicação não oficial. Prompt de IA: CT (Md) Mauriston / HNRe</p>
                </div>
            </footer>
            {modalData && (
                <Modal isOpen={!!modalData} onClose={closeModal} title={modalData.title}>
                    {modalData.content}
                </Modal>
            )}
        </div>
    );
};

export default AnexoN;
