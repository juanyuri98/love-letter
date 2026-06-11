export interface Configuracao {
  nomeEle: string;
  nomeEla: string;
  dataInicio: Date;
  musica: {
    titulo: string;
    artista: string;
    capaUrl: string;
    arquivoUrl: string;
  };
  mensagem: string;
  fotos: { url: string; legenda: string }[];
  mapaEstrelas: {
    url: string;
    legenda: string;
  };
}

export const DADOS: Configuracao = {
  nomeEle: 'Juan',
  nomeEla: 'Hellen',
  // TODO: ALTERAR A DATA AQUI (Ano, Mês [0-11 onde 0 é Janeiro], Dia, Hora, Minuto)
  dataInicio: new Date(2020, 1, 23, 0, 0, 0),
  musica: {
    titulo: 'Perfect',
    artista: 'Ed Sheeran',
    // TODO: Adicionar imagens e áudios reais na pasta src/assets/
    capaUrl: 'capa-musica.png',
    arquivoUrl: 'musica.mp3',
  },
  mensagem:
    'Desde o dia em que nossos caminhos se cruzaram, cada momento ao seu lado tem sido a melhor parte da minha vida. Esta é apenas uma pequena lembrança de tudo o que já vivemos e de tudo o que ainda vamos construir juntos.',
  fotos: [
    // TODO: Alterar os caminhos das fotos e as legendas
    { url: 'foto-01.jpg', legenda: 'Nosso primeiro date ❤️' },
    { url: 'foto-02.jpg', legenda: 'Quando te pedi em namoro 😍' },
    { url: 'foto-03.jpg', legenda: 'Nosso primeiro dia dos namorados 💕' },
    { url: 'foto-04.jpg', legenda: 'Nossa primeira viagem juntos ✈️' },
    { url: 'foto-05.jpg', legenda: 'Eu achei essa foto no meio da galeria e dei pala uashuash 😂' },
    { url: 'foto-06.jpg', legenda: 'Eu gosto dessa foto e até hoje uso no seu contato 😂' },
    { url: 'foto-07.jpg', legenda: 'Nós estávamos gatões nesse dia 🫦' },
    { url: 'foto-08.jpg', legenda: 'Sorvetinho que achei no meio da galeria 🍦' },
    { url: 'foto-09.jpg', legenda: 'Esse dia a gente tava bem gatões também 🫦' },
    { url: 'foto-10.jpg', legenda: 'Dia que fingimos sermos ricos aushaus 🤑' },
    { url: 'foto-11.jpeg', legenda: 'Nós correndo pós trabalho para ir para minha formatura 😂' },
    { url: 'foto-12.jpg', legenda: 'Show da(s?) AnaVitoria 🎵' },
    { url: 'foto-13.jpg', legenda: 'Essa foi logo após você palestrar na Campus Party ⚔️' },
    { url: 'foto-14.jpg', legenda: 'Nossa primeira viagem à praia 🏖️' },
  ],
  mapaEstrelas: {
    url: 'mapa-das-estrelas.png',
    legenda: 'A constelação das estrelas estava nessa posição quando demos nosso primeiro beijo',
  },
};
