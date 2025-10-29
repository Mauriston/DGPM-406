
import React, { useState, useMemo, useRef, useEffect } from 'react';
import Icon from '../components/Icon';

type Exam = {
  name: string;
  note?: string;
  condition?: {
    gender?: 'Masculino' | 'Feminino';
    age?: {
      min?: number;
      max?: number;
    };
  };
};

type Purpose = {
  id: number;
  name: string;
  exams: Exam[];
};

const examPurposes: Purpose[] = [
    {
        id: 1,
        name: 'Engajamento e Ingresso no SMV (oriundos do SMI)',
        exams: [
            { name: 'Hemograma completo com plaquetas' },
            { name: 'Glicemia de jejum' },
            { name: 'Dosagem de creatinina' },
            { name: 'Transaminases (TGO ou AST, TGP ou ALT)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' },
            { name: 'Anti-HIV (qualquer método, exceto imunocromatografia - Teste Rápido)' },
            { name: 'Exame toxicológico', note: '5' },
            { name: 'VDRL ou sorologia para sífilis' },
            { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' },
            { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' },
            { name: 'Exame odontológico geral' }
        ]
    },
    {
        id: 2,
        name: 'Ingresso no SAM e ingresso no SMV (candidatos oriundos do meio civil)',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' }, { name: 'Transaminases (TGO ou AST, TGP ou ALT)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'Anti-HIV (qualquer método, exceto imunocromatografia - Teste Rápido)' }, { name: 'Exame toxicológico', note: '5' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' },
            { name: 'Exame odontológico geral' },
            { name: 'Beta-HCG qualitativo', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Ultrassonografia transvaginal ou pélvica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Ultrassonografia de mamas', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 3,
        name: 'Ingresso no SPG',
        exams: [
            { name: 'Teste ergométrico para todos os candidatos ao ingresso no SMV que exercerão atividades na área de treinamento físico-militar (atletas RM2) e para os demais candidatos quando apresentarem queixas relacionadas ao aparelho cardiovascular' },
            { name: 'Nasofibroscopia e Videolaringoestroboscopia para os candidados a SG-MU, naipe cantor tenor e cantora soprano' },
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' },
            { name: 'Exame odontológico geral' },
            { name: 'Beta-HCG qualitativo', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Ultrassonografia transvaginal ou pélvica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Ultrassonografia de mamas', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 4,
        name: 'IS para conclusão de Curso de Formação de militares de carreira e IS inopinada de avaliação toxicológica preventiva direcionada',
        exams: [ { name: 'Exame toxicológico', note: '5' } ]
    },
    {
        id: 5,
        name: 'Controle trienal ou Reengajamento ou Prorrogação do Tempo de Serviço',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' }, { name: 'Transaminases (TGO ou AST, TGP ou ALT)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Anti-HIV' }, { name: 'Exame toxicológico', note: '6' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral' },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 6,
        name: 'Seleção para Cursos de carreira - exceto de Atividades Especiais (militares com controle periódico vencido)',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Anti-HIV' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral' },
            { name: 'Teste Imunológico de Gravidez (TIG)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 7,
        name: 'Operação com Raios-X e Substâncias Radiativas',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' }, { name: 'Transaminases (TGO ou AST, TGP ou ALT) (periodicidade trienal)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total (periodicidade anual)', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações (periodicidade trienal)', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos (periodicidade trienal)', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS) (periodicidade anual)' },
            { name: 'VDRL ou sorologia para sífilis (periodicidade trienal)' }, { name: 'Anti-HIV (periodicidade trienal)' }, { name: 'Exame toxicológico', note: '6' }, { name: 'Audiometria (periodicidade trienal)' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raio-x de tórax (periodicidade trienal)' }, { name: 'Eletrocardiograma ECG (periodicidade trienal)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral (periodicidade trienal)' },
            { name: 'Teste Imunológico de Gravidez (TIG)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica (periodicidade anual)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista (periodicidade anual)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia (periodicidade anual)', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 8,
        name: 'Manipulação e administração de Terapia Antineoplásica',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de ureia' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações (periodicidade trienal)', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos (periodicidade trienal)', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis (periodicidade trienal)' }, { name: 'Anti-HIV (periodicidade trienal)' }, { name: 'Exame toxicológico', note: '6' }, { name: 'Audiometria (periodicidade trienal)' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Avaliação da função hepática (Transaminases, Bilirrubinas, Albumina, etc.)' },
            { name: 'Raios-X de tórax (periodicidade trienal)' }, { name: 'Eletrocardiograma (ECG) (periodicidade trienal)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral (periodicidade trienal)' },
            { name: 'Beta-HCG', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica (periodicidade anual)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista (periodicidade anual)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia (periodicidade anual)', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 9,
        name: 'Serviço com propelentes OTTO FUELL II',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis (periodicidade trienal)' }, { name: 'Anti-HIV (periodicidade trienal)' }, { name: 'Exame toxicológico', note: '6' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Oftalmologia especial (avaliação da Pressão Intra Ocular – PIO)' }, { name: 'Avaliação da função hepática (Transaminases, Bilirrubinas, Albumina, etc.)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG) com D2 longo' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral (periodicidade trienal)' },
            { name: 'Teste Imunológico de Gravidez (TIG)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 10,
        name: 'Serviço com manipulação de explosivos',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis (periodicidade trienal)' }, { name: 'Anti-HIV (periodicidade trienal)' }, { name: 'Exame toxicológico', note: '6' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Oftalmologia especial (fundoscopia e biomicroscopia)' }, { name: 'Avaliação da função hepática (Transaminases, Bilirrubinas, Albumina, etc.)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG) com D2 longo' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral (periodicidade trienal)' },
            { name: 'Teste Imunológico de Gravidez (TIG)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 11,
        name: 'Missão no exterior (duração superior a três meses, de qualquer natureza)',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' }, { name: 'Transaminases (TGO ou AST, TGP ou ALT)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Anti-HIV' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raio X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Ecocardiograma e Teste Ergométrico (após 45 anos ou quando houver indicação clínica)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral e panorâmico das arcadas dentárias' },
            { name: 'Teste Imunológico de Gravidez (TIG)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 12,
        name: 'Missão no exterior (duração inferior a três meses desde que o controle trienal esteja vigente durante toda a missão)',
        exams: [ { name: 'Anti-HIV' }, { name: 'Exame odontológico geral e panorâmico das arcadas dentárias' }, { name: 'Outros exames poderão ser solicitados pelo AMP em virtude das peculiaridades de cada missão' } ]
    },
    {
        id: 13,
        name: 'Deixar o SAM, deixar o SMV, deixar o SPG e deixar o SMI e nos casos de Incapacidade definitiva para o SAM/SPG.',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' }, { name: 'Transaminases (TGO ou AST, TGP ou ALT)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL, ou sorologia para sífilis' }, { name: 'Anti-HIV (exceto para o Serviço Público Geral - SPG)' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' },
            { name: 'Teste Imunológico de Gravidez (TIG) para as militares/servidoras civis que estão deixando o Serviço Ativo/Serviço Público e que não serão incluídas na Reserva Remunerada da Marinha ou quadro de servidoras civis inativas', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 14,
        name: 'Controle anual para serviço em praça de máquinas',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' }, { name: 'Transaminases (TGO ou AST, TGP ou ALT)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis (periodicidade trienal)' }, { name: 'Anti-HIV (periodicidade trienal)' }, { name: 'Exame toxicológico', note: '6' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral (periodicidade trienal)' },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 15,
        name: 'Localidade com deficiência em assistência sanitária (LDAS)',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' }, { name: 'Transaminases (TGO ou AST, TGP ou ALT)' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Anti-HIV' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Oftalmologia especial (tonometria, fundoscopia e biomicroscopia)' }, { name: 'Raios-X de tórax' },
            { name: 'Eletrocardiograma (ECG) com D2 longo' }, { name: 'Ecocardiograma e Teste Ergométrico (após 45 anos ou quando houver indicação clínica)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral e panorâmico das arcadas dentárias' },
            { name: 'Teste Imunológico de Gravidez (TIG)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 16,
        name: 'Missão Antártica',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de ureia, creatinina, ácido úrico' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Provas de atividade reumática' }, { name: 'Hepatograma' }, { name: 'Parasitológico das fezes' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'Anti-HIV' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Oftalmologia especial (tonometria, fundoscopia e biomicroscopia)' }, { name: 'Raios-X de tórax PA e perfil' },
            { name: 'Eletrocardiograma (ECG) com D2 longo' }, { name: 'Ecocardiograma e Teste Ergométrico (após 40 anos ou quando houver indicação clínica)' },
            { name: 'Eletroencefalograma (EEG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral e panorâmico das arcadas dentárias' },
            { name: 'Teste Imunológico de Gravidez (TIG)', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 17,
        name: 'Reversão ou Reintegração ao SPG',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Audiometria' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' }, { name: 'Exame odontológico geral' },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } },
            { name: 'Verificar a causa da incapacidade e se houve cura da condição incapacitante (para aposentados por invalidez)' }
        ]
    },
    {
        id: 18,
        name: 'Prestação de Tarefa por Tempo Certo e prorrogações',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Anti-HIV' }, { name: 'Exame toxicológico', note: '6' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    },
    {
        id: 19,
        name: 'Designação de militares RM1 para função de atividade',
        exams: [
            { name: 'Hemograma completo com plaquetas' }, { name: 'Glicemia de jejum' }, { name: 'Dosagem de creatinina' },
            { name: 'Dosagem do Antígeno Prostático Específico (PSA) total', note: '1', condition: { gender: 'Masculino', age: { min: 40 } } },
            { name: 'Dosagens de colesterol total e frações', note: '2', condition: { age: { min: 30 } } },
            { name: 'Dosagem dos triglicerídeos', note: '2', condition: { age: { min: 30 } } },
            { name: 'Elementos Anormais do Sedimento (EAS)' }, { name: 'VDRL ou sorologia para sífilis' }, { name: 'Anti-HIV' },
            { name: 'Oftalmologia geral (Acuidade Visual verificada pela tabela de SNELLEN realizada pelo médico perito ou especialista em oftalmologia)' },
            { name: 'Raios-X de tórax' }, { name: 'Eletrocardiograma (ECG)' },
            { name: 'Biometria (peso, altura, Índice de Massa Corpórea, Pressão Arterial e Frequência Cardíaca)' },
            { name: 'Colpocitologia oncótica', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Laudo detalhado do exame físico ginecológico e de mamas emitido por especialista', note: '3', condition: { gender: 'Feminino' } },
            { name: 'Mamografia', note: '4', condition: { gender: 'Feminino', age: { min: 40 } } }
        ]
    }
];

const legendNotes: { [key: string]: string } = {
  '1': 'Inspecionados do sexo masculino de 40 anos ou mais de idade.',
  '2': 'Inspecionados de qualquer sexo de 30 anos ou mais de idade.',
  '3': 'Inspecionadas do sexo feminino.',
  '4': 'Inspecionadas do sexo feminino de 40 anos ou mais de idade.',
  '5': 'Conforme orientações e os procedimentos previstos no Capítulo 17.',
  '6': 'Seleção por amostragem.',
};


const AnexoO: React.FC = () => {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [age, setAge] = useState<string>('');
    const [selectedPurposeId, setSelectedPurposeId] = useState<number | null>(3);
    const [isObservacoesOpen, setIsObservacoesOpen] = useState(false);

    const observacoesRef = useRef<HTMLElement>(null);
    const [isObservacoesVisible, setIsObservacoesVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsObservacoesVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        const currentRef = observacoesRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const handleClearFilters = () => {
        setSelectedGender(null);
        setAge('');
    };

    const handleClearAll = () => {
        handleClearFilters();
        setSelectedPurposeId(null);
    };

    const filteredExams = useMemo(() => {
        if (selectedPurposeId === null) return [];

        const purpose = examPurposes.find(p => p.id === selectedPurposeId);
        if (!purpose) return [];

        const ageNum = age ? parseInt(age, 10) : NaN;

        return purpose.exams.filter(exam => {
            const { condition } = exam;
            if (!condition) return true;

            if (selectedGender && condition.gender && selectedGender !== condition.gender) {
                return false;
            }

            if (!isNaN(ageNum) && condition.age) {
                const { min, max } = condition.age;
                if (min !== undefined && ageNum < min) return false;
                if (max !== undefined && ageNum > max) return false;
            }

            return true;
        });
    }, [selectedPurposeId, selectedGender, age]);


  return (
    <div className="min-h-screen bg-navy-main text-gray-200 p-4 sm:p-8 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-grow">

        <header className="text-center mb-16">
          <p className="font-oswald text-accent-cyan tracking-widest text-lg">DGPM-406 9ª REV</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-oswald font-bold text-white uppercase tracking-wide mt-2">
            Exames Mínimos Necessários de Acordo com a Finalidade da IS
          </h1>
          <p className="mt-4 text-xl text-gray-300">DGPM 9ª Ed. Anexo O</p>
        </header>
        
        <div className="bg-navy-light p-4 sm:p-8 rounded-lg shadow-xl border border-navy-accent">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h3 className="font-oswald text-2xl text-white mb-4">Filtros</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-300 mb-2">Sexo</label>
                                <div className="flex gap-2">
                                    <button onClick={() => setSelectedGender('Masculino')} className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${selectedGender === 'Masculino' ? 'bg-navy-main text-white ring-2 ring-accent-cyan' : 'bg-gray-200 text-navy-main hover:bg-gray-300'}`}>Masculino</button>
                                    <button onClick={() => setSelectedGender('Feminino')} className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${selectedGender === 'Feminino' ? 'bg-navy-main text-white ring-2 ring-accent-cyan' : 'bg-gray-200 text-navy-main hover:bg-gray-300'}`}>Feminino</button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="age-input" className="block text-gray-300 mb-2">Idade</label>
                                <input id="age-input" type="number" placeholder="Ex: 45" value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-navy-main border border-navy-accent text-white rounded-md p-2 focus:ring-2 focus:ring-accent-cyan focus:outline-none" />
                            </div>
                            <div className="flex gap-2 pt-2">
                                <button onClick={handleClearFilters} className="w-full bg-gray-400 hover:bg-gray-500 text-navy-main font-semibold py-2 px-4 rounded-md transition-colors">Limpar Filtros</button>
                                <button onClick={handleClearAll} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">Limpar Tudo</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-oswald text-2xl text-white mb-4">Selecione a Finalidade</h3>
                        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                           {examPurposes.map((purpose, index) => (
                               <div key={purpose.id} onClick={() => setSelectedPurposeId(purpose.id)} className={`p-4 rounded-lg cursor-pointer transition-colors flex items-start gap-3 ${selectedPurposeId === purpose.id ? 'bg-navy-main ring-2 ring-accent-cyan' : 'bg-navy-accent hover:bg-opacity-75'}`}>
                                   <div className="flex-shrink-0">
                                       {selectedPurposeId === purpose.id 
                                        ? <Icon name="check_box" className="text-accent-cyan" /> 
                                        : <Icon name="check_box_outline_blank" className="text-gray-400" />
                                       }
                                   </div>
                                   <p className="text-sm font-medium text-gray-200">{index + 1}. {purpose.name}</p>
                               </div>
                           ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <div className="sticky top-8">
                        <h3 className="font-oswald text-2xl text-white mb-4 flex justify-between items-center">
                            <span>Exames Necessários</span>
                            {selectedPurposeId !== null && (
                                <span className="bg-navy-main text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-accent-cyan">
                                    {filteredExams.length}
                                </span>
                            )}
                        </h3>
                        <div className="bg-white p-6 rounded-lg shadow-inner text-gray-800 h-[650px] overflow-y-auto">
                           {selectedPurposeId === null ? (
                             <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                                <Icon name="checklist" className="text-6xl mb-4" />
                               <p className="font-oswald text-xl">Selecione uma finalidade</p>
                               <p>Escolha uma finalidade na lista à esquerda para ver os exames necessários.</p>
                             </div>
                           ) : filteredExams.length > 0 ? (
                            <ul className="space-y-3">
                                {filteredExams.map((exam, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Icon name="check_circle" className="text-green-500 text-xl mt-0.5" />
                                        <p className="flex-1 text-base text-gray-700">
                                            {exam.name}
                                            {exam.note && legendNotes[exam.note] && (
                                                <span className="relative inline-block ml-1 group">
                                                    <span className="text-blue-600 font-bold cursor-help">({exam.note})</span>
                                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs bg-navy-main text-white text-sm rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                                        {legendNotes[exam.note]}
                                                        <svg className="absolute text-navy-main h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                                                    </span>
                                                </span>
                                            )}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                           ) : (
                             <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                                <Icon name="search_off" className="text-6xl mb-4" />
                               <p className="font-oswald text-xl">Nenhum exame encontrado</p>
                               <p>Nenhum exame corresponde aos filtros selecionados para esta finalidade.</p>
                             </div>
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section
          ref={observacoesRef}
          className={`my-16 transition-all duration-700 ease-in-out ${
            isObservacoesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="flex items-center justify-center mb-4 cursor-pointer group"
            onClick={() => setIsObservacoesOpen(!isObservacoesOpen)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsObservacoesOpen(!isObservacoesOpen); }}
            aria-expanded={isObservacoesOpen}
            aria-controls="observacoes-content"
          >
            <Icon name="info" className="text-accent-cyan text-4xl md:text-5xl" />
            <h2 className="font-oswald text-4xl md:text-5xl font-semibold text-white ml-4">
              Observações
            </h2>
            <Icon
              name="expand_more"
              className={`text-accent-cyan text-5xl ml-2 transition-transform duration-300 transform ${isObservacoesOpen ? 'rotate-180' : ''}`}
            />
          </div>

          <div
            id="observacoes-content"
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isObservacoesOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="max-w-5xl mx-auto bg-navy-light p-8 rounded-lg shadow-xl border border-navy-accent text-gray-300 mt-4">
                <ul className="list-none space-y-4">
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">a)</strong> <span>É facultado ao AMP solicitar exames que não estejam descritos na tabela acima;</span></li>
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">b)</strong> <span>A validade dos exames laboratoriais e do exame toxicológico, caso couber, será respectivamente de noventa e sessenta dias, a contar da data da coleta. Se durante esses noventa dias surgir intercorrência clínica para a qual seja julgada necessária investigação, ou sejam identificados resultados laboratoriais não compatíveis com o exame clínico, outros exames poderão ser repetidos ou realizados. O prazo de noventa dias não se aplica ao Beta-HCG qualitativo realizado por ocasião da IS para Ingresso no SAM/SMV, que deverá ser colhido em, no máximo, sete dias corridos antes da data inicial do prazo de Inspeção de Saúde estabelecido no Cronograma de Eventos do Concurso/Processo Seletivo;</span></li>
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">c)</strong> <span>A validade dos exames de Radiografia, Teste Ergométrico, Ecocardiograma e Eletroencefalograma será de um ano;</span></li>
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">d)</strong> <span>Os TIS deverão conter no campo “ANOTAÇÕES GERAIS” dos exames laboratoriais e exame toxicológico, o nome do laboratório onde foi realizado o exame, a data da coleta, o número do registro do exame (se houver) e o nome completo e registro profissional do emitente;</span></li>
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">e)</strong> <span>Os TIS deverão conter no campo “ANOTAÇÕES GERAIS” dos exames de eletroencefalograma (EEG), eletrocardiograma (ECG), Ecocardiograma (ECO) e Teste Ergométrico (TE) o nome do local onde foi realizado o exame, a data do exame, o número do registro/atendimento do exame (se houver) e o nome completo e registro profissional do emitente;</span></li>
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">f)</strong> <span>Os TIS deverão conter no campo “ANOTAÇÕES GERAIS” dos exames oftalmológicos realizados, o nome completo e registro profissional do emitente;</span></li>
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">g)</strong> <span>Nos casos de VDRL positivos, os AMP complementarão com o FTA-ABS (IgG e IgM) para diagnóstico definitivo; e</span></li>
                    <li className="flex gap-4"><strong className="text-accent-gold font-oswald">h)</strong> <span>Os exames de Audiometria deverão ser precedidos de repouso auditivo de cerca de 14h, não devendo haver uso de fones de ouvido ou exposição a ambientes com níveis elevados de ruído no dia anterior à realização.</span></li>
                </ul>
            </div>
          </div>
        </section>
        
      </div>
      <footer className="w-full max-w-7xl mx-auto mt-16 pt-8 border-t border-navy-accent flex justify-end">
        <div className="text-right text-sm text-gray-500 font-carlito">
          <p>Publicação não oficial. Prompt de IA: CT (Md) Mauriston / HNRe</p>
        </div>
      </footer>
    </div>
  );
};

export default AnexoO;
