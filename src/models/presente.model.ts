export interface ConfiguracaoPresente {
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
  destaques: string[];
  fotos: { url: string; legenda: string }[];
}
