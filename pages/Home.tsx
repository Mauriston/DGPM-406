
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start bg-navy-main p-4 pt-16 text-gray-200 sm:p-8 sm:pt-24">
      <div className="flex flex-col items-center justify-center gap-y-12 text-center">
        
        <img src="https://i.imgur.com/FdQUh6m.png" alt="Logo da Marinha do Brasil" className="h-28 w-auto mb-4" />

        <div className="flex flex-col items-center gap-y-6">
          <h1 className="font-oswald text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl md:text-7xl leading-snug">
            Normas Reguladoras para Inspeção de Saúde na Marinha
          </h1>
          <p className="font-oswald text-2xl tracking-widest text-accent-gold mt-4">
            DGPM-406 9ª REVISÃO
          </p>
          <p className="max-w-4xl text-2xl text-accent-gold">
            Infográficos com os pontos mais importância nas competências de MPI e JRS
          </p>
        </div>

        <div className="font-carlito text-center text-lg leading-relaxed text-gray-400 mt-8">
          <p>Publicação não oficial.</p>
          <p>Prompt de IA: CT (Md) Mauriston - JRS/HNRe</p>
          <a
            href="mailto:mauriston.martins@marinha.mil.br"
            className="text-accent-cyan transition-colors hover:underline hover:text-accent-gold"
          >
            mauriston.martins@marinha.mil.br
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
