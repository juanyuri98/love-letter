import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DADOS } from './models/configuracao.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  dados = DADOS;
  hasConsent = false;
  isPlaying = false;

  // Variáveis do contador
  anos = 0;
  meses = 0;
  dias = 0;
  horas = 0;
  minutos = 0;
  segundos = 0;

  private intervalId: any;

  ngOnInit(): void {
    // O Zone.js escuta este setInterval nativamente e aciona o Change Detection
    this.intervalId = setInterval(() => {
      this.calcularTempo();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  iniciarExperiencia(): void {
    this.hasConsent = true;
    setTimeout(() => {
      this.togglePlay(); // Inicia a música após renderizar o player
    }, 100);
  }

  togglePlay(): void {
    const audio = this.audioPlayer.nativeElement;
    if (audio.paused) {
      audio
        .play()
        .then(() => (this.isPlaying = true))
        .catch((err) => console.error('Erro ao tocar áudio', err));
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }

  private calcularTempo(): void {
    const agora = new Date();
    const inicio = this.dados.dataInicio;

    let diff = agora.getTime() - inicio.getTime();

    this.segundos = Math.floor((diff / 1000) % 60);
    this.minutos = Math.floor((diff / 1000 / 60) % 60);
    this.horas = Math.floor((diff / (1000 * 60 * 60)) % 24);

    // Cálculo aproximado para anos, meses e dias para fluidez visual
    const diasTotais = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.anos = Math.floor(diasTotais / 365.25);
    this.meses = Math.floor((diasTotais % 365.25) / 30.44);
    this.dias = Math.floor((diasTotais % 365.25) % 30.44);
  }
}
