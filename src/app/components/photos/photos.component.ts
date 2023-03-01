import { Component } from '@angular/core';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-imagem-lista',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent {
  imagens: Imagem[] = [
    { id: 1, title: 'Imagem 1', url: 'assets/black.jpg' },
    { id: 2, title: 'Imagem 2', url: 'assets/black.jpg' },
    { id: 3, title: 'Imagem 3', url: 'assets/black.jpg' },
    { id: 4, title: 'Imagem 4', url: 'assets/black.jpg' },
    { id: 5, title: 'Imagem 5', url: 'assets/black.jpg' },
    { id: 6, title: 'Imagem 6', url: 'assets/black.jpg' },
    
  ];
}



